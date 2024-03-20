import React, { useMemo, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { useDropzone } from 'react-dropzone';

import Groups from './components/Groups';
import ModalCrop from '../../general/ModalCrop';
import Icon from '../../general/Icon';
import { getOverrides, useClasses } from '../../../utils/overrides';

import Button from '../../general/Button';
import Label from '../Label';
import Text from '../../typography/Text';

import { checkBrowserCanRender } from './utils';
import { createUseStyles } from '../../../utils/styles';
import styles from './styles';

const useStyles = createUseStyles(styles, 'FilePicker');

const imageTypes = [
    'image/png',
    'image/jpeg',
    'image/webp',
    'image/gif',
    'image/bmp',
    'image/heic',
];
const imageExtensions = ['png', 'jpeg', 'jpg', 'webp', 'gif', 'bmp', 'heic'];

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
    maxVisible,
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
    groups,
    foldedText,
    unfoldedText,
    onExceedFileLimitDrop,
    ...props
}) {
    const classes = useClasses(useStyles, classesProp);
    const [crop, setCrop] = useState({ isOpen: false, file: null });
    const [totalDroppedTooltip, setTotalDroppedTooltip] = useState(0);
    const [totalDroppedByGroupTooltip, setTotalDroppedByGroupTooltip] = useState({});

    const handleOnDrop = useCallback(
        (droppedFiles) => {
            const tempDroppedByGroup = {};
            if (groups?.length) {
                const isExceededList = groups.reduce((arr, group, index) => {
                    if (!group.maxFiles || !group.validateFiles) return arr;
                    let selectedFiles = [];
                    const selectedDroppedFiles = droppedFiles.filter((file) =>
                        group.validateFiles(file),
                    );
                    tempDroppedByGroup[index] = selectedDroppedFiles;
                    if (selectedDroppedFiles.length) {
                        selectedFiles = files?.filter((file) => group.validateFiles(file)) || [];

                        const isExceeded =
                            [...selectedFiles, ...selectedDroppedFiles].length > group.maxFiles;
                        arr.push(isExceeded);
                    }
                    return arr;
                }, []);

                if (isExceededList?.length) {
                    const isExceeded = isExceededList.some((current) => current === true);
                    if (isExceeded) {
                        onExceedFileLimitDrop && onExceedFileLimitDrop(droppedFiles);
                        return;
                    }
                }
            } else if (maxFiles) {
                const isExceeded = (files?.length || 0) + (droppedFiles?.length || 0) > maxFiles;
                if (isExceeded) {
                    onExceedFileLimitDrop && onExceedFileLimitDrop(droppedFiles);
                    return;
                }
            }

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
                Promise.resolve(
                    onDrop(
                        droppedFiles.map((file) =>
                            Object.assign(file, {
                                id: Date.now(),
                            }),
                        ),
                    ),
                ).then((result) => {
                    if (groups) {
                        const newGroupTooltips = groups.reduce((obj, group, index) => {
                            if (group.maxVisible && tempDroppedByGroup?.[index]?.length) {
                                obj[index] = tempDroppedByGroup[index].length;
                            }
                            return obj;
                        }, {});

                        setTotalDroppedByGroupTooltip(newGroupTooltips);
                        setTimeout(() => {
                            setTotalDroppedByGroupTooltip({});
                        }, 2500);
                    } else if (maxVisible) {
                        setTotalDroppedTooltip(droppedFiles.length);
                        setTimeout(() => {
                            setTotalDroppedTooltip(0);
                        }, 2500);
                    }
                })
            );
        },
        [
            cropAspect,
            cropImages,
            onCrop,
            onDrop,
            groups,
            maxVisible,
            files,
            maxFiles,
            onExceedFileLimitDrop,
        ],
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
        accept: accept
            ? accept.reduce((fileTypes, fileType) => {
                  fileTypes[fileType] = [];
                  return fileTypes;
              }, {})
            : {},
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

    const showDragzone = useMemo(
        () => !(!groups && maxFiles && files.length >= maxFiles),
        [files.length, maxFiles, groups],
    );

    const renderSingleImagePreview = useMemo(() => {
        if (maxFiles !== 1 || !singleImagePreview || showDragzone) return;
        let newFile = null;
        if (files[0]?.file) newFile = files[0]?.file;
        else newFile = files[0];

        const isUrl = typeof newFile === 'string';

        const canRender = checkBrowserCanRender(isUrl ? newFile : newFile.name);

        return (
            <div className={classes.singleImagePreview}>
                {canRender && (
                    <span
                        style={{
                            backgroundImage: `url("${
                                isUrl ? newFile : URL.createObjectURL(newFile)
                            }")`,
                        }}
                    />
                )}
                {!canRender && <Icon name="img" size="big" />}
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
                <Groups
                    classes={classes}
                    classesProp={classesProp}
                    overrides={override}
                    files={files}
                    imageTypes={imageTypes}
                    imageExtensions={imageExtensions}
                    previewImages={previewImages}
                    cropImages={cropImages}
                    cropTooltip={cropTooltip}
                    handleOnCrop={handleOnCrop}
                    onRemove={onRemove}
                    filesData={filesData}
                    groups={groups}
                    foldedText={foldedText}
                    unfoldedText={unfoldedText}
                    maxVisible={maxVisible}
                    maxFiles={maxFiles}
                    totalDroppedTooltip={totalDroppedTooltip}
                    totalDroppedByGroupTooltip={totalDroppedByGroupTooltip}
                />
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

FilePicker.overrides = [
    'root',
    'filePicker',
    'error',
    'info',
    'formControl',
    'Label',
    'groups',
    'groupsHeader',
    'groupsTitle',
    'file',
    'filesList',
];

FilePicker.defaultProps = {
    labelMode: 'vertical',
    onDrop: () => {},
    files: [],
    isReadOnly: false,
    overrides: {},
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
            PropTypes.any,
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
    /** For a better behaviour use a Promise. Cb for when the drop event occurs. Note that this callback is invoked after the getFilesFromEvent callback is done. */
    onDrop: PropTypes.func,
    /** For a better behaviour use a Promise */
    onRemove: PropTypes.func,
    overrides: PropTypes.object,
    title: PropTypes.string,
    /** Additional info for size limits, accepted file types and others */
    subtitle: PropTypes.string,
    previewImages: PropTypes.bool,
    groups: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string,
            maxFiles: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
            validateFiles: PropTypes.func,
        }),
    ),
    /** If maxVisible is true you need to provide foldedText/unfoldedText */
    maxVisible: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    foldedText: PropTypes.string,
    unfoldedText: PropTypes.string,
    /** Callback triggered when dropped files exceed the maxFiles*/
    onExceedFileLimitDrop: PropTypes.func,
};

export default React.memo(FilePicker);
