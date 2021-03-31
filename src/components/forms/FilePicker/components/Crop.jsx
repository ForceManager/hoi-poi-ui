import React, { useState, useCallback } from 'react';
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
    image,
    name,
    type,
    isOpen,
    onCancel,
    onAccept,
    title,
    overrides: overridesProp,
    ...props
}) {
    const classes = useClasses(useStyles, classesProp);
    const [crop, setCrop] = useState({ aspect });
    console.log('image', image);

    // Overrides
    const override = getOverrides(overridesProp, Crop.overrides);

    const handleOnConfirm = useCallback(() => {
        const canvas = document.createElement('canvas');
        const scaleX = image.naturalWidth / image.width;
        const scaleY = image.naturalHeight / image.height;
        canvas.width = crop.width;
        canvas.height = crop.height;
        const ctx = canvas.getContext('2d');

        ctx.drawImage(
            image,
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
                blob.name = `${name}_crop`;
                onAccept(blob);
            },
            type,
            1,
        );
    }, [crop.height, crop.width, crop.x, crop.y, image, name, onAccept, type]);

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
    file: PropTypes.object,
    isOpen: PropTypes.bool,
    onCancel: PropTypes.func,
    onAccept: PropTypes.func,
    title: PropTypes.string,
    overrides: PropTypes.object,
};

export default React.memo(Crop);
