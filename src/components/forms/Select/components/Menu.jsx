import React, { useCallback, useMemo } from 'react';
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
        optionAllCheckboxClassName,
        optionAllTextClassName,
        override,
        actions,
        onClickAction,
        dropdownWidth,
        optionAllLabel,
        selectRef,
        value,
        isAllSelected,
        setIsAllSelected,
    } = props.selectProps.menuProps;

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

    const options = useMemo(() => {
        return selectRef.commonProps.options.filter((current) => !current.isDisabled);
    }, [selectRef]);

    const onClickAll = useCallback(() => {
        if (isAllSelected) {
            selectRef.clearValue();
        } else {
            selectRef.setValue(options, 'set-value');
        }

        setIsAllSelected(!isAllSelected);
    }, [isAllSelected, setIsAllSelected, options, selectRef]);

    const isIndeterminate = useMemo(() => {
        if (value?.length && options?.length !== value?.length) return true;
        return false;
    }, [value, options]);

    const allRow = useMemo(() => {
        if (!optionAllLabel || !options.length) return null;
        return (
            <div className={optionAllClassName} onClick={onClickAll}>
                <Checkbox
                    className={optionAllCheckboxClassName}
                    checked={isAllSelected || isIndeterminate}
                    color="orange"
                    indeterminate={isIndeterminate}
                />
                <Text className={optionAllTextClassName}>{optionAllLabel}</Text>
            </div>
        );
    }, [
        optionAllClassName,
        optionAllCheckboxClassName,
        optionAllTextClassName,
        optionAllLabel,
        onClickAll,
        isAllSelected,
        isIndeterminate,
        options,
    ]);

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
