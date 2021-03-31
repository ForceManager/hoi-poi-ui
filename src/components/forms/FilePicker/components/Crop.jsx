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
    const [crop, setCrop] = useState({ aspect });
    const imgRef = useRef();

    // Overrides
    const override = getOverrides(overridesProp, Crop.overrides);

    const image = useMemo(() => (file && URL.createObjectURL(file)) || {}, [file]);
    console.log('Crop', file, image);

    const handleOnConfirm = useCallback(() => {
        const canvas = document.createElement('canvas');
        const scaleX = imgRef.current.naturalWidth / imgRef.current.width;
        const scaleY = imgRef.current.naturalHeight / imgRef.current.height;
        canvas.width = crop.width;
        canvas.height = crop.height;
        const ctx = canvas.getContext('2d');

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
                blob.name = `${file.name}_crop`;
                onAccept(blob);
            },
            file.type,
            1,
        );
    }, [crop.height, crop.width, crop.x, crop.y, file, onAccept]);

    const onImageLoaded = useCallback((img) => {
        console.log('onLoad', img);
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
                <ReactCrop
                    src={image}
                    crop={crop}
                    onImageLoaded={onImageLoaded}
                    onChange={setCrop}
                    className={classes.cropCanvas}
                />
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
    file: PropTypes.object,
    isOpen: PropTypes.bool,
    onCancel: PropTypes.func,
    onAccept: PropTypes.func,
    title: PropTypes.string,
    overrides: PropTypes.object,
};

export default React.memo(Crop);
