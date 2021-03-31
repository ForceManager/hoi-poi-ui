import React, { useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import prettyBytes from 'pretty-bytes';

import { getOverrides, useClasses } from '../../../../utils/overrides';
import Icon from '../../../general/Icon';
import Text from '../../../typography/Text';
import FILE_TYPES from '../FILE_TYPES';

import { createUseStyles } from '../../../../utils/styles';
import styles from '../styles';

const useStyles = createUseStyles(styles, 'FilePickerFile');

function File({
    classes: classesProp,
    file,
    preview,
    crop,
    onRemove,
    onCrop,
    overrides: overridesProp,
    ...props
}) {
    const classes = useClasses(useStyles, classesProp);

    // Overrides
    const override = getOverrides(overridesProp, File.overrides);

    const image = useMemo(() => (preview && URL.createObjectURL(file)) || null, [file, preview]);

    const handleOnRemove = useCallback(() => onRemove(file), [file, onRemove]);

    const handleOnCrop = useCallback(() => onCrop(image, file.type, file.name), [
        file.name,
        file.type,
        image,
        onCrop,
    ]);

    const renderIcon = useMemo(() => {
        if (image)
            return (
                <span
                    style={{
                        backgroundImage: `url("${image}")`,
                    }}
                />
            );
        return <Icon name={FILE_TYPES[file.type] || 'file'} />;
    }, [file.type, image]);

    const renderCrop = useMemo(() => {
        if (!crop) return null;
        return (
            <span onClick={handleOnCrop} className={classes.crop}>
                <Icon name="crop" />
            </span>
        );
    }, [crop, handleOnCrop, classes.crop]);

    return (
        <div className={classes.file} {...override.file}>
            <div className={classes.fileDataContainer}>
                <div className={classes.fileIconContainer}>{renderIcon}</div>
                <div className={classes.fileTextContainer}>
                    <Text className={classes.fileName}>{file.name}</Text>
                    <Text className={classes.fileSize}>({prettyBytes(file.size)})</Text>
                </div>
            </div>
            <div className={classes.actions}>
                {renderCrop}
                <span onClick={handleOnRemove} className={classes.clear}>
                    <Icon name="close" />
                </span>
            </div>
        </div>
    );
}

File.defaultProps = {};

File.propTypes = {
    classes: PropTypes.object,
    className: PropTypes.string,
    onRemove: PropTypes.func,
    overrides: PropTypes.object,
};

export default React.memo(File);
