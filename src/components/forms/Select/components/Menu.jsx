import React, { useCallback, useMemo, useState } from 'react';
import { components } from 'react-select';
import Link from '../../../typography/Link';
import Icon from '../../../general/Icon';
import Text from '../../../typography/Text';
import Checkbox from '../../../general/Checkbox';

import { useTheme } from '../../../../utils/styles';

export default React.memo(({ children, ...props }) => {
    const theme = useTheme();
    const {
        className,
        actionContainerClassName,
        actionClassName,
        actionIconClassName,
        actionTextClassName,
        actionTextWithIconClassName,
        optionAllClassName,
        override,
        actions,
        onClickAction,
        dropdownWidth,
        // optionAllLabel,
    } = props.selectProps.menuProps;

    const [isAllSelected, setIsAllSelected] = useState(false);

    const linkRow = useCallback(
        (action, index) => {
            const icon = action.icon;
            const iconType = action.iconType;

            let finalIcon;
            if (icon) finalIcon = icon;
            else if (iconType) finalIcon = <Icon name={iconType} color={theme.colors.orange500} />;

            let textClasses = [actionTextClassName];
            let textOverride = { ...override.actionText };

            if (finalIcon) {
                textClasses = [actionTextWithIconClassName];
                textOverride = {
                    ...textOverride,
                    ...override.actionTextWithIcon,
                };
            }
            return (
                <div
                    className={actionClassName}
                    key={index}
                    {...override.action}
                    onClick={() => {
                        onClickAction && onClickAction(action);
                        action.onClick && action.onClick();
                    }}
                >
                    {finalIcon && (
                        <div className={actionIconClassName} {...override.actionIcon}>
                            {finalIcon ? finalIcon : null}
                        </div>
                    )}
                    <div className={textClasses} {...textOverride}>
                        {action.isLink && <Link>{action.label}</Link>}
                        {!action.isLink && (
                            <Text color="orange500" type="subtitle">
                                {action.label}
                            </Text>
                        )}
                    </div>
                </div>
            );
        },
        [
            theme.colors.orange500,
            actionTextClassName,
            override.actionText,
            override.action,
            override.actionIcon,
            override.actionTextWithIcon,
            actionClassName,
            actionIconClassName,
            actionTextWithIconClassName,
            onClickAction,
        ],
    );

    const onClickAll = useCallback(() => {
        setIsAllSelected(!isAllSelected);
    }, [isAllSelected]);

    const allRow = useMemo(() => {
        // if (!optionAllLabel) return null;
        let isIndeterminate = false;
        // if (hasAll && isSelected) isIndeterminate = true;
        return (
            <div className={optionAllClassName}>
                <Checkbox
                    checked={isAllSelected}
                    color="orange"
                    indeterminate={isIndeterminate}
                    onChange={onClickAll}
                />
                {/* <Text>{optionAllLabel}</Text> */}
            </div>
        );
    }, [optionAllClassName, isAllSelected, onClickAll]);

    const innerProps = useMemo(() => {
        if (dropdownWidth) return { ...props.innerProps, style: { width: dropdownWidth } };
        return props.innerProps;
    }, [dropdownWidth, props]);

    return (
        components.Menu && (
            <components.Menu
                {...props}
                className={className}
                innerProps={innerProps}
                {...override.menu}
            >
                {allRow}
                {children}
                {actions && (
                    <div className={actionContainerClassName} {...override.actionContainer}>
                        {actions.map((action, idx) => linkRow(action, idx))}
                    </div>
                )}
            </components.Menu>
        )
    );
});
