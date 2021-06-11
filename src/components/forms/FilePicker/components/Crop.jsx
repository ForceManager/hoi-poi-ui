import React, { useState, useMemo, useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import ReactCrop from 'react-image-crop';

import { getOverrides, useClasses } from '../../../../utils/overrides';
import Modal from '../../../general/Modal';

import { createUseStyles } from '../../../../utils/styles';
import styles from '../styles';

const useStyles = createUseStyles(styles, 'FilePickerFile');

const imageTypes = {
    png: 'image/png',
    jpeg: 'image/jpeg',
    jpg: 'image/jpeg',
    webp: 'image/webp',
    gif: 'image/gif',
    bmp: 'image/bmp',
};

function Crop({
    aspect,
    confirmText,
    cancelText,
    classes: classesProp,
    file,
    isUrl,
    isOpen,
    onCancel,
    onAccept,
    title,
    overrides: overridesProp,
    ...props
}) {
    const classes = useClasses(useStyles, classesProp);
    const [crop, setCrop] = useState({ aspect });
    const imgRef = useRef();

    // Overrides
    const override = getOverrides(overridesProp, Crop.overrides);

    const image = useMemo(() => (isUrl ? file : file && URL.createObjectURL(file)) || null, [
        file,
        isUrl,
    ]);

    const handleOnConfirm = useCallback(() => {
        const canvas = document.createElement('canvas');
        const scaleX = imgRef.current.naturalWidth / imgRef.current.width + 200;
        const scaleY = imgRef.current.naturalHeight / imgRef.current.height + 200;
        canvas.width = crop.width;
        canvas.height = crop.height;
        const ctx = canvas.getContext('2d');
        const fileName = isUrl
            ? file.split('/').pop()
            : file.name.substr(0, file.name.lastIndexOf('.'));
        const fileExt = fileName.split('.').pop();

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
        console.log(isUrl ? imageTypes[fileExt] : file.type);
        canvas.toBlob(
            (blob) => {
                blob.name = `${fileName}_crop${fileExt}`;
                onAccept(blob);
            },
            isUrl ? imageTypes[fileExt] : file.type,
            1,
        );
    }, [crop.height, crop.width, crop.x, crop.y, file, isUrl, onAccept]);

    const onImageLoaded = useCallback((img) => {
        imgRef.current = img;
        return false;
    }, []);

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
                {image && (
                    <ReactCrop
                        src={image}
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
