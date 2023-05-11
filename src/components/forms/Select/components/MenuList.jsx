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
        return options.filter((current) => !current.isDisabled);
    }, [options]);

    const mappedFilteredOptions = useMemo(() => {
        if (!filteredOptions?.length) return {};
        return filteredOptions.reduce((obj, current) => {
            obj[current.value] = current;
            return obj;
        }, {});
    }, [filteredOptions]);

    const isIndeterminate = useMemo(() => {
        if (value?.length && filteredOptions?.length !== value?.length) return true;
        return false;
    }, [value, filteredOptions]);

    const isAllSelected = useMemo(() => {
        if (!value?.length) return false;
        const selected = value.filter((current) => mappedFilteredOptions[current.value]);
        return selected.length === filteredOptions.length;
    }, [filteredOptions, value, mappedFilteredOptions]);

    const onClickAll = useCallback(() => {
        if (isAllSelected || isIndeterminate) {
            selectRef.clearValue();
        } else {
            let newOptions = filteredOptions;

            if (filterOption) {
                newOptions = filteredOptions.filter((current) => filterOption(current, inputValue));
            }

            selectRef.setValue(newOptions, 'set-value');
        }
    }, [isAllSelected, filteredOptions, selectRef, isIndeterminate, filterOption, inputValue]);

    const handleOnEnter = useCallback(() => {
        if (!selectAllLabel) return;
        setIsSelectAllFocused(true);
    }, [selectAllLabel, setIsSelectAllFocused]);

    const handleOnLeave = useCallback(() => {
        if (!selectAllLabel) return;
        setIsSelectAllFocused(false);
    }, [selectAllLabel, setIsSelectAllFocused]);

    const allRow = useMemo(() => {
        if (!selectAllLabel || !filteredOptions?.length) return null;
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
