import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import classnames from 'classnames';
import { getOverrides } from '../../../utils/overrides';
import Loader from '../../general/Loader';
import Text from '../../typography/Text';
import styles from './styles';

const LOADER_SIZES = {
    big: 'small',
    medium: 'tiny',
    small: 'mini',
};

function Button({
    children,
    overrides: overridesProp,
    className: classNameProp,
    classes,
    onClick,
    size,
    type,
    color,
    isDisabled,
    isFullWidth,
    isLoading,
    href,
    target,
    ...props
}) {
    // Overrides
    const override = getOverrides(overridesProp, Button.overrides);

    // Classes
    const rootClassName = classnames(
        classes.root,
        {
            [classes[type]]: type,
            [classes.white]: !color,
            [classes.primary]: color === 'primary',
            [classes.danger]: color === 'danger',
            [classes.small]: size === 'small',
            [classes.big]: size === 'big',
            [classes.disabled]: isDisabled || isLoading,
            [classes.fullWidth]: isFullWidth,
        },
        classNameProp,
    );

    const wrapperLabelClass = classnames({
        [classes.labelLoading]: isLoading,
    });

    const rootProps = {
        ...props,
        className: rootClassName,
        onClick: isDisabled || isLoading ? null : onClick,
    };

    const content = (
        <span className={wrapperLabelClass}>
            {isLoading && (
                <div className={classes.loader}>
                    <Loader
                        size={LOADER_SIZES[size]}
                        color={['outlined', 'squared'].includes(type) ? color : 'white'}
                        {...override.Loader}
                    />
                </div>
            )}
            <Text className={classes.Text} {...override.Text}>
                {children}
            </Text>
        </span>
    );

    if (href) {
        return (
            <a href={href} target={target} {...rootProps}>
                {content}
            </a>
        );
    } else {
        return (
            <button {...rootProps} type="button">
                {content}
            </button>
        );
    }
}

Button.overrides = ['Text', 'Loader'];

Button.defaultProps = {
    size: 'medium',
    type: 'filled',
};

Button.propTypes = {
    className: PropTypes.string,
    overrides: PropTypes.object,
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired,
    size: PropTypes.oneOf(['big', 'medium', 'small']),
    type: PropTypes.oneOf(['filled', 'outlined', 'squared']),
    color: PropTypes.oneOf(['primary', 'danger', 'white']),
    isDisabled: PropTypes.bool,
    /** Use the whole container */
    isFullWidth: PropTypes.bool,
    isLoading: PropTypes.bool,
    /** Render the component as a tag <a/> with href */
    href: PropTypes.string,
    /** native <a/> target */
    target: PropTypes.string,
};

export default React.memo(withStyles(styles, { name: 'Button' })(Button));
