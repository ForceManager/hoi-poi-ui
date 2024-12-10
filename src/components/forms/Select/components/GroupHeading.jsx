import React, { useMemo, useCallback } from 'react';
import { components } from 'react-select';
import Text from '../../../typography/Text';
import Checkbox from '../../../general/Checkbox';
import classnames from 'classnames';

export default React.memo(({ children, ...props }) => {
    const {
        className,
        classNameWithSelectAll,
        selectAllClassName,
        selectAllSelectedClassName,
        selectAllCheckboxClassName,
        selectAllTextClassName,
        selectAllLabel,
        selectRef,
        override,
        setIsSelectAllFocused,
    } = props.selectProps.groupHeadingProps;

    const { filterOption, inputValue, value = [] } = props.selectProps;
    const { label, options } = props.data;

    const nonDisabledOptions = useMemo(() => {
        if (!options?.length) return [];
        return options.filter((current) => !current.isDisabled);
    }, [options]);

    const filteredOptions = useMemo(() => {
        if (!options?.length) return [];
        if (filterOption) {
            return options.filter(
                (current) => !current.isDisabled && filterOption(current, inputValue),
            );
        }
        return options.filter((current) => !current.isDisabled);
    }, [options, filterOption, inputValue]);

    const mappedValues = useMemo(() => {
        if (!value?.length) return {};
        return value.reduce((obj, current) => {
            obj[current.value] = current;
            return obj;
        }, {});
    }, [value]);

    const mappedOptions = useMemo(() => {
        if (!options?.length) return {};
        return options.reduce((obj, current) => {
            obj[current.value] = current;
            return obj;
        }, {});
    }, [options]);

    const mappedFilteredOptions = useMemo(() => {
        if (!filteredOptions?.length) return {};
        return filteredOptions.reduce((obj, current) => {
            obj[current.value] = current;
            return obj;
        }, {});
    }, [filteredOptions]);

    // Values from this group without filter
    const groupValue = useMemo(() => {
        if (!Object.keys(mappedValues).length) return [];
        return nonDisabledOptions.filter((current) => mappedValues[current.value]);
    }, [mappedValues, nonDisabledOptions]);

    // Values from this group filtered
    const groupFilteredValue = useMemo(() => {
        if (!Object.keys(mappedValues).length) return [];
        return filteredOptions.filter((current) => mappedValues[current.value]);
    }, [filteredOptions, mappedValues]);

    const mappedGroupFilteredValue = useMemo(() => {
        if (!groupFilteredValue?.length) return {};
        return groupFilteredValue.reduce((obj, current) => {
            obj[current.value] = current;
            return obj;
        }, {});
    }, [groupFilteredValue]);

    // Values from other groups
    const otherGroupValue = useMemo(() => {
        if (!value?.length) return [];
        return value.filter((current) => !mappedOptions?.[current.value]);
    }, [value, mappedOptions]);

    const isAllSelected = useMemo(() => {
        if (!groupFilteredValue?.length) return false;
        const selected = groupFilteredValue.filter(
            (current) => mappedFilteredOptions[current.value],
        );
        return selected.length === filteredOptions.length;
    }, [filteredOptions, groupFilteredValue, mappedFilteredOptions]);

    const isIndeterminate = useMemo(() => {
        if (groupFilteredValue?.length && filteredOptions?.length !== groupFilteredValue?.length)
            return true;
        return false;
    }, [groupFilteredValue, filteredOptions]);

    const onClickAll = useCallback(() => {
        if (isAllSelected || isIndeterminate) {
            let newOptions = groupValue.filter((current) => !mappedFilteredOptions[current.value]);
            selectRef.setValue([...otherGroupValue, ...newOptions], 'set-value');
        } else {
            const newValue =
                value?.filter((current) => !mappedGroupFilteredValue[current.value]) || [];
            if (inputValue && filteredOptions.length) {
                selectRef.setValue([...newValue, ...groupFilteredValue, ...filteredOptions]);
            } else {
                const final = [...newValue, ...filteredOptions];
                selectRef.setValue(final, 'set-value');
            }
        }
    }, [
        filteredOptions,
        selectRef,
        isIndeterminate,
        inputValue,
        otherGroupValue,
        value,
        mappedGroupFilteredValue,
        isAllSelected,
        groupFilteredValue,
        mappedFilteredOptions,
        groupValue,
    ]);

    const handleOnEnter = useCallback(() => {
        if (!selectAllLabel) return;
        setIsSelectAllFocused(true);
    }, [selectAllLabel, setIsSelectAllFocused]);

    const handleOnLeave = useCallback(() => {
        if (!selectAllLabel) return;
        //To prevent flikering
        setTimeout(() => {
            setIsSelectAllFocused(false);
        }, 30);
    }, [selectAllLabel, setIsSelectAllFocused]);

    // It depents also on filterOption because without it, won't have a correct behavior
    const allRow = useMemo(() => {
        if (!selectAllLabel || !filteredOptions?.length || !filterOption) return null;
        return (
            <div
                key={label}
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
                    color="actionMajor"
                    indeterminate={isIndeterminate}
                />
                <Text className={selectAllTextClassName} {...override.groupLabel}>
                    {label || selectAllLabel}
                </Text>
            </div>
        );
    }, [
        selectAllClassName,
        selectAllSelectedClassName,
        selectAllCheckboxClassName,
        selectAllTextClassName,
        label,
        selectAllLabel,
        onClickAll,
        isAllSelected,
        isIndeterminate,
        filteredOptions,
        override.groupLabel,
        handleOnEnter,
        handleOnLeave,
        filterOption,
    ]);

    return (
        components.GroupHeading && (
            <components.GroupHeading
                {...props}
                className={classnames(className, { [classNameWithSelectAll]: selectAllLabel })}
                {...override.groupHeading}
            >
                {selectAllLabel && allRow}
                {!selectAllLabel && children}
            </components.GroupHeading>
        )
    );
});
