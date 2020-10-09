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

import DropdownIndicator from './DropdownIndicator';
import SearchIndicator from './SearchIndicator';

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
        value,
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

        // const menuListClassName = classnames(classes.menuList, props.menuListClassName);
        // const menuClassName = classnames(classes.menu, props.menuClassName);
        const selectClassName = classnames(classes.select, {
            [classes.isMulti]: isMulti,
        });

        const selectedValue = useMemo(() => {
            if (isValueObject) return value;
            const finalOptions = options && options.length ? options : options;
            if (
                !isMulti &&
                finalOptions &&
                finalOptions.length &&
                value !== null &&
                value !== undefined
            ) {
                return finalOptions.find((op) => {
                    return op.value === value;
                });
            }
            if (isMulti && finalOptions && finalOptions.length && value) {
                return value.map((v) => finalOptions.find((op) => op.value === v));
            }
        }, [isMulti, options, value, isValueObject]);

        // const onRemove = useCallback(
        //     (itemForRemove) => {
        //         const result = value.filter((item) => item.value !== itemForRemove.value);
        //         onChange && onChange(result, options);
        //         onBlur && onBlur(result, options);
        //     },
        //     [onBlur, onChange, options, value],
        // );

        const handleOnChange = useCallback(
            (data, action) => {
                if (isMulti) {
                    debugger;
                    let hasValue = !!(value || []).find(
                        (item) => item.value === data[0].value || item === data[0].value,
                    );
                    if (hasValue) {
                        data = value.filter((item) =>
                            isValueObject ? item.value !== data[0].value : item !== data[0].value,
                        );
                    } else {
                        data = [...value, ...data];
                    }
                }

                if (!isValueObject && data) {
                    if (isMulti) {
                        data = data.map((d) => d?.value ?? d);
                    } else {
                        data = data.value;
                    }
                }
                onChange && onChange(data, options);
                onBlur && onBlur(data, options);
            },
            [onChange, onBlur, isMulti, isValueObject, options, value],
        );

        // const handleOnFocus = useCallback(
        //     (e) => {
        //         setFocused(true);
        //         if (loadOptions && !isFuzzy && !lazyOptions.areLoaded) {
        //             setLazyOptions({
        //                 ...lazyOptions,
        //                 isLoading: true,
        //             });
        //             loadOptions().then((options) => {
        //                 setLazyOptions({
        //                     areLoaded: true,
        //                     isLoading: false,
        //                     options,
        //                 });
        //             });
        //         }
        //     },
        //     [isFuzzy, lazyOptions, loadOptions],
        // );

        const handleOnBlur = useCallback(() => {
            setFocused(false);
        }, []);

        // const formatOptionLabel = useCallback(
        //     (data) => {
        //         return (
        //             <div className={classes.optionLabel}>
        //                 {isMulti && (
        //                     <Checkbox
        //                         checked={
        //                             value
        //                                 ? !!value.find(
        //                                       (item) =>
        //                                           item.value === data.value || item === data.value,
        //                                   )
        //                                 : false
        //                         }
        //                     />
        //                 )}
        //                 <span>{data.label}</span>
        //             </div>
        //         );
        //     },
        //     [classes.optionLabel, isMulti, value],
        // );

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
                styles = { ...styles, ...newStyles.constrolFocused };
            }
            return styles;
        }, []);

        const optionsStyles = useCallback(({ data, isDisabled, isFocused, isSelected }) => {
            let styles = {
                ...newStyles.options,
            };

            return styles;
        }, []);

        const indicatorSeparator = useMemo(() => {
            return newStyles.indicatorSeparator;
        }, []);

        const selectProps = useMemo(() => {
            return {
                className: selectClassName,
                classNamePrefix: 'hoi-poi-select',
                placeholder,
                options: options,
                value: isMulti ? [] : selectedValue,
                isMulti,
                onChange: handleOnChange,
                // onFocus: handleOnFocus,
                onBlur: handleOnBlur,
                isDisabled: isReadOnly,
                isClearable: isMulti ? false : isClearable,
                // isLoading: lazyOptions.isLoading,
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
            selectedValue,
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
