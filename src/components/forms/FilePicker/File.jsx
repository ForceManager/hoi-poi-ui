import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import prettyBytes from 'pretty-bytes';

import { getOverrides, useClasses } from '../../../utils/overrides';
import Icon from '../../general/Icon';
import Text from '../../typography/Text';
import FILE_TYPES from './FILE_TYPES';

import { createUseStyles } from '../../../utils/styles';
import styles from './styles';

const useStyles = createUseStyles(styles, 'FilePickerFile');

function File({ classes: classesProp, file, onRemove, overrides: overridesProp, ...props }) {
    const classes = useClasses(useStyles, classesProp);

    // Overrides
    const override = getOverrides(overridesProp, File.overrides);

    const renderIcon = useCallback(() => {
        if (file.preview) return <img src={file.preview} alt={file.name} />;
        return <Icon name={FILE_TYPES[file.type] || 'file'} />;
    }, [file.name, file.preview, file.type]);

    return (
        <div className={classes.file} {...override.file}>
            <div className={classes.fileDataContainer}>
                <span className={classes.fileIconContainer}>{renderIcon}</span>
                <span className={classes.fileTextContainer}>
                    <Text className={classes.fileName}>{file.name}</Text>
                    <Text className={classes.fileSize}>({prettyBytes(file.size)})</Text>
                </span>
            </div>
            <span onClick={() => onRemove(file)} className={classes.clear}>
                <Icon name="close" />
            </span>
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
