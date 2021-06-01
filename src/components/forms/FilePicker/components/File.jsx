import React, { useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import prettyBytes from 'pretty-bytes';

import { getOverrides, useClasses } from '../../../../utils/overrides';
import Icon from '../../../general/Icon';
import Loader from '../../../general/Loader';
import Tooltip from '../../../utils/Tooltip';
import Text from '../../../typography/Text';
import FILE_TYPES from '../FILE_TYPES';

import { createUseStyles, useTheme } from '../../../../utils/styles';
import styles from '../styles';

const useStyles = createUseStyles(styles, 'FilePickerFile');

function File({
    classes: classesProp,
    error,
    file,
    preview,
    crop,
    cropTooltip,
    index,
    loading,
    onRemove,
    onCrop,
    overrides: overridesProp,
    progress,
    ...props
}) {
    const classes = useClasses(useStyles, classesProp);
    const theme = useTheme();

    // Overrides
    const override = getOverrides(overridesProp, File.overrides);

    const handleOnRemove = useCallback(() => onRemove(file), [file, onRemove]);

    const handleOnCrop = useCallback(() => onCrop(file, index), [file, index, onCrop]);

    const renderIcon = useMemo(() => {
        if (error) return <Icon name="errorOutline" color={theme.colors.red500} />;
        if (loading) return <Loader size="tiny" />;
        if (preview)
            return (
                <span
                    style={{
                        backgroundImage: `url("${URL.createObjectURL(file)}")`,
                    }}
                />
            );
        return <Icon name={FILE_TYPES[file.type] || 'file'} />;
    }, [error, theme.colors.red500, loading, preview, file]);

    const renderCrop = useMemo(() => {
        if (!crop) return null;
        return (
            <Tooltip placement="top" content={<span>{cropTooltip}</span>}>
                <span onClick={handleOnCrop} className={classes.crop}>
                    <Icon name="crop" />
                </span>
            </Tooltip>
        );
    }, [crop, cropTooltip, handleOnCrop, classes.crop]);

    const fileClassName = classnames(classes.file, {
        [classes.fileError]: error,
        [classes.fileLoading]: loading,
    });

    return (
        <div className={fileClassName} {...override.file}>
            <div className={classes.fileDataContainer}>
                <div className={classes.fileIconContainer}>{renderIcon}</div>
                <div className={classes.fileTextContainer}>
                    <div className={classes.fileNameContainer}>
                        <Tooltip placement="top" content={<span>{file.name}</span>}>
                            <Text className={classes.fileName}>{file.name}</Text>
                        </Tooltip>
                    </div>
                    {!error && <Text className={classes.fileSize}>({prettyBytes(file.size)})</Text>}
                    {error && error.length && (
                        <Text className={classes.fileErrorText}>{error}</Text>
                    )}
                </div>
            </div>
            <div className={classes.actions}>
                {renderCrop}
                {!loading && (
                    <span onClick={handleOnRemove} className={classes.clear}>
                        <Icon name="close" />
                    </span>
                )}
            </div>
            {!!progress && <span className={classes.progress} style={{ width: `${progress}%` }} />}
        </div>
    );
}

File.defaultProps = {};

File.propTypes = {
    classes: PropTypes.object,
    className: PropTypes.string,
    index: PropTypes.number,
    onRemove: PropTypes.func,
    overrides: PropTypes.object,
};

export default React.memo(File);
