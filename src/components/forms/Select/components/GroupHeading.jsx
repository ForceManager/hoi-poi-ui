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

    const { filterOption, inputValue, value } = props.selectProps;
    const { label, options } = props.data;

    const filteredOptions = useMemo(() => {
        if (!options?.length) return [];
        return options.filter((current) => !current.isDisabled);
    }, [options]);

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

    // Values from this group
    const groupValue = useMemo(() => {
        if (!Object.keys(mappedValues).length) return [];
        return filteredOptions.filter((current) => mappedValues[current.value]);
    }, [filteredOptions, mappedValues]);

    const mappedGroupValue = useMemo(() => {
        if (!groupValue?.length) return {};
        return groupValue.reduce((obj, current) => {
            obj[current.value] = current;
            return obj;
        }, {});
    }, [groupValue]);

    // Values from other groups
    const otherGroupValue = useMemo(() => {
        if (!value?.length) return [];
        return value.filter((current) => !mappedOptions?.[current.value]);
    }, [value, mappedOptions]);

    const isAllSelected = useMemo(() => {
        if (!groupValue?.length) return false;
        const selected = groupValue.filter((current) => mappedFilteredOptions[current.value]);
        return selected.length === filteredOptions.length;
    }, [filteredOptions, groupValue, mappedFilteredOptions]);

    const isIndeterminate = useMemo(() => {
        if (groupValue?.length && filteredOptions?.length !== groupValue?.length) return true;
        return false;
    }, [groupValue, filteredOptions]);

    const onClickAll = useCallback(() => {
        if (isAllSelected || isIndeterminate) {
            selectRef.setValue(otherGroupValue, 'set-value');
        } else {
            let newOptions = filteredOptions;

            if (filterOption) {
                newOptions = filteredOptions.filter((current) => filterOption(current, inputValue));
            }

            const newValue = value.filter((current) => !mappedGroupValue[current.value]);
            const final = [...newValue, ...newOptions];
            selectRef.setValue(final, 'set-value');
        }
    }, [
        filteredOptions,
        selectRef,
        isIndeterminate,
        filterOption,
        inputValue,
        otherGroupValue,
        value,
        mappedGroupValue,
        isAllSelected,
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

    const allRow = useMemo(() => {
        if (!selectAllLabel && !filteredOptions?.length) return null;
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
                    color="orange"
                    indeterminate={isIndeterminate}
                />
                <Text className={selectAllTextClassName} {...override.groupLabel}>
                    {label}
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
