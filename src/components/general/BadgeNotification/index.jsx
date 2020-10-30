import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { getOverrides, useClasses } from '../../../utils/overrides';
import Text from '../../typography/Text';

import { createUseStyles } from '../../../utils/styles';
import styles from './styles';
const useStyles = createUseStyles(styles, 'Badge');

const fontBySize = {
    small: 'badges',
    medium: 'caption',
};

function BadgeNotification({
    classes: classesProp,
    children,
    overrides: overridesProp,
    className: classNameProp,
    size,
    ...props
}) {
    const classes = useClasses(useStyles, classesProp);
    // Overrides
    const override = getOverrides(overridesProp, BadgeNotification.overrides);

    // Classes
    const rootClassName = classnames(
        classes.root,
        {
            [classes[size]]: size,
        },
        classNameProp,
    );

    const rootProps = {
        ...props,
        className: rootClassName,
    };

    return (
        <div {...rootProps} {...override.root}>
            <Text
                type={fontBySize[size] || fontBySize.medium}
                className={classes.Text}
                {...override.Text}
            >
                {children}
            </Text>
        </div>
    );
}

BadgeNotification.overrides = ['root', 'Text'];

BadgeNotification.defaultProps = {
    className: '',
    overrides: {},
    size: 'medium',
};

BadgeNotification.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    overrides: PropTypes.object,
    size: PropTypes.oneOf(['small', 'medium']),
};

export default React.memo(BadgeNotification);
