import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { getOverrides, useClasses } from '../../../utils/overrides';
import Loader from '../../general/Loader';
import Text from '../../typography/Text';

import { createUseStyles } from '../../../utils/styles';
import styles from './styles';
const useStyles = createUseStyles(styles, 'Button');

const LOADER_SIZES = {
    big: 'small',
    medium: 'tiny',
    small: 'mini',
};

function Button({
    children,
    classes: classesProp,
    overrides: overridesProp,
    className: classNameProp,
    onClick,
    size,
    type,
    isDisabled,
    isFullWidth,
    isLoading,
    href,
    target,
    icon,
    iconPosition,
    ...props
}) {
    const classes = useClasses(useStyles, classesProp);
    // Overrides
    const override = getOverrides(overridesProp, Button.overrides);

    // Classes
    const rootClassName = classnames(
        classes.root,
        {
            [classes.primary]: type === 'primary',
            [classes.primaryError]: type === 'primary-error',
            [classes.secondary]: type === 'secondary',
            [classes.secondaryError]: type === 'secondary-error',
            [classes.terciary]: type === 'terciary',
            [classes[size]]: size,
            [classes.disabled]: isDisabled,
            [classes.loading]: isLoading,
            [classes.fullWidth]: isFullWidth,
        },
        classNameProp,
    );

    const rootProps = {
        ...props,
        className: rootClassName,
        onClick: isDisabled || isLoading ? null : onClick,
    };

    const content = (
        <Fragment>
            {isLoading && (
                <div className={classes.loaderContainer}>
                    <Loader size={LOADER_SIZES[size]} color="white" {...override.Loader} />
                </div>
            )}
            <Text className={classes.Text} {...override.Text}>
                {children}
            </Text>
        </Fragment>
    );

    if (href) {
        return (
            <a href={href} target={target} {...rootProps} {...override.root}>
                {content}
            </a>
        );
    } else {
        return (
            <button {...rootProps} type="button" {...override.root}>
                {content}
            </button>
        );
    }
}

Button.overrides = ['root', 'Text', 'Loader'];

Button.defaultProps = {
    size: 'medium',
    type: 'primary',
    overrides: {},
    iconPosition: 'left',
};

Button.propTypes = {
    className: PropTypes.string,
    overrides: PropTypes.object,
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired,
    size: PropTypes.oneOf(['big', 'medium', 'small']),
    type: PropTypes.oneOf(['primary', 'primary-error', 'secondary', 'secondary-error', 'terciary']),
    isDisabled: PropTypes.bool,
    /** Use the whole container */
    isFullWidth: PropTypes.bool,
    isLoading: PropTypes.bool,
    /** Render the component as a tag <a/> with href */
    href: PropTypes.string,
    /** native <a/> target */
    target: PropTypes.string,
    icon: PropTypes.string,
    iconPosition: PropTypes.oneOf(['left', 'right']),
};

export default React.memo(Button);
