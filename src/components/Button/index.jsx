import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import classnames from 'classnames';
import styles from './styles';

function Button(
    { children, classes, onClick, size, type, color, isDisabled, isFullWidth, href },
    ...props
) {
    const rootClassName = classnames(classes.root, {
        [classes.default]: !color,
        [classes.outlined]: type === 'outlined',
        [classes.primary]: color === 'primary',
        [classes.danger]: color === 'danger',
        [classes.small]: size === 'small',
        [classes.big]: size === 'big',
        [classes.disabled]: isDisabled,
        [classes.fullWidth]: isFullWidth,
    });

    const content = <span className={classes.label}>{children}</span>;
    const rootProps = {
        className: rootClassName,
        onClick: isDisabled ? onClick : null,
    };

    if (href) {
        return (
            <a href={href} {...rootProps} {...props}>
                {content}
            </a>
        );
    } else {
        return (
            <button href={href} {...rootProps} {...props}>
                {content}
            </button>
        );
    }
}

Button.propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired,
    size: PropTypes.string,
    type: PropTypes.string,
    color: PropTypes.string,
    isDisabled: PropTypes.bool,
    isFullWidth: PropTypes.bool,
    href: PropTypes.string,
};

export default React.memo(withStyles(styles)(Button));
