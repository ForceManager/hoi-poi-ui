import React, { useMemo, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { useDropzone } from 'react-dropzone';

import File from './components/File';
import ModalCrop from '../../general/ModalCrop';
import { getOverrides, useClasses } from '../../../utils/overrides';
import Button from '../../general/Button';
import Label from '../Label';
import Text from '../../typography/Text';

import { createUseStyles } from '../../../utils/styles';
import styles from './styles';

const useStyles = createUseStyles(styles, 'FilePicker');

const imageTypes = ['image/png', 'image/jpeg', 'image/webp', 'image/gif', 'image/bmp'];
const imageExtensions = ['png', 'jpeg', 'jpg', 'webp', 'gif', 'bmp'];

function FilePicker({
    accept,
    buttonLabel,
    classes: classesProp,
    className: classNameProp,
    cropAspect,
    cropImages,
    cropTitle,
    cropTooltip,
    cropAcceptLabel,
    cropCancelLabel,
    disabled,
    error,
    files,
    filesData,
    hint,
    id,
    info,
    isFullWidth,
    isReadOnly,
    isRequired,
    label,
    labelMode,
    maxFiles,
    maxSize,
    minSize,
    maxHeight,
    maxWidth,
    minHeight,
    minWidth,
    multiple,
    name,
    onCrop,
    onDrop,
    onRemove,
    overrides: overridesProp,
    previewImages,
    singleImagePreview,
    title,
    subtitle,
    ...props
}) {
    const classes = useClasses(useStyles, classesProp);
    const [crop, setCrop] = useState({ isOpen: false, file: null });

    const handleOnDrop = useCallback(
        (droppedFiles) => {
            if (
                cropImages &&
                onCrop &&
                cropAspect &&
                droppedFiles.length === 1 &&
                imageTypes.includes(droppedFiles[0].type)
            ) {
                return setCrop({ isOpen: true, file: droppedFiles[0], index: -1 });
            }
            return (
                onDrop &&
                onDrop(
                    droppedFiles.map((file) =>
                        Object.assign(file, {
                            id: Date.now(),
                        }),
                    ),
                )
            );
        },
        [cropAspect, cropImages, onCrop, onDrop],
    );

    const handleOnCrop = useCallback((file, index, id) => {
        setCrop({ isOpen: true, file, index, id });
    }, []);

    const handleOnCancelCrop = useCallback(() => {
        setCrop({ ...crop, isOpen: false });
    }, [crop]);

    const handleOnAcceptCrop = useCallback(
        (file) => {
            const newFile = crop.id ? { id: crop.id, file } : file;
            crop.index === -1 ? onDrop && onDrop([file]) : onCrop && onCrop(newFile, crop.index);
            setCrop({ ...crop, isOpen: false });
        },
        [crop, onCrop, onDrop],
    );

    const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
        onDrop: handleOnDrop,
        accept,
        disabled,
        maxSize,
        minSize,
        multiple: multiple && !cropAspect,
        ...props,
        noClick: true,
        noKeyboard: true,
    });

    // Overrides
    const override = getOverrides(overridesProp, FilePicker.overrides);

    // Classes
    const rootClassName = classnames(
        classes.root,
        {
            [classes.isReadOnly]: isReadOnly,
            [classes[labelMode]]: labelMode,
            [classes.isFullWidth]: isFullWidth,
            [classes.errored]: error,
        },
        classNameProp,
    );

    const dropZoneClassName = classnames(
        classes.dropZone,
        {
            [classes.isDragActive]: isDragActive,
            [classes.disabled]: disabled,
        },
        classNameProp,
    );

    const rootProps = {
        className: rootClassName,
    };

    const labelProps = {
        className: classes.Label,
        isRequired,
        hint,
        ...override.Label,
    };

    const renderFiles = useMemo(() => {
        if (!files.length) return null;

        const filesList = files.map((file, i) => {
            let newFile = file;
            let fileId = '';
            if (file.file) newFile = file.file;
            // if there is file.file then file.id will be used to keep tracking of the file
            // and the file will be returned with the same format in onRemove and onCrop {id, file}
            if (file.id && file.file) fileId = file.id;
            const isUrl = typeof newFile === 'string';
            const isImage =
                (!isUrl && imageTypes.includes(newFile.type)) ||
                (isUrl && imageExtensions.includes(newFile.split('.').pop()));
            const preview = previewImages && isImage;
            const crop = cropImages && isImage;
            const data = filesData?.[newFile.id] || {};

            return (
                <File
                    key={i}
                    index={i}
                    id={fileId}
                    classes={classesProp}
                    crop={crop}
                    cropTooltip={cropTooltip}
                    loading={data.loading}
                    error={data.error}
                    progress={data.progress}
                    file={newFile}
                    isUrl={isUrl}
                    onCrop={handleOnCrop}
                    onRemove={onRemove}
                    overrides={overridesProp}
                    preview={preview}
                />
            );
        });

        return <div className={classes.files}>{filesList}</div>;
    }, [
        classes.files,
        classesProp,
        cropImages,
        cropTooltip,
        files,
        filesData,
        handleOnCrop,
        onRemove,
        overridesProp,
        previewImages,
    ]);

    const showDragzone = useMemo(
        () => !(maxFiles && files.length === maxFiles),
        [files.length, maxFiles],
    );

    const renderSingleImagePreview = useMemo(() => {
        if (maxFiles !== 1 || !singleImagePreview || showDragzone) return;
        let newFile = null;
        if (files[0]?.file) newFile = files[0]?.file;
        else newFile = files[0];

        const isUrl = typeof newFile === 'string';

        return (
            <div className={classes.singleImagePreview}>
                <span
                    style={{
                        backgroundImage: `url("${isUrl ? newFile : URL.createObjectURL(newFile)}")`,
                    }}
                />
            </div>
        );
    }, [classes.singleImagePreview, files, maxFiles, showDragzone, singleImagePreview]);

    let filePickerProps = {
        id,
        name,
        className: classes.input,
        ...override.input,
    };

    return (
        <div {...rootProps} {...override.root}>
            {label && <Label {...labelProps}>{label}</Label>}
            <div className={classes.formControl} {...override.formControl}>
                {renderSingleImagePreview}
                {showDragzone && (
                    <div className={dropZoneClassName} {...getRootProps()}>
                        <input {...getInputProps()} {...filePickerProps} />
                        <Text type="subtitle" className={classes.title}>
                            {title}
                        </Text>
                        <Text type="caption" className={classes.subtitle}>
                            {subtitle}
                        </Text>
                        <Button className={classes.button} type="secondary" onClick={open}>
                            {buttonLabel}
                        </Button>
                    </div>
                )}
                {renderFiles}
                {info && (
                    <div className={classes.info} {...override.info}>
                        {info}
                    </div>
                )}
                {error && (
                    <div className={classes.error} {...override.error}>
                        {error}
                    </div>
                )}
            </div>
            <ModalCrop
                aspect={cropAspect}
                classes={classesProp}
                file={crop.file}
                isOpen={crop.isOpen}
                onAccept={handleOnAcceptCrop}
                onCancel={handleOnCancelCrop}
                confirmText={cropAcceptLabel}
                cancelText={cropCancelLabel}
                overrides={overridesProp}
                title={cropTitle}
            />
        </div>
    );
}

