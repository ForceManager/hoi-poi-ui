import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { getOverrides, useClasses } from '../../../utils/overrides';
import Text from '../../typography/Text';
import Icon from '../Icon';
import Avatar from '../Avatar';

import { createUseStyles } from '../../../utils/styles';
import styles from './styles';
const useStyles = createUseStyles(styles, 'Chip');

function Chip({
    classes: classesProp,
    children,
    overrides: overridesProp,
    className: classNameProp,
    size,
    isFilled,
    isFolded,
    isUnfolded,
    isDisabled,
    isReadOnly,
    isActive,
    onClick,
    onRemove,
    src,
    placeholder,
    alt,
    icon,
    ...props
}) {
    const classes = useClasses(useStyles, classesProp);

    // Overrides
    const override = getOverrides(overridesProp, Chip.overrides);

    // Classes
    const rootClassName = classnames(
        classes.root,
        {
            [classes.isFilled]: isFilled,
            [classes.isDisabled]: isDisabled,
            [classes.isReadOnly]: isReadOnly && !isDisabled,
            [classes.isActive]: isActive,
            [classes.clickable]: !!onClick && !isDisabled && !isReadOnly,
        },
        classes[size],
        classNameProp,
    );

    const rootProps = {
        ...props,
        className: rootClassName,
    };

    const icons = useMemo(() => {
        let icons = [];

        // Dropdown
        if (isFolded || isUnfolded) {
            const iconClass = classnames(
                classes.icon,
                classes.iconDropdown,
                isFolded ? classes.iconFolded : undefined,
            );
            icons.push(
                <Icon
                    className={iconClass}
                    key="chip__dropdown"
                    name="arrowDropDown"
                    size="large"
                />,
            );
        }

        // Divider
        if ((isFolded || isUnfolded) && onRemove) {
            const iconClass = classnames(classes.icon, classes.dividerIcon);
            icons.push(
                <Icon
                    className={iconClass}
                    key="chip__divider"
                    name="verticalDivider"
                    size="small"
                />,
            );
        }

        // Close
        if (onRemove) {
            const iconClass = classnames(classes.icon, classes.closeIcon);
            icons.push(
                <Icon className={iconClass} key="chip__close" name="closeSmall" size="large" />,
            );
        }

        // ReadOnly
        if (isReadOnly)
            icons = [<Icon className={classes.icon} key="chip__read-only" name="lock" />];

        return icons;
    }, [
        classes.closeIcon,
        classes.dividerIcon,
        classes.icon,
        classes.iconDropdown,
        classes.iconFolded,
        isFolded,
        isReadOnly,
        isUnfolded,
        onRemove,
    ]);

    return (
        <div
            {...rootProps}
            onClick={!isDisabled && !isReadOnly ? onClick : undefined}
            {...override.root}
        >
            <div className={classes.wrapper}>
                {icon && (
                    <Icon className={classnames(classes.icon, classes.iconLeft)} name={icon} />
                )}
                {src && (
                    <Avatar
                        className={classes.avatar}
                        size="small"
                        src={src}
                        placeholder={placeholder}
                        alt={alt}
                    />
                )}
                <Text type="caption" className={classes.Text} {...override.Text}>
                    {children}
                </Text>
                {icons.length > 0 && <div className={classes.icons}>{icons}</div>}
            </div>
        </div>
    );
}

Chip.overrides = ['root', 'Text'];

Chip.defaultProps = {
    className: '',
    overrides: {},
    size: 'small',
    isFilled: false,
    isFolded: false,
    isUnfolded: false,
    isDisabled: false,
    isReadOnly: false,
    isActive: false,
};

Chip.propTypes = {
    children: PropTypes.string.isRequired,
    className: PropTypes.string,
    overrides: PropTypes.object,
    size: PropTypes.oneOf(['small', 'large']),
    src: PropTypes.string,
    placeholder: PropTypes.string,
    alt: PropTypes.string,
    icon: PropTypes.string,
    isFilled: PropTypes.bool,
    isFolded: PropTypes.bool,
    isUnfolded: PropTypes.bool,
    isDisabled: PropTypes.bool,
    isReadOnly: PropTypes.bool,
    isActive: PropTypes.bool,
    onClick: PropTypes.func,
    onRemove: PropTypes.func,
};

export default React.memo(Chip);
