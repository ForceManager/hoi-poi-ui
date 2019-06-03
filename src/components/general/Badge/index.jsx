import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import classnames from 'classnames';
import { getOverrides } from '../../../utils/overrides';

import styles from './styles';
import Text from '../../typography/Text';

function Badge({
    children,
    overrides: overridesProp,
    className: classNameProp,
    classes,
    type,
    ...props
}) {
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
    type: 'info',
};

Badge.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    overrides: PropTypes.object,
    type: PropTypes.oneOf(['error', 'info', 'success']),
};

export default React.memo(withStyles(styles, { name: 'Badge' })(Badge));
