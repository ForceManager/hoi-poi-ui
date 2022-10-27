import React, { useState, useMemo, useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import ReactCrop from 'react-image-crop';

import { getOverrides, useClasses } from '../../../../utils/overrides';
import Modal from '../../../general/Modal';

import { createUseStyles } from '../../../../utils/styles';
import styles from '../styles';

const useStyles = createUseStyles(styles, 'FilePickerFile');

function Crop({
    aspect,
    confirmText,
    cancelText,
    classes: classesProp,
    file,
    isOpen,
    onCancel,
    onAccept,
    title,
    overrides: overridesProp,
    ...props
}) {
    const classes = useClasses(useStyles, classesProp);
    const [crop, setCrop] = useState({});
    const imgRef = useRef();

    // Overrides
    const override = getOverrides(overridesProp, Crop.overrides);

    const src = useMemo(() => (file && URL.createObjectURL(file)) || null, [file]);

    const handleOnConfirm = useCallback(() => {
        const canvas = document.createElement('canvas');
        const scaleX = imgRef.current.naturalWidth / imgRef.current.width;
        const scaleY = imgRef.current.naturalHeight / imgRef.current.height;
        canvas.width = crop.width;
        canvas.height = crop.height;
        const ctx = canvas.getContext('2d');
        const hasExtension = file.name.split('.').length > 1;
        let fileName = '';
        let fileExt = '';

        if (hasExtension) {
            fileName = file.name.substr(0, file.name.lastIndexOf('.'));
            fileExt = file.name.split('.').pop();
        } else {
            fileName = file.name;
        }

        ctx.drawImage(
            imgRef.current,
            crop.x * scaleX,
            crop.y * scaleY,
            crop.width * scaleX,
            crop.height * scaleY,
            0,
            0,
            crop.width,
            crop.height,
        );

        canvas.toBlob(
            (blob) => {
                let newFileName = '';
                if (hasExtension) {
                    newFileName = fileName.includes('_crop')
                        ? `${fileName}.${fileExt}`
                        : `${fileName}_crop.${fileExt}`;
                } else {
                    newFileName = fileName.includes('_crop') ? `${fileName}` : `${fileName}_crop`;
                }

                blob.name = newFileName;
                onAccept(blob);
            },
            file.type,
            1,
        );
    }, [crop.height, crop.width, crop.x, crop.y, file, onAccept]);

    const onImageLoaded = useCallback(
        (img) => {
            imgRef.current = img;
            const imageAspect = img.width / img.height;
            let width;
            let height;
            if (aspect && imageAspect > 1) {
                // Image landscape & aspect
                if (aspect > 1) {
                    // Crop landscape
                    if (imageAspect < aspect) {
                        // Crop more landscape than image
                        width = img.width * 0.6;
                        height = width / aspect;
                    } else {
                        // Crop less landscape or equal than image
                        height = img.height * 0.6;
                        width = height * aspect;
                    }
                } else {
                    // Crop Portrait or square
                    height = img.height * 0.6;
                    width = height * aspect;
                }
            } else if (aspect) {
                // Image Portrait or square & aspect
                if (aspect < 1) {
                    // Crop Portrait
                    if (imageAspect > aspect) {
                        // Crop more landscape than image
                        height = img.height * 0.6;
                        width = height / aspect;
                    } else {
                        // Crop less landscape or equal than image
                        width = img.width * 0.6;
                        height = width / aspect;
                    }
                } else {
                    // Crop landscape or square
                    width = img.width * 0.6;
                    height = width / aspect;
                }
            } else if (imageAspect > 1) {
                // Image landscape
                width = img.height * 0.6;
                height = img.height * 0.6;
            } else {
                // Image Portrait or square
                width = img.width * 0.6;
                height = img.width * 0.6;
            }

            setCrop({
                aspect,
                x: (img.width - width) / 2,
                y: (img.height - height) / 2,
                width,
                height,
                unit: 'px',
            });
            return false;
        },
        [aspect],
    );

    return (
        <Modal
            cancelText={cancelText}
            confirmText={confirmText}
            className={classes.cropModal}
            title={title}
            isOpen={isOpen}
            onCancel={onCancel}
            onConfirm={handleOnConfirm}
            useCornerClose={false}
            {...override.crop}
        >
            <div className={classes.cropModalContent}>
                {src && (
                    <ReactCrop
                        src={src}
                        crop={crop}
                        onImageLoaded={onImageLoaded}
                        onChange={setCrop}
                        className={classes.cropCanvas}
                    />
                )}
            </div>
        </Modal>
    );
}

Crop.defaultProps = {};

Crop.propTypes = {
    aspect: PropTypes.number,
    confirmText: PropTypes.string,
    cancelText: PropTypes.string,
    classes: PropTypes.object,
    file: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    isOpen: PropTypes.bool,
    onCancel: PropTypes.func,
    onAccept: PropTypes.func,
    title: PropTypes.string,
    overrides: PropTypes.object,
};

export default React.memo(Crop);
