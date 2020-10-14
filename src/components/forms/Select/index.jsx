import React, { memo, useState, useCallback, useMemo } from 'react';
// import PropTypes from 'prop-types';
import classnames from 'classnames';
import { getOverrides, useClasses } from '../../../utils/overrides';
// import Icon from '../../general/Icon';
import InputWrapper from '../components/InputWrapper';
import { default as RSelect } from 'react-select';
// import AsyncSelect from 'react-select/async';
import { createFilter, filterKeyValue } from './utils';
import Checkbox from '../../general/Checkbox';

import DropdownIndicator from './components/DropdownIndicator';
import OptionsMulti from './components/OptionsMulti';
// import SearchIndicator from './components/SearchIndicator';

import { createUseStyles } from '../../../utils/styles';
import styles from './styles';
import defaultTheme from '../../../utils/styles/defaultTheme';

const useStyles = createUseStyles(styles, 'Input');
const newStyles = styles(defaultTheme);

const Select = memo(
    ({
        error,
        classes: classesProp,
        overrides: overridesProp,
        className: classNameProp,
        isReadOnly,
        isFullWidth,
        isFuzzy,
        isMulti,
        isClearable,
        placeholder,
        options,
        defaultValue,
        isValueObject,
        onChange,
        onBlur,
        hideSelectedOptions,
        filterByKey,
        // loadOptions,
        // loadingMessage,
        // loadingPlaceholder,
        ...props
    }) => {
        const [focused, setFocused] = useState(false);
        const [value, setValue] = useState(defaultValue || null);
        // const [innerOptions, setInnerOptions] = useState(options);
        // const [lazyOptions, setLazyOptions] = useState({
        //     areLoaded: false,
        //     options: null,
        //     isLoading: false,
        // });
        const classes = useClasses(useStyles, classesProp);
        const override = getOverrides(overridesProp, Select.overrides);

        const rootClassName = classnames(
            classes.root,
            {
                // [classes.isReadOnly]: isReadOnly && !isFuzzy,
                [classes.isFullWidth]: isFullWidth,
                [classes.focused]: focused,
                [classes.errored]: error,
                // [classes.async]: loadOptions && isFuzzy,
            },
            classNameProp,
        );

        const selectClassName = classnames(classes.select, {
            [classes.isMulti]: isMulti,
        });

        const newDefaultValue = useMemo(() => {
            if (isValueObject) return defaultValue;
            const finalOptions = options && options.length ? options : options;
            if (
                !isMulti &&
                finalOptions &&
                finalOptions.length &&
                defaultValue !== null &&
                defaultValue !== undefined
            ) {
                return finalOptions.find((op) => {
                    return op.value === defaultValue;
                });
            }
            if (isMulti && finalOptions && finalOptions.length && defaultValue) {
                return defaultValue.map((v) => finalOptions.find((op) => op.value === v));
            }
        }, [isMulti, options, defaultValue, isValueObject])

        const handleOnChange = useCallback((data, action) => {
            console.log(data, action)
            setValue(data);
            onChange && onChange(data);
            onBlur && onBlur(data);
        }, [onChange, onBlur])

        const handleOnBlur = useCallback(() => {
            setFocused(false);
        }, []);

        const formatGroupLabel = useCallback(
            (data) => (
                <div key={data.value} className={classes.group}>
                    {data.label}
                </div>
            ),
            [classes.group],
        );

        const controlStyles = useCallback(({ data, isDisabled, isFocused, isSelected }) => {
            let styles = {
                ...newStyles.control,
            };

            if (isFocused) {
                styles = { ...styles, ...newStyles.controlFocused };
            }
            return styles;
        }, []);

        const optionsStyles = useCallback(({ data, isDisabled, isFocused, isSelected }) => {
            let styles = {
                ...newStyles.options,
            };

            return styles;
        }, []);

        const formatOptionLabel = useCallback((option, data) => {
            console.log(option, data)
            const selected = data.selectedValue;
            const isSelected = selected && selected.includes(option);
            // const value = data.value;
            return (
                    <div className={classes.optionLabel}>
                        <Checkbox
                            checked={isSelected}
                        />
                        <div>{option.label}</div>
                    </div>
                );
        }, [classes])

        const indicatorSeparator = useMemo(() => {
            return newStyles.indicatorSeparator;
        }, []);

        const selectProps = useMemo(() => {
            return {
                className: selectClassName,
                classNamePrefix: 'hoi-poi-select',
                placeholder,
                options: options,
                defaultValue: newDefaultValue,
                isMulti,
                onChange: handleOnChange,
                onBlur: handleOnBlur,
                isDisabled: isReadOnly,
                isClearable: isMulti ? true : isClearable,
                autoFocus: focused,
                hideSelectedOptions: isMulti ? true : hideSelectedOptions,
                closeMenuOnSelect: isMulti ? false : true,
                defaultOptions: isMulti && isFuzzy ? options : null,
                menuPlacement: 'auto',
                menuPortalTarget: document.body,
                styles: {
                    menuPortal: (base) => ({ ...base, zIndex: 9999 }),
                    control: (styles, { data, isDisabled, isFocused, isSelected }) => ({
                        ...styles,
                        ...controlStyles({ data, isDisabled, isFocused, isSelected }),
                    }),
                    option: (styles, { data, isDisabled, isFocused, isSelected }) => ({
                        ...styles,
                        ...optionsStyles({ data, isDisabled, isFocused, isSelected }),
                    }),
                    indicatorSeparator: (styles) => ({
                        ...styles,
                        ...indicatorSeparator,
                    }),
                    dropdownIndicator: (styles) => ({
                        ...styles,
                        ...newStyles.dropdownIndicator,
                    }),
                    multiValue: (base) => ({...base, ...newStyles.multiValue}),
                    multiValueLabel: (base) => ({...base, ...newStyles.multiValueLabel}),
                    multiValueRemove: (base) => ({...base, ...newStyles.multiValueRemove}),
                    noOptionsMessage: (base) => ({...base, ...newStyles.noOptionsMessage}),
                },
                components: {
                    DropdownIndicator: DropdownIndicator, //loadOptions && isFuzzy ? SearchIndicator :
                },
                filterOption: filterByKey ? filterKeyValue : createFilter,
                // formatOptionLabel,
                formatGroupLabel,
                // loadOptions,
                openMenuOnClick: true, //!(loadOptions && isFuzzy),
                ...override['react-select'],
            };
        }, [
            isMulti,
            options,
            placeholder,
            selectClassName,
            // selectedValue,
            newDefaultValue,
            focused,
            handleOnChange,
            // handleOnFocus,
            handleOnBlur,
            hideSelectedOptions,
            // innerOptions,
            isClearable,
            isFuzzy,
            isReadOnly,
            filterByKey,
            // formatOptionLabel,
            formatGroupLabel,
            override,
            controlStyles,
            optionsStyles,
            indicatorSeparator,
        ]);

        if (isMulti) {
            selectProps.formatOptionLabel = formatOptionLabel;
        }

        // if (isMulti) {
        //     selectProps.components.Option = OptionsMulti;
        // }

        let SelectComponent = RSelect;
        // if (loadOptions && isFuzzy) {
        //     SelectComponent = AsyncSelect;
        //     selectProps.loadOptions = loadOptionsCb;
        // }

        return (
            <InputWrapper
                {...props}
                error={error}
                className={rootClassName}
                overrides={overridesProp}
            >
                <div className={classes.inputComponents} {...override.inputComponents}>
                    <SelectComponent {...selectProps} />
                </div>
            </InputWrapper>
        );
    },
);

export default Select;
