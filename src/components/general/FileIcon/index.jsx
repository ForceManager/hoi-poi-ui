import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { FileIcon as FI } from 'react-file-icon';

import { getOverrides, useClasses } from '../../../utils/overrides';
import { createUseStyles } from '../../../utils/styles';
import defaultStyles from './defaultStyles';
import styles from './styles';
const useStyles = createUseStyles(styles, 'FileIcon');

function FileIcon({
    extension,
    size,
    overrides: overridesProp,
    className: classNameProp,
    classes: classesProp,
    onClick,
    ...props
}) {
    const classes = useClasses(useStyles, classesProp);

    // Overrides
    const override = getOverrides(overridesProp, FileIcon.overrides);

    // Classes
    const rootClassName = classnames(
        classes.root,
        classes[size],
        {
            [classes.clickable]: !!onClick,
        },
        classNameProp,
    );

    return (
        <span onClick={onClick} className={rootClassName} {...override.root}>
            <FI
                onClick={onClick}
                className={rootClassName}
                extension={extension}
                radius={0}
                labelUppercase
                {...defaultStyles[extension]}
                {...override.icon}
            ></FI>
        </span>
    );
}

FileIcon.defaultProps = {
    size: 'large',
    overrides: {},
};

FileIcon.propTypes = {
    className: PropTypes.string,
    overrides: PropTypes.object,
    extension: PropTypes.string,
    size: PropTypes.oneOf(['small', 'medium', 'large', 'big', 'huge']),
    onClick: PropTypes.func,
};

export default React.memo(FileIcon);