FilePicker.overrides = ['root', 'filePicker', 'error', 'info', 'formControl', 'Label'];

FilePicker.defaultProps = {
    labelMode: 'vertical',
    onDrop: () => {},
    files: [],
    isReadOnly: false,
    overrides: {},
    maxFiles: 0,
    title: 'Drop files here',
    buttonLabel: 'Select file',
    cropTitle: 'Crop image',
    cropTooltip: 'Crop image',
    cropAcceptLabel: 'Crop',
    cropCancelLabel: 'Cancel',
    previewImages: false,
};

FilePicker.propTypes = {
    /** Set accepted file types */
    accept: PropTypes.array,
    activePlaceholder: PropTypes.string,
    buttonLabel: PropTypes.string,
    classes: PropTypes.object,
    className: PropTypes.string,
    cropAspect: PropTypes.number,
    cropImages: PropTypes.bool,
    cropAcceptLabel: PropTypes.string,
    cropCancelLabel: PropTypes.string,
    cropTitle: PropTypes.string,
    cropTooltip: PropTypes.string,
    disabled: PropTypes.bool,
    /** Error will be displayed below the component with style changes */
    error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    files: PropTypes.arrayOf(
        PropTypes.oneOfType([
            PropTypes.object,
            PropTypes.shape({
                id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
                file: PropTypes.object,
            }),
        ]),
    ),
    filesData: PropTypes.object,
    /** Info popover */
    hint: PropTypes.string,
    /** Native filePicker id */
    id: PropTypes.string,
    /** Info will be displayed below the component with style changes */
    info: PropTypes.string,
    isFullWidth: PropTypes.bool,
    isReadOnly: PropTypes.bool,
    isRequired: PropTypes.bool,
    label: PropTypes.string,
    labelMode: PropTypes.oneOf(['horizontal', 'vertical']),
    /** Maximum accepted number of files The default value is 0 which means there is no limitation to how many files are accepted. */
    maxFiles: PropTypes.number,
    /** Maximum file size (in bytes) */
    maxSize: PropTypes.number,
    /** Minimum file size (in bytes) */
    minSize: PropTypes.number,
    /** Maximum image height (in pixels) */
    maxHeight: PropTypes.number,
    /** Maximum image width (in pixels) */
    maxWidth: PropTypes.number,
    /** Minimum image height (in pixels) */
    minHeight: PropTypes.number,
    /** Minimum image width (in pixels) */
    minWidth: PropTypes.number,
    multiple: PropTypes.bool,
    /** Native filePicker name */
    name: PropTypes.string,
    onCrop: PropTypes.func,
    /** Cb for when the drop event occurs. Note that this callback is invoked after the getFilesFromEvent callback is done. */
    onDrop: PropTypes.func,
    onRemove: PropTypes.func,
    overrides: PropTypes.object,
    title: PropTypes.string,
    /** Additional info for size limits, accepted file types and others */
    subtitle: PropTypes.string,
    previewImages: PropTypes.bool,
};

export default React.memo(FilePicker);
