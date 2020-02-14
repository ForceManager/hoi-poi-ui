import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { getOverrides, useClasses } from '../../../utils/overrides';
import Text from '../../typography/Text';

import { createUseStyles } from '../../../utils/styles';
import styles from './styles';
const useStyles = createUseStyles(styles, 'Badge');

function Badge({
    classes: classesProp,
    children,
    overrides: overridesProp,
    className: classNameProp,
    type,
    ...props
}) {
    const classes = useClasses(useStyles, classesProp);
    // Overrides
    const override = getOverrides(overridesProp, Badge.overrides);

    // Classes
    const rootClassName = classnames(
        classes.root,
        {
            [classes[type]]: type,
        },
        classNameProp,
    );

    const rootProps = {
        ...props,
        className: rootClassName,
    };

    return (
        <div {...rootProps} {...override.root}>
            <Text size="small" className={classes.Text} {...override.Text}>
                {children}
            </Text>
        </div>
    );
}

Badge.overrides = ['root', 'Text'];

Badge.defaultProps = {
    className: '',
    overrides: {},
    type: 'default',
};

Badge.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    overrides: PropTypes.object,
    type: PropTypes.oneOf(['error', 'info', 'success', 'warn']),
};

export default React.memo(Badge);
