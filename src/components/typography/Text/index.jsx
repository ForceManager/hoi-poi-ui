import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import classnames from 'classnames';
import styles from './styles';

import { getOverrides } from '../../../utils/overrides';

function Text({
    children,
    size,
    line,
    length,
    ending,
    type,
    truncate,
    overrides: overridesProp,
    className: classNameProp,
    classes,
    ...props
}) {
    //Overrides
    const rootClassName = classnames(classes.root, classes[type], classes[size], classNameProp);

    const override = getOverrides(overridesProp, Text.overrides);

    const rootProps = {
        ...props,
        className: rootClassName,
        ...override.root,
    };

    return <span {...rootProps}>{children}</span>;
}

Text.overrides = ['root'];

Text.defaultProps = {
    type: 'normal',
    size: 'medium',
    className: '',
    overrides: {},
};

Text.propTypes = {
    className: PropTypes.string,
    type: PropTypes.oneOf(['bold', 'normal', 'light']),
    size: PropTypes.oneOf(['small', 'medium', 'large', 'big']),
    overrides: PropTypes.object,
    children: PropTypes.node,
};

export default React.memo(withStyles(styles, { name: 'Text' })(Text));
