import React, { memo, useState, useCallback, useMemo } from 'react';
// import PropTypes from 'prop-types';
import classnames from 'classnames';
import { getOverrides, useClasses } from '../../../utils/overrides';
import Icon from '../../general/Icon';
import Avatar from '../../general/Avatar';
import InputWrapper from '../components/InputWrapper';
import { default as RSelect } from 'react-select';
// import AsyncSelect from 'react-select/async';
import { createFilter, filterKeyValue } from './utils';
import Checkbox from '../../general/Checkbox';

import DropdownIndicator from './components/DropdownIndicator';
import ClearIndicator from './components/ClearIndicator';
// import SearchIndicator from './components/SearchIndicator';
import SingleValue from './components/SingleValue';
import MultiValueLabel from './components/MultiValueLabel';

import { createUseStyles } from '../../../utils/styles';
import styles from './styles';
import defaultTheme from '../../../utils/styles/defaultTheme';

const useStyles = createUseStyles(styles, 'Select');
const newStyles = styles(defaultTheme);

const Select = memo(
    ({
        error,
        classes: classesProp,
        overrides: overridesProp,
        className: classNameProp,
        type = 'checkboxAndBullet',
        isReadOnly,
        isFullWidth,
        isFuzzy,
        isMulti,
        isClearable,
        placeholder,
        options,
        defaultValue,
        value,
        isValueObject,
        onChange,
        onBlur,
        hideSelectedOptions,
        filterByKey,
        defaultMenuIsOpen = false,
        // loadOptions,
        // loadingMessage,
        // loadingPlaceholder,
        ...props
    }) => {
        const [focused, setFocused] = useState(false);
        const newDefaultValue = defaultValue || value;
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

        // const newDefaultValue = useMemo(() => {
        //     if (isValueObject) return defaultValue;
        //     const finalOptions = options && options.length ? options : options;
        //     if (
        //         !isMulti &&
        //         finalOptions &&
        //         finalOptions.length &&
        //         defaultValue !== null &&
        //         defaultValue !== undefined
        //     ) {
        //         return finalOptions.find((op) => {
        //             return op.value === defaultValue;
        //         });
        //     }
        //     if (isMulti && finalOptions && finalOptions.length && defaultValue) {
        //         return defaultValue.map((v) => finalOptions.find((op) => op.value === v));
        //     }
        // }, [isMulti, options, defaultValue, isValueObject]);

        const handleOnChange = useCallback(
            (data, action) => {
                onChange && onChange(data);
            },
            [onChange],
        );

        const handleOnFocus = useCallback(() => {
            setFocused(true);
        }, []);

        const handleOnBlur = useCallback(() => {
            setFocused(false);
            onBlur && onBlur();
        }, [onBlur]);

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

            if (isDisabled) {
                styles = {
                    ...styles,
                    ...newStyles.optionDisabled,
                };
            }

            return styles;
        }, []);

        const valueContainerStyles = useCallback(({ data, isDisabled, isFocused, isSelected }) => {
            let styles = {
                ...newStyles.valueContainer,
            };

            if (isDisabled) {
                styles = {
                    ...newStyles.valueContainerDisabled,
                };
            }
            return styles;
        }, []);

        const placeholderStyles = useCallback(({ data, isDisabled, isFocused, isSelected }) => {
            let styles = {
                ...newStyles.placeholder,
            };

            if (isDisabled) {
                styles = {
                    ...newStyles.placeholderDisabled,
                };
            }
            return styles;
        }, []);

        const multiValueLabelStyles = useCallback(({ data, isDisabled, isFocused, isSelected }) => {
            let styles = {
                ...newStyles.multiValueLabel,
            };
            if (isDisabled) {
                styles = {
                    ...styles,
                    ...newStyles.multiValueLabelDisabled,
                };
            }

            return styles;
        }, []);

        const multiValueRemoveStyles = useCallback(
            ({ data, isDisabled, isFocused, isSelected }) => {
                let styles = {
                    ...newStyles.multiValueRemove,
                };
                if (isDisabled) {
                    styles = {
                        ...styles,
                        ...newStyles.multiValueRemoveDisabled,
                    };
                }

                return styles;
            },
            [],
        );

        const oneLine = useCallback(
            (option, data) => {
                let textClasses = [classes.optionLabelText];
                let iconClasses = [classes.optionLabelIcon];
                let customIconClasses = [classes.optionLabelCustomIcon];

                if (option.isDisabled) {
                    textClasses.push(classes.disabledText);
                    iconClasses.push(classes.disabledIcon);
                    customIconClasses.push(classes.disabledIcon);
                }
                return (
                    <div className={classes.optionLabel}>
                        {option.iconType && (
                            <Icon
                                className={iconClasses.join(' ')}
                                name={option.iconType}
                                color={option.iconColor || null}
                                size="medium"
                            />
                        )}
                        {option.icon && (
                            <div className={customIconClasses.join(' ')}>{option.icon}</div>
                        )}
                        {option.src && (
                            <div className={classes.optionLabelAvatar}>
                                {option.isDisabled && <div className={classes.disabledAvatar} />}
                                <Avatar
                                    size="small"
                                    src={option.src}
                                    placeholder={option.placeholder || ''}
                                    alt={option.alt}
                                />
                            </div>
                        )}
                        <div className={textClasses.join(' ')}>{option.label}</div>
                    </div>
                );
            },
            [classes],
        );

        const twoLines = useCallback(
            (option, data) => {
                let textClasses = [classes.optionLabelText];
                let subtitleClasses = [classes.optionLabelSubtitle];
                if (option.isDisabled) {
                    textClasses.push(classes.disabledText);
                    subtitleClasses.push(classes.disabledText);
                }
                return (
                    <div className={classes.optionLabel}>
                        <div className={classes.optionLabelBlock}>
                            <div className={textClasses.join(' ')}>{option.label}</div>
                            <div className={subtitleClasses.join(' ')}>{option.description}</div>
                        </div>
                    </div>
                );
            },
            [classes],
        );

        const multiCheckbox = useCallback(
            (option, data) => {
                const isSelected = value
                    ? !!value.find((item) => item.value === option.value)
                    : false;
                let bulletClasses = [classes.optionLabelBullet];
                let textClasses = [classes.optionLabelText];

                if (option.isDisabled) {
                    bulletClasses.push(classes.optionLabelBulletDisabled);
                } else if (option.type) {
                    if (option.type === 'primary')
                        bulletClasses.push(classes.optionLabelBulletPrimary);
                    if (option.type === 'danger')
                        bulletClasses.push(classes.optionLabelBulletDanger);
                    if (option.type === 'success')
                        bulletClasses.push(classes.optionLabelBulletSuccess);
                }

                if (option.isDisabled) {
                    textClasses.push(classes.disabledText);
                }

                return (
                    <div className={classes.optionLabel}>
                        <Checkbox
                            className={classes.optionLabelCheckbox}
                            checked={isSelected}
                            color="orange"
                            isDisabled={option.isDisabled || false}
                            isBiTone={true}
                        />
                        {option.type && <div className={bulletClasses.join(' ')} />}
                        <div className={textClasses.join(' ')}>{option.label}</div>
                    </div>
                );
            },
            [classes, value],
        );

        const optionLabels = useMemo(() => {
            return {
                twoLines,
            };
        }, [twoLines]);

        const formatOptionLabel = useCallback(
            (option, data) => {
                if (isMulti) {
                    return multiCheckbox(option, data);
                } else {
                    if (type && optionLabels[type]) return optionLabels[type](option, data);
                    return oneLine(option, data);
                }
            },
            [type, optionLabels, isMulti, multiCheckbox, oneLine],
        );

        const formatGroupLabel = useCallback(
            (data) => (
                <div key={data.value} className={classes.group}>
                    {data.label}
                </div>
            ),
            [classes],
        );

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
                defaultMenuIsOpen,
                isMulti,
                isDisabled: isReadOnly,
                onChange: handleOnChange,
                onFocus: handleOnFocus,
                onBlur: handleOnBlur,
                isClearable: isMulti ? true : isClearable,
                autoFocus: focused,
                hideSelectedOptions: isMulti ? false : hideSelectedOptions,
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
                    placeholder: (styles, { data, isDisabled, isFocused, isSelected }) => ({
                        ...styles,
                        ...placeholderStyles({ data, isDisabled, isFocused, isSelected }),
                    }),
                    valueContainer: (styles, { data, isDisabled, isFocused, isSelected }) => ({
                        ...styles,
                        ...valueContainerStyles({ data, isDisabled, isFocused, isSelected }),
                    }),
                    option: (styles, { data, isDisabled, isFocused, isSelected }) => ({
                        ...styles,
                        ...optionsStyles({ data, isDisabled, isFocused, isSelected }),
                    }),
                    indicatorsContainer: (styles) => ({
                        ...styles,
                        ...newStyles.indicatorsContainer,
                    }),
                    clearIndicator: (styles) => ({
                        ...styles,
                        ...newStyles.clearIndicator,
                    }),
                    indicatorSeparator: (styles) => ({
                        ...styles,
                        ...indicatorSeparator,
                    }),
                    dropdownIndicator: (styles) => ({
                        ...styles,
                        ...newStyles.dropdownIndicator,
                    }),
                    multiValue: (styles) => ({ ...styles, ...newStyles.multiValue }),
                    multiValueLabel: (styles, { data, isDisabled, isFocused, isSelected }) => ({
                        ...styles,
                        ...multiValueLabelStyles({ data, isDisabled, isFocused, isSelected }),
                    }),
                    multiValueRemove: (styles, { data, isDisabled, isFocused, isSelected }) => ({
                        ...styles,
                        ...multiValueRemoveStyles({ data, isDisabled, isFocused, isSelected }),
                    }),
                    // multiValueRemove: (styles) => ({ ...styles, ...newStyles.multiValueRemove }),
                    noOptionsMessage: (styles) => ({ ...styles, ...newStyles.noOptionsMessage }),
                },
                components: {
                    DropdownIndicator, //loadOptions && isFuzzy ? SearchIndicator :
                    ClearIndicator,
                    SingleValue,
                    MultiValueLabel,
                },
                filterOption: filterByKey ? filterKeyValue : createFilter,
                formatOptionLabel,
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
            handleOnFocus,
            handleOnBlur,
            hideSelectedOptions,
            // innerOptions,
            isClearable,
            isFuzzy,
            isReadOnly,
            filterByKey,
            formatOptionLabel,
            formatGroupLabel,
            override,
            controlStyles,
            optionsStyles,
            valueContainerStyles,
            placeholderStyles,
            multiValueLabelStyles,
            multiValueRemoveStyles,
            indicatorSeparator,
            defaultMenuIsOpen,
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
                isFullWidth={isFullWidth}
            >
                <div className={classes.inputComponents} {...override.inputComponents}>
                    <SelectComponent {...selectProps} />
                </div>
            </InputWrapper>
        );
    },
);

export default Select;
