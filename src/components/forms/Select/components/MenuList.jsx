import React, { useCallback, useMemo } from 'react';
import { components } from 'react-select';
import Text from '../../../typography/Text';
import Checkbox from '../../../general/Checkbox';

export default React.memo(({ children, ...props }) => {
    const {
        className,
        selectAllClassName,
        selectAllCheckboxClassName,
        selectAllTextClassName,
        override,
        dropdownWidth,
        selectAllLabel,
        selectRef,
        value,
        options,
        isAllSelected,
        setIsAllSelected,
    } = props.selectProps.menuListProps;

    const filteredOptions = useMemo(() => {
        return options.filter((current) => !current.isDisabled);
    }, [options]);

    const onClickAll = useCallback(() => {
        if (isAllSelected) {
            selectRef.clearValue();
        } else {
            selectRef.setValue(filteredOptions, 'set-value');
        }

        setIsAllSelected(!isAllSelected);
    }, [isAllSelected, setIsAllSelected, filteredOptions, selectRef]);

    const isIndeterminate = useMemo(() => {
        if (value?.length && filteredOptions?.length !== value?.length) return true;
        return false;
    }, [value, filteredOptions]);

    const allRow = useMemo(() => {
        if (!selectAllLabel || !filteredOptions?.length) return null;
        return (
            <div className={selectAllClassName} onClick={onClickAll}>
                <Checkbox
                    className={selectAllCheckboxClassName}
                    checked={isAllSelected || isIndeterminate}
                    color="orange"
                    indeterminate={isIndeterminate}
                />
                <Text className={selectAllTextClassName}>{selectAllLabel}</Text>
            </div>
        );
    }, [
        selectAllClassName,
        selectAllCheckboxClassName,
        selectAllTextClassName,
        selectAllLabel,
        onClickAll,
        isAllSelected,
        isIndeterminate,
        filteredOptions,
    ]);

    const innerProps = useMemo(() => {
        if (dropdownWidth) return { ...props.innerProps, style: { width: dropdownWidth } };
        return props.innerProps;
    }, [dropdownWidth, props]);

    return (
        components.MenuList && (
            <components.MenuList
                {...props}
                className={className}
                innerProps={innerProps}
                {...override.menuList}
            >
                {allRow}
                {children}
            </components.MenuList>
        )
    );
});
