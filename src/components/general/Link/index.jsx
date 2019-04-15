import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import classnames from 'classnames';
import styles from './styles';

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
            <a href={href} target={target} {...rootProps}>
                {children}
            </a>
        );
    } else {
        return <button {...rootProps}>{children}</button>;
    }
}

Link.defaultProps = {
    size: 'medium',
};

Link.propTypes = {
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
