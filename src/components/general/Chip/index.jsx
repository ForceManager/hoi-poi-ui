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
    onClick,
    onRemove,
    src,
    placeholder,
    alt,
    icon,
    size = 'small',
    isFilled = false,
    isOutlined = false,
    isOutlinedColor = false,
    isFolded = false,
    isUnfolded = false,
    isDisabled = false,
    isReadOnly = false,
    isActive = false,
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
            [classes.isOutlined]: isOutlined,
            [classes.isOutlinedColor]: isOutlinedColor,
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
                    {...override.DropDownIcon}
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
                    {...override.DividerIcon}
                />,
            );
        }

        // Close
        if (onRemove) {
            const iconClass = classnames(classes.icon, classes.closeIcon);
            icons.push(
                <Icon
                    className={iconClass}
                    key="chip__close"
                    name="closeRaw"
                    size="raw"
                    onClick={onRemove}
                    {...override.CloseIcon}
                />,
            );
        }

        // ReadOnly
        if (isReadOnly)
            icons = [
                <Icon
                    className={classes.icon}
                    key="chip__read-only"
                    name="lockRaw"
                    size="raw"
                    {...override.ReadOnlyIcon}
                />,
            ];

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
        override.CloseIcon,
        override.DividerIcon,
        override.DropDownIcon,
        override.ReadOnlyIcon,
    ]);

    const textProps = useMemo(
        () => ({
            type: size === 'large' ? 'body' : 'caption',
            className: classes.Text,
            ...override.Text,
        }),
        [classes.Text, override.Text, size],
    );

    return (
        <div
            {...rootProps}
            onClick={!isDisabled && !isReadOnly ? onClick : undefined}
            {...override.root}
        >
            <div className={classes.wrapper} {...override.wrapper}>
                {icon && (
                    <Icon
                        className={classnames(classes.icon, classes.iconLeft)}
                        name={icon}
                        {...override.Icon}
                    />
                )}
                {src && (
                    <Avatar
                        className={classes.avatar}
                        size="small"
                        src={src}
                        placeholder={placeholder}
                        alt={alt}
                        {...override.Avatar}
                    />
                )}
                <Text {...textProps}>{children}</Text>
                {icons.length > 0 && (
                    <div className={classes.icons} {...override.icons}>
                        {icons}
                    </div>
                )}
            </div>
        </div>
    );
}

Chip.overrides = [
    'root',
    'Text',
    'Icon',
    'Avatar',
    'DropDownIcon',
    'CloseIcon',
    'DividerIcon',
    'ReadOnlyIcon',
    'icons',
    'wrapper',
];

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
    isOutlined: PropTypes.bool,
    isOutlinedColor: PropTypes.bool,
    isFolded: PropTypes.bool,
    isUnfolded: PropTypes.bool,
    isDisabled: PropTypes.bool,
    isReadOnly: PropTypes.bool,
    isActive: PropTypes.bool,
    onClick: PropTypes.func,
    onRemove: PropTypes.func,
};

export default React.memo(Chip);
