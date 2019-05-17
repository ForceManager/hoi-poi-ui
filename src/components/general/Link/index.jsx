import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import classnames from 'classnames';
import styles from './styles';

import { getOverrides } from '../../../utils/overrides';

function Link({
    children,
    overrides: overridesProp,
    className: classNameProp,
    classes,
    onClick,
    isDisabled,
    href,
    size,
    target,
    ...props
}) {
    //Overrides
    const override = getOverrides(overridesProp, Link.overrides);

    // Classes
    const rootClassName = classnames(
        classes.root,
        {
            [classes.isDisabled]: isDisabled,
            [classes[size]]: size,
        },
        classNameProp,
    );

    const rootProps = {
        ...props,
        className: rootClassName,
        onClick: isDisabled ? null : onClick,
    };

    if (href) {
        return (
            <a href={href} target={target} {...rootProps} {...override.root}>
                {children}
            </a>
        );
    } else {
        return (
            <button {...rootProps} {...override.root} type="button">
                {children}
            </button>
        );
    }
}

Link.overrides = ['root'];

Link.defaultProps = {
    overrides: {},
    size: 'medium',
};

Link.propTypes = {
    className: PropTypes.string,
    overrides: PropTypes.object,
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired,
    size: PropTypes.oneOf(['small', 'medium', 'big']),
    isDisabled: PropTypes.bool,
    /** Render the component as a tag <a/> with href */
    href: PropTypes.string,
    /** native <a/> target */
    target: PropTypes.string,
};

export default React.memo(withStyles(styles, { name: 'Link' })(Link));
