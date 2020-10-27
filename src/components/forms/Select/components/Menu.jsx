import React, { useCallback } from 'react';
import { components } from 'react-select';
import Link from '../../../typography/Link';
import Icon from '../../../general/Icon';
import defaultTheme from '../../../../utils/styles/defaultTheme';
import Text from '../../../typography/Text';

export default ({
    className,
    actionContainerClassName,
    actionClassName,
    actionIconClassName,
    actionTextClassName,
    actionTextWithIconClassName,
    override,
    actions,
    onClickAction,
}) => {
    return React.memo(({ children, ...props }) => {
        const linkRow = useCallback((action, index) => {
            const icon = action.icon;
            const iconType = action.iconType;

            let finalIcon;
            if (icon) finalIcon = icon;
            else if (iconType)
                finalIcon = <Icon name={iconType} color={defaultTheme.colors.orange500} />;

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
                        {!action.isLink && <Text>{action.label}</Text>}
                    </div>
                </div>
            );
        }, []);

        return (
            components.Menu && (
                <components.Menu {...props} className={className} {...override.menu}>
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
};
