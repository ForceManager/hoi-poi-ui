import React, { useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { useDropzone } from 'react-dropzone';

import File from './File';
import { getOverrides, useClasses } from '../../../utils/overrides';
import Button from '../../general/Button';
import Label from '../Label';
import Text from '../../typography/Text';

import { createUseStyles } from '../../../utils/styles';
import styles from './styles';

const useStyles = createUseStyles(styles, 'FilePicker');

function FilePicker({
    accept,
    buttonLabel,
    classes: classesProp,
    className: classNameProp,
    disabled,
    error,
    files,
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
    multiple,
    name,
    onDrop,
    onRemove,
    overrides: overridesProp,
    placeholder,
    previewImages,
    ...props
}) {
    const classes = useClasses(useStyles, classesProp);

    const handleOnDrop = useCallback(
        (droppedFiles) => {
            let uniqueFiles = droppedFiles.filter(
                (droppedFile) =>
                    !files.some(
                        (file) =>
                            file.name === droppedFile.name &&
                            file.size === droppedFile.size &&
                            file.type === droppedFile.type,
                    ),
            );
            if (previewImages) {
                uniqueFiles = uniqueFiles.map((file) =>
                    Object.assign(file, {
                        preview: URL.createObjectURL(file),
                    }),
                );
            }
            return onDrop(uniqueFiles);
        },
        [files, onDrop, previewImages],
    );

    const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
        onDrop: handleOnDrop,
        accept,
        disabled,
        maxSize,
        minSize,
        multiple,
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
        const filesList = files.map((file, i) => (
            <File key={i} file={file} onRemove={onRemove} overrides={overridesProp} />
        ));

        return <div className={classes.files}>{filesList}</div>;
    }, [classes.files, files, onRemove, overridesProp]);

    const showDragzone = useMemo(() => !(maxFiles && files.length === maxFiles), [
        files.length,
        maxFiles,
    ]);

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
                {showDragzone && (
                    <div className={dropZoneClassName} {...getRootProps()}>
                        <input {...getInputProps()} {...filePickerProps} />
                        <Button className={classes.button} type="secondary" onClick={open}>
                            {buttonLabel}
                        </Button>
                        <Text className={classes.placeholder}>{placeholder}</Text>
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
        </div>
    );
}

FilePicker.overrides = ['root', 'filePicker', 'error', 'info', 'formControl', 'label'];

FilePicker.defaultProps = {
    labelMode: 'vertical',
    onDrop: () => {},
    files: [],
    isReadOnly: false,
    overrides: {},
    maxFiles: 0,
    placeholder: 'or drop files here',
    buttonLabel: 'Select file',
};

FilePicker.propTypes = {
    /** Set accepted file types */
    accept: PropTypes.array,
    activePlaceholder: PropTypes.string,
    buttonLabel: PropTypes.string,
    classes: PropTypes.object,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    /** Error will be displayed below the component with style changes */
    error: PropTypes.string,
    files: PropTypes.array,
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
    /** Native filePicker name */
    multiple: PropTypes.number,
    /** Native filePicker name */
    name: PropTypes.string,
    /** Cb for when the drop event occurs. Note that this callback is invoked after the getFilesFromEvent callback is done. */
    onDrop: PropTypes.func,
    onRemove: PropTypes.func,
    overrides: PropTypes.object,
    placeholder: PropTypes.string,
};

export default React.memo(FilePicker);
