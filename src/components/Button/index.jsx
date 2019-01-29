import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import classnames from 'classnames';
import Loader from '../Loader';
import styles from './styles';

const LOADER_SIZES = {
    big: 'small',
    medium: 'tiny',
    small: 'mini',
};

function Button({
    children,
    classes,
    onClick,
    size = 'medium',
    type = 'filled',
    color = 'primary',
    isDisabled,
    isFullWidth,
    isLoading,
    href,
    ...props
}) {
    const rootClassName = classnames(classes.root, {
        [classes.default]: type === 'filled',
        [classes.outlined]: type === 'outlined',
        [classes.primary]: color === 'primary',
        [classes.danger]: color === 'danger',
        [classes.small]: size === 'small',
        [classes.big]: size === 'big',
        [classes.disabled]: isDisabled || isLoading,
        [classes.fullWidth]: isFullWidth,
    });

    const rootProps = {
        className: rootClassName,
        onClick: isDisabled || isLoading ? null : onClick,
    };

    const wrapperLabelClass = classnames({
        [classes.labelLoading]: isLoading,
    });

    const content = (
        <span className={wrapperLabelClass}>
            {isLoading && (
                <div className={classes.loader}>
                    <Loader
                        size={LOADER_SIZES[size]}
                        color={type === 'outlined' ? color : 'white'}
                    />
                </div>
            )}
            <span className={classes.label}>{children}</span>
        </span>
    );

    if (href) {
        return (
            <a href={href} {...props} {...rootProps}>
                {content}
            </a>
        );
    } else {
        return (
            <button {...props} {...rootProps}>
                {content}
            </button>
        );
    }
}

Button.propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired,
    size: PropTypes.oneOf(['big', 'medium', 'small']),
    type: PropTypes.oneOf(['filled', 'outlined']),
    color: PropTypes.oneOf(['primary', 'danger', 'white']),
    isDisabled: PropTypes.bool,
    isFullWidth: PropTypes.bool,
    isLoading: PropTypes.bool,
    href: PropTypes.string,
};

Button.displayName = 'Button';

export default React.memo(withStyles(styles)(Button));
