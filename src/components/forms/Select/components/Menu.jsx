import React, { useCallback, useMemo } from 'react';
import { components } from 'react-select';
import Link from '../../../typography/Link';
import Icon from '../../../general/Icon';
import Text from '../../../typography/Text';

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
        override,
        actions,
        onClickAction,
        dropdownWidth,
    } = props.selectProps.menuProps;

    const linkRow = useCallback(
        (action, index) => {
            if (action.component) {
                const onClick = action.onClick
                    ? () => {
                          onClickAction && onClickAction(action);
                          action.onClick && action.onClick();
                      }
                    : null;

                return (
                    <div
                        key={index}
                        className={actionClassName}
                        {...override.action}
                        onClick={onClick}
                    >
                        {action.component}
                    </div>
                );
            }

            const icon = action.icon;
            const iconType = action.iconType;

            let finalIcon;
            if (icon) finalIcon = icon;
            else if (iconType)
                finalIcon = <Icon name={iconType} color={theme.colors.actionMajor[500]} />;

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
                            <Text color={theme.colors.actionMajor[500]} type="subtitle">
                                {action.label}
                            </Text>
                        )}
                    </div>
                </div>
            );
        },
        [
            actionTextClassName,
            override.actionText,
            override.action,
            override.actionIcon,
            override.actionTextWithIcon,
            actionClassName,
            actionIconClassName,
            actionTextWithIconClassName,
            onClickAction,
            theme,
        ],
    );

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
