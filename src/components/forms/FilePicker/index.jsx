import React, { useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { useDropzone } from 'react-dropzone';
import { getOverrides, useClasses } from '../../../utils/overrides';
import Icon from '../../general/Icon';
import Label from '../Label';
import Text from '../../typography/Text';

import { createUseStyles, useTheme } from '../../../utils/styles';
import styles from './styles';

const useStyles = createUseStyles(styles, 'FilePicker');

function FilePicker({
    classes: classesProp,
    overrides: overridesProp,
    className: classNameProp,
    onDrop,
    onRemove,
    limit,
    accept,
    disabled,
    maxSize,
    minSize,
    multiple,
    id,
    name,
    files,
    label,
    labelMode,
    isFullWidth,
    placeholder,
    activePlaceholder,
    hint,
    error,
    info,
    isRequired,
    isReadOnly,
    ...props
}) {
    const theme = useTheme();
    const classes = useClasses(useStyles, classesProp);

    // Overrides
    const override = getOverrides(overridesProp, FilePicker.overrides);

    // Classes
    const rootClassName = classnames(
        classes.root,
        {
            [classes.isReadOnly]: isReadOnly,
            [classes[labelMode]]: labelMode,
            [classes.errored]: error,
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

    const handleOnDrop = useCallback(
        (droppedFiles) =>
            onDrop(
                droppedFiles.filter(
                    (droppedFile) =>
                        !files.some(
                            (file) =>
                                file.name === droppedFile.name &&
                                file.size === droppedFile.size &&
                                file.type === droppedFile.type,
                        ),
                ),
            ),
        [files, onDrop],
    );

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop: handleOnDrop,
        accept,
        disabled,
        maxSize,
        minSize,
        multiple,
        ...props,
    });

    const ICON_NAMES = {
        document: 'document',
        'application/zip': 'zip',
        'application/vnd.rar': 'zip',
        'application/x-7z-compressed': 'zip',
    };

    const renderFiles = useMemo(() => {
        if (!files.length) return null;
        const filesList = files.map((file, i) => (
            <div key={i} className={classes.file}>
                <div className={classes.iconNameContainer}>
                    <span className={classes.fileIcon}>
                        <Icon name={ICON_NAMES[file.type] || ICON_NAMES['document']} />
                    </span>
                    <Text>{file.name}</Text>
                </div>
                <span onClick={() => onRemove(file)} className={classes.clear}>
                    <Icon name="close" />
                </span>
            </div>
        ));
        return <div className={classes.files}>{filesList}</div>;
    }, [
        ICON_NAMES,
        classes.clear,
        classes.file,
        classes.fileIcon,
        classes.files,
        classes.iconNameContainer,
        files,
        onRemove,
    ]);

    const showDragzone = useMemo(() => !(limit && files.length === limit), [files.length, limit]);

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
                    <div className={classes.dropZone} {...getRootProps()}>
                        <input {...getInputProps()} {...filePickerProps} />
                        {isDragActive ? (
                            <div className={classes.dropZoneActive}>
                                <Text className={classes.activePlaceholder}>
                                    {activePlaceholder || placeholder}
                                </Text>
                            </div>
                        ) : (
                            <div className={classes.dropZoneInactive}>
                                <Icon
                                    name="cloudUpload"
                                    className={classes.cloudUploadIcon}
                                    color={theme.colors.greySoft}
                                />
                                <Text className={classes.placeholder}>{placeholder}</Text>
                            </div>
                        )}
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
    labelMode: 'horizontal',
    onDrop: () => {},
    files: [],
    isReadOnly: false,
    override: {},
};

FilePicker.propTypes = {
    className: PropTypes.string,
    overrides: PropTypes.object,
    onDrop: PropTypes.func,
    limit: PropTypes.number,
    /** Native filePicker id */
    id: PropTypes.string,
    /** Native filePicker name */
    name: PropTypes.string,
    files: PropTypes.array,
    label: PropTypes.string,
    labelMode: PropTypes.oneOf(['horizontal', 'vertical']),
    placeholder: PropTypes.string,
    activePlaceholder: PropTypes.string,
    /** Info popover */
    hint: PropTypes.string,
    /** Error will be displayed below the component with style changes */
    error: PropTypes.string,
    /** Info will be displayed below the component with style changes */
    info: PropTypes.string,
    isRequired: PropTypes.bool,
    isReadOnly: PropTypes.bool,
};

export default React.memo(FilePicker);
