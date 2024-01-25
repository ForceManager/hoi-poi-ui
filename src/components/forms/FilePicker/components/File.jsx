import React, { useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import prettyBytes from '../../../../utils/prettyBytes';
import Icon from '../../../general/Icon';
import Loader from '../../../general/Loader';
import Tooltip from '../../../utils/Tooltip';
import Text from '../../../typography/Text';
import FILE_TYPES from '../FILE_TYPES';
import FILE_EXTENSIONS from '../FILE_EXTENSIONS';

import { useTheme } from '../../../../utils/styles';

function File({
    classes,
    index,
    id,
    file,
    loading,
    progress,
    error,
    isUrl,
    preview,
    crop,
    cropTooltip,
    onRemove,
    onCrop,
    overrides,
    ...props
}) {
    const theme = useTheme();

    const canRemove = useMemo(() => {
        if (typeof file?.canRemove === 'boolean' && !file.canRemove) return false;
        return true;
    }, [file]);

    const handleOnRemove = useCallback(() => {
        if (!canRemove) return;
        if (id) {
            onRemove({ id, file });
        } else {
            onRemove(file);
        }
    }, [file, onRemove, id, canRemove]);

    const handleOnCrop = useCallback(() => {
        if (isUrl) {
            fetch(file)
                .then((res) => res.blob())
                .then((blob) => {
                    blob.name = file.split('/').pop();
                    onCrop(blob, index, id);
                })
                .catch(console.error);
        } else {
            onCrop(file, index, id);
        }
    }, [file, index, id, isUrl, onCrop]);

    const renderIcon = useMemo(() => {
        if (error) return <Icon name="errorOutline" color={theme.colors.red500} />;
        if (loading) return <Loader size="tiny" />;
        if (preview)
            return (
                <span
                    style={{
                        backgroundImage: `url("${isUrl ? file : URL.createObjectURL(file)}")`,
                    }}
                />
            );
        return <Icon name={FILE_TYPES[file.type] || FILE_EXTENSIONS[file.type] || 'file'} />;
    }, [error, theme.colors.red500, loading, preview, isUrl, file]);

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
        <div className={fileClassName} {...overrides.file}>
            <div className={classes.fileDataContainer}>
                <div className={classes.fileIconContainer}>{renderIcon}</div>
                <div className={classes.fileTextContainer}>
                    <div className={classes.fileNameContainer}>
                        <Text className={classes.fileName} type="caption" isTruncated useTooltip>
                            {isUrl ? file.split('/').pop() : file.name}
                        </Text>
                    </div>
                    {!error && !isUrl && (
                        <Text className={classes.fileSize} type="caption">
                            ({prettyBytes(file.size)})
                        </Text>
                    )}
                    {error && error.length && (
                        <Text className={classes.fileErrorText} type="caption">
                            {error}
                        </Text>
                    )}
                </div>
            </div>
            <div className={classes.actions}>
                {renderCrop}
                {!loading && canRemove && (
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
