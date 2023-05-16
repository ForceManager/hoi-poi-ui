import React, { useCallback, useMemo } from 'react';
import { components } from 'react-select';
import Text from '../../../typography/Text';
import Checkbox from '../../../general/Checkbox';
import classnames from 'classnames';

export default React.memo(({ children, ...props }) => {
    const {
        className,
        selectAllClassName,
        selectAllSelectedClassName,
        selectAllCheckboxClassName,
        selectAllTextClassName,
        override,
        dropdownWidth,
        selectAllLabel,
        selectRef,
        value,
        setIsSelectAllFocused,
    } = props.selectProps.menuListProps;

    const { options, filterOption, inputValue } = props.selectProps;

    const filteredOptions = useMemo(() => {
        if (!options?.length) return [];
        if (filterOption) {
            return options.filter(
                (current) => !current.isDisabled && filterOption(current, inputValue),
            );
        }
        return options.filter((current) => !current.isDisabled);
    }, [options, filterOption, inputValue]);

    const mappedFilteredOptions = useMemo(() => {
        if (!filteredOptions?.length) return {};
        return filteredOptions.reduce((obj, current) => {
            obj[current.value] = current;
            return obj;
        }, {});
    }, [filteredOptions]);

    const isIndeterminate = useMemo(() => {
        if (!value?.length) return false;
        const selected = value.filter((current) => mappedFilteredOptions[current.value]);
        if (selected?.length && filteredOptions?.length !== selected?.length) return true;
        return false;
    }, [value, mappedFilteredOptions, filteredOptions]);

    const isAllSelected = useMemo(() => {
        if (!value?.length) return false;
        const selected = value.filter((current) => mappedFilteredOptions[current.value]);
        return selected.length === filteredOptions.length;
    }, [filteredOptions, value, mappedFilteredOptions]);

    const onClickAll = useCallback(() => {
        if (isAllSelected || isIndeterminate) {
            if (inputValue && filteredOptions.length) {
                let newOptions =
                    value?.filter((current) => !mappedFilteredOptions[current.value]) || [];
                selectRef.setValue(newOptions, 'set-value');
            } else {
                selectRef.clearValue();
            }
        } else {
            if (inputValue && filteredOptions.length) {
                selectRef.setValue([...(value || []), ...filteredOptions], 'set-value');
            } else {
                selectRef.setValue(filteredOptions, 'set-value');
            }
        }
    }, [
        isAllSelected,
        filteredOptions,
        selectRef,
        isIndeterminate,
        inputValue,
        value,
        mappedFilteredOptions,
    ]);

    const handleOnEnter = useCallback(() => {
        if (!selectAllLabel) return;
        setIsSelectAllFocused(true);
    }, [selectAllLabel, setIsSelectAllFocused]);

    const handleOnLeave = useCallback(() => {
        if (!selectAllLabel) return;
        setIsSelectAllFocused(false);
    }, [selectAllLabel, setIsSelectAllFocused]);

    // It depents also on filterOption, because without it won't have a correct behavior
    const allRow = useMemo(() => {
        if (!selectAllLabel || !filteredOptions?.length || !filterOption) return null;
        return (
            <div
                className={classnames(selectAllClassName, {
                    [selectAllSelectedClassName]: isAllSelected || isIndeterminate,
                })}
                onClick={onClickAll}
                onMouseEnter={handleOnEnter}
                onMouseLeave={handleOnLeave}
            >
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
        selectAllSelectedClassName,
        selectAllCheckboxClassName,
        selectAllTextClassName,
        selectAllLabel,
        onClickAll,
        isAllSelected,
        isIndeterminate,
        filteredOptions,
        handleOnEnter,
        handleOnLeave,
        filterOption,
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
