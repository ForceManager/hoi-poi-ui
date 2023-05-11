import React, { useMemo, useCallback, useState, useEffect } from 'react';
import { components } from 'react-select';
import Text from '../../../typography/Text';
import Checkbox from '../../../general/Checkbox';
import classnames from 'classnames';

export default React.memo(({ children, ...props }) => {
    const [isAllGroupSelected, setIsAllGroupSelected] = useState(false);
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
        if (!options.length) return [];
        return options.filter((current) => !current.isDisabled);
    }, [options]);

    const mappedValues = useMemo(() => {
        if (!value.length) return {};
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

    const groupValue = useMemo(() => {
        if (!Object.keys(mappedValues).length) return [];
        return filteredOptions.filter((current) => mappedValues[current.value]);
    }, [filteredOptions, mappedValues]);

    const mappedGroupValue = useMemo(() => {
        if (!groupValue.length) return {};
        return groupValue.reduce((obj, current) => {
            obj[current.value] = current;
            return obj;
        }, {});
    }, [groupValue]);

    const otherGroupValue = useMemo(() => {
        if (!value.length) return [];
        return value.filter((current) => !mappedOptions?.[current.value]);
    }, [value, mappedOptions]);

    useEffect(() => {
        if (
            selectAllLabel &&
            groupValue?.length &&
            groupValue?.length === filteredOptions?.length &&
            !isAllGroupSelected
        ) {
            setIsAllGroupSelected(true);
        }
    }, [selectAllLabel, groupValue, filteredOptions, isAllGroupSelected, setIsAllGroupSelected]);

    const isIndeterminate = useMemo(() => {
        if (groupValue?.length && filteredOptions?.length !== groupValue?.length) return true;
        return false;
    }, [groupValue, filteredOptions]);

    const onClickAll = useCallback(() => {
        if (isAllGroupSelected || isIndeterminate) {
            selectRef.setValue(otherGroupValue, 'set-value');
            setIsAllGroupSelected(false);
        } else {
            let newOptions = filteredOptions;

            if (filterOption) {
                newOptions = filteredOptions.filter((current) => filterOption(current, inputValue));
            }

            const newValue = value.filter((current) => !mappedGroupValue[current.value]);
            const final = [...newValue, ...newOptions];
            selectRef.setValue(final, 'set-value');
            setIsAllGroupSelected(true);
        }
    }, [
        isAllGroupSelected,
        setIsAllGroupSelected,
        filteredOptions,
        selectRef,
        isIndeterminate,
        filterOption,
        inputValue,
        otherGroupValue,
        value,
        mappedGroupValue,
    ]);

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
                key={label}
                className={classnames(selectAllClassName, {
                    [selectAllSelectedClassName]: isAllGroupSelected || isIndeterminate,
                })}
                onClick={onClickAll}
                onMouseEnter={handleOnEnter}
                onMouseLeave={handleOnLeave}
            >
                <Checkbox
                    className={selectAllCheckboxClassName}
                    checked={isAllGroupSelected || isIndeterminate}
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
        isAllGroupSelected,
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
