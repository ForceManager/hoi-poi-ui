import React, { useCallback, useMemo, useEffect } from 'react';
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
        isAllSelected,
        setIsAllSelected,
    } = props.selectProps.menuListProps;

    const { options } = props.selectProps;

    const filteredOptions = useMemo(() => {
        return options.filter((current) => !current.isDisabled);
    }, [options]);

    useEffect(() => {
        if (
            selectAllLabel &&
            value?.length &&
            value?.length === filteredOptions?.length &&
            !isAllSelected
        ) {
            setIsAllSelected(true);
        }
    }, [selectAllLabel, value, filteredOptions, isAllSelected, setIsAllSelected]);

    const isIndeterminate = useMemo(() => {
        if (value?.length && filteredOptions?.length !== value?.length) return true;
        return false;
    }, [value, filteredOptions]);

    const onClickAll = useCallback(() => {
        if (isAllSelected || isIndeterminate) {
            selectRef.clearValue();
            setIsAllSelected(false);
        } else {
            selectRef.setValue(filteredOptions, 'set-value');
            setIsAllSelected(true);
        }
    }, [isAllSelected, setIsAllSelected, filteredOptions, selectRef, isIndeterminate]);

    const allRow = useMemo(() => {
        if (!selectAllLabel || !filteredOptions?.length) return null;
        return (
            <div
                className={classnames(selectAllClassName, {
                    [selectAllSelectedClassName]: isAllSelected || isIndeterminate,
                })}
                onClick={onClickAll}
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
