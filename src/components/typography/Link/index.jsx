import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { getOverrides, useClasses } from '../../../utils/overrides';
import { createUseStyles } from '../../../utils/styles';
import styles from './styles';
const useStyles = createUseStyles(styles, 'Link');

function Link({
    children,
    classes: classesProp,
    overrides: overridesProp,
    className: classNameProp,
    onClick,
    isDisabled,
    href,
    size,
    target,
    ...props
}) {
    const classes = useClasses(useStyles, classesProp);
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
            <button {...rootProps} type="button" {...override.root}>
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

export default React.memo(Link);
