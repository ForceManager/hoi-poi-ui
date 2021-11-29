import React, { memo, useState, useCallback, useMemo, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { getOverrides, useClasses } from '../../../utils/overrides';
import { createFilter, filterKeyValue } from './utils'; // Local utils
import InputWrapper from '../components/InputWrapper';
import { default as RSelect } from 'react-select';
import AsyncSelect from 'react-select/async';

import Control from './components/Control';
import DropdownIndicator from './components/DropdownIndicator';
import ClearIndicator from './components/ClearIndicator';
import LockIndicator from './components/LockIndicator';
import CustomIndicator from './components/CustomIndicator';
import SingleValue from './components/SingleValue';
import MultiValueLabel from './components/MultiValueLabel';
import MultiValueRemove from './components/MultiValueRemove';
import LoadingIndicator from './components/LoadingIndicator';
import Menu from './components/Menu';
import MenuSingle from './components/MenuSingle';
import MenuMulti from './components/MenuMulti';
import Group from './components/Group';
import Option from './components/Option';
import ValueContainer from './components/ValueContainer';
import { isEqual } from '../../../utils/arrays';

import { createUseStyles } from '../../../utils/styles';
import styles from './styles';
import defaultTheme from '../../../utils/styles/defaultTheme';

const useStyles = createUseStyles(styles, 'Select');
const newStyles = styles(defaultTheme);

function groupsAreEqual(options, innerOptions) {
    return options
        .map((group, i) => isEqual(group.options, innerOptions[i].options))
        .reduce((allEqual, el) => allEqual && el, true);
}

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
        isRequired,
        isClearable,
        isSearchable,
        placeholder,
        options,
        defaultSearch,
        defaultValue,
        value,
        inputValue,
        forceBlurOnEnter,
        keepInputValueOnBlur,
        keepValueOnInputChange,
        useAsSimpleSearch,
        onChange,
        onBlur,
        onBlurSearch,
        onEnter,
        onKeyDown,
        hideSelectedOptions,
        filterByKey,
        customFilter,
        withoutFilter,
        defaultMenuIsOpen,
        loadOptions,
        groupOptions,
        loadingMessage,
        loadingPlaceholder,
        noOptionsMessage,
        actions,
        onClickAction,
        dropDownIcon,
        clearIcon,
        lockIcon,
        size,
        onlyText,
        dropdownWidth,
        afterControl,
        beforeControl,
        customOption,
        showNumSelected,
        numSelectedLiteral,
        hideDropdownIndicator,
        shouldSetValueOnChange,
        cacheOptions,
        focusDefaultOption,
        highlightMatch,
        menuPosition,
        useMenuPortal,
        forceMenuIsOpen,
        forceStartFocused,
        getRef,
        getCanChange,
        hideMultivalueChips,
        customOnChange,
        customOnChangeInput,
        ...props
    }) => {
        const selectRef = useRef();
        const [focused, setFocused] = useState(forceStartFocused || false);
        const [newValue, setNewValue] = useState(defaultValue || value || null);
        const [newInputValue, setNewInputValue] = useState(inputValue || '');
        const [innerOptions, setInnerOptions] = useState(options || []);
        const [lazyOptions, setLazyOptions] = useState({
            areLoaded: false,
            options: null,
            isLoading: false,
        });
        const debounce = useRef(null);
        const menuPlacementRef = useRef('bottom');
        const classes = useClasses(useStyles, classesProp);
        const override = getOverrides(overridesProp, Select.overrides);

        const rootClassName = classnames(
            classes.root,
            {
                [classes.isFullWidth]: isFullWidth,
                [classes.focused]: focused,
                [classes.async]: loadOptions && isFuzzy,
                [classes[size]]: size,
                [classes.onlyText]: onlyText,
            },
            classNameProp,
        );

        const selectClassName = classnames(classes.select, {
            [classes.isMulti]: isMulti,
        });

        useEffect(() => {
            setNewInputValue(inputValue);
        }, [inputValue]);

        useEffect(() => {
            setNewValue(value);
        }, [value]);

        useEffect(() => {
            const optionsAreGrouped = options?.[0].options;

            if (
                !isFuzzy &&
                ((optionsAreGrouped && !groupsAreEqual(options, innerOptions)) ||
                    (!optionsAreGrouped && !isEqual(options, innerOptions)))
            )
                setInnerOptions(options);
        }, [options, innerOptions, isFuzzy]);

        useEffect(() => {
            if (!focusDefaultOption) {
                let select = selectRef.current?.select?.select;
                select ??= selectRef.current?.select; // <-- for multi input
                if (select) select.getNextFocusedOption = () => null;
            }
        });

        const loadOptionsCb = useCallback(
            (text, cb) => {
                if (debounce.current) clearTimeout(debounce.current);
                if (!loadOptions) return cb();
                debounce.current = setTimeout(() => {
                    const loader = loadOptions(text, cb);
                    if (loader && typeof loader.then === 'function') {
                        loader.then(
                            (results) => {
                                setInnerOptions(results);
                                cb(results);
                            },
                            () => cb(),
                        );
                    }
                }, 500);
            },
            [loadOptions],
        );

        const handleOnChange = useCallback(
            (data, action) => {
                if (customOnChange) {
                    customOnChange({
                        value: data,
                        action,
                        setNewValue,
                        setNewInputValue,
                    });
                    return;
                }

                if (getCanChange && !getCanChange(data, action)) return;
                if (shouldSetValueOnChange) setNewValue(data);
                if (!isMulti) setFocused(false);
                onChange && onChange(data, action);
                if (
                    isMulti ||
                    (data && data.value) ||
                    (action?.action && action.action === 'clear' && newInputValue)
                ) {
                    setNewInputValue('');
                }
            },
            [
                isMulti,
                onChange,
                newInputValue,
                shouldSetValueOnChange,
                getCanChange,
                customOnChange,
            ],
        );

        const setMenuPlacement = useCallback(
            (e) => {
                const { y } = e.currentTarget.getBoundingClientRect();
                const bodyHeight = document.body.clientHeight;
                let overrideHeight;
                if (
                    override.menuList?.style?.maxHeight &&
                    !isNaN(override.menuList?.style?.maxHeight)
                ) {
                    overrideHeight = override.menuList?.style?.maxHeight;
                }

                const overrideMenu = override?.menu?.style || null;
                const overrideMenuPaddingTop =
                    (!isNaN(parseInt(overrideMenu?.paddingTop, 10)) &&
                        parseInt(overrideMenu?.paddingTop, 10)) ||
                    null;
                const overrideMenuPaddingBottom =
                    (!isNaN(parseInt(overrideMenu?.paddingBottom, 10)) &&
                        parseInt(overrideMenu?.paddingBottom, 10)) ||
                    null;
                const overrideMenuMarginTop =
                    (!isNaN(parseInt(overrideMenu?.marginTop, 10)) &&
                        parseInt(overrideMenu?.marginTop, 10)) ||
                    null;
                const overrideMenuMarginBottom =
                    (!isNaN(parseInt(overrideMenu?.marginBottom, 10)) &&
                        parseInt(overrideMenu?.marginBottom, 10)) ||
                    null;

                const margins =
                    (newStyles.menu.paddingTop || overrideMenuPaddingTop || 4) +
                    (newStyles.menu.paddingBottom || overrideMenuPaddingBottom || 4) +
                    (newStyles.menu.marginTop || overrideMenuMarginTop || 8) +
                    (newStyles.menu.marginBottom || overrideMenuMarginBottom || 8);
                const baseMenuHeight =
                    (overrideHeight || newStyles.menuList.maxHeight || 300) + margins;
                if (bodyHeight - y > baseMenuHeight) menuPlacementRef.current = 'bottom';
                else menuPlacementRef.current = 'top';
            },
            [override],
        );

        const handleOnFocus = useCallback(
            (e) => {
                setMenuPlacement(e);
                setFocused(true);
                const searchText =
                    defaultSearch ||
                    newInputValue ||
                    newValue?.label?.charAt(0)?.toLowerCase() ||
                    '';
                if (loadOptions && !isFuzzy && !lazyOptions.areLoaded) {
                    setLazyOptions({
                        ...lazyOptions,
                        isLoading: true,
                    });
                    loadOptions().then((options) => {
                        setLazyOptions({
                            areLoaded: true,
                            isLoading: false,
                            options,
                        });
                    });
                } else if (searchText && loadOptions && isFuzzy && !lazyOptions.areLoaded) {
                    setLazyOptions({
                        ...lazyOptions,
                        isLoading: true,
                    });

                    loadOptions(searchText).then((options) => {
                        setInnerOptions(options);
                        setLazyOptions({
                            areLoaded: true,
                            isLoading: false,
                            options,
                        });
                    });
                }
            },
            [
                isFuzzy,
                defaultSearch,
                newInputValue,
                lazyOptions,
                loadOptions,
                setMenuPlacement,
                newValue,
            ],
        );

        const handleOnBlur = useCallback(
            (e) => {
                setFocused(false);
                if (!keepInputValueOnBlur || isMulti) setNewInputValue('');
                onBlur && onBlur(e);
            },
            [onBlur, keepInputValueOnBlur, isMulti],
        );

        const controlStyles = useCallback(
            ({ isFocused }) => {
                let styles = {
                    ...newStyles.control,
                    ...(override.control?.style || {}),
                };

                if (isFocused) {
                    styles = {
                        ...styles,
                        ...newStyles.controlFocused,
                        ...(override.controlFocused?.style || {}),
                    };
                }
                return styles;
            },
            [override],
        );

        const optionStyles = useCallback(
            ({ isDisabled, isSelected, isFocused }) => {
                let styles = {
                    ...newStyles.option,
                    ...(override.option?.style || {}),
                };

                if (isFocused) {
                    styles = {
                        ...styles,
                        ...newStyles.optionFocused,
                        ...(override.optionFocused?.style || {}),
                    };
                }

                if (isSelected) {
                    styles = {
                        ...styles,
                        ...newStyles.optionSelected,
                        ...(override.optionSelected?.style || {}),
                    };
                }

                if (isDisabled) {
                    styles = {
                        ...styles,
                        ...newStyles.optionDisabled,
                        ...(override.optionDisabled?.style || {}),
                    };
                }

                return styles;
            },
            [override],
        );

        const valueContainerStyles = useCallback(
            ({ isDisabled }) => {
                let styles = {
                    ...newStyles.valueContainer,
                    ...(override.valueContainer?.style || {}),
                };

                if (isDisabled) {
                    styles = {
                        ...styles,
                        ...newStyles.valueContainerDisabled,
                        ...(override.valueContainerDisabled?.style || {}),
                    };
                }
                return styles;
            },
            [override],
        );

        const placeholderStyles = useCallback(
            ({ isDisabled }) => {
                let styles = {
                    ...newStyles.placeholder,
                    ...(override.placeholder?.style || {}),
                };

                if (isDisabled) {
                    styles = {
                        ...newStyles.placeholderDisabled,
                        ...(override.placeholderDisabled?.style || {}),
                    };
                }
                return styles;
            },
            [override],
        );

        const multiValueLabelStyles = useCallback(
            ({ data, isDisabled, isFocused, isSelected }) => {
                let styles = {
                    ...newStyles.multiValueLabel,
                    ...(override.multiValueLabel?.style || {}),
                    ...(override.multiValueLabel?.getStyles?.({
                        data,
                        isDisabled,
                        isFocused,
                        isSelected,
                    }) || {}),
                };
                if (isDisabled) {
                    styles = {
                        ...styles,
                        ...newStyles.multiValueLabelDisabled,
                        ...(override.multiValueLabelDisabled?.style || {}),
                        ...(override.multiValueLabelDisabled?.getStyles?.({
                            data,
                            isDisabled,
                            isFocused,
                            isSelected,
                        }) || {}),
                    };
                }

                return styles;
            },
            [override],
        );

        const multiValueRemoveStyles = useCallback(
            ({ data, isDisabled, isFocused, isSelected }) => {
                let styles = {
                    ...newStyles.multiValueRemove,
                    ...(override.multiValueRemove?.style || {}),
                    ...(override.multiValueRemove?.getStyles?.({
                        data,
                        isDisabled,
                        isFocused,
                        isSelected,
                    }) || {}),
                };
                if (isDisabled) {
                    styles = {
                        ...styles,
                        ...newStyles.multiValueRemoveDisabled,
                        ...(override.multiValueRemoveDisabled?.style || {}),
                        ...(override.multiValueRemoveDisabled?.getStyles?.({
                            data,
                            isDisabled,
                            isFocused,
                            isSelected,
                        }) || {}),
                    };
                }

                return styles;
            },
            [override],
        );

        const menuListStyles = useMemo(() => {
            let styles = {
                ...newStyles.menuList,
                ...(override.menuList?.style || {}),
            };

            return styles;
        }, [override]);

        const indicatorSeparatorStyles = useMemo(() => {
            if ((isRequired && !isMulti) || (isMulti && hideMultivalueChips)) {
                return newStyles.indicatorSeparatorHidden;
            } else if (
                !isReadOnly &&
                newValue &&
                ((isMulti && newValue.length > 0) || (!isMulti && newValue))
            ) {
                return newStyles.indicatorSeparator;
            } else return newStyles.indicatorSeparatorHidden;
        }, [isRequired, isMulti, hideMultivalueChips, isReadOnly, newValue]);

        const getMatchingCharacters = useCallback(
            (optionLabel) => {
                if (!optionLabel || !newInputValue) return '';
                if (optionLabel.includes(newInputValue)) return newInputValue;
                const optionLowerCase = optionLabel.toLowerCase();
                const searchLowerCase = newInputValue.toLowerCase();
                if (optionLowerCase.includes(searchLowerCase)) {
                    const firstIndex = optionLowerCase.indexOf(searchLowerCase);
                    const lastIndex = firstIndex + searchLowerCase.length;
                    const matchingCharacters = optionLabel.slice(firstIndex, lastIndex);
                    return matchingCharacters;
                }
                return '';
            },
            [newInputValue],
        );

        const getHighlighted = useCallback(
            (option) => {
                if (!highlightMatch) return null;
                const matchingCharacters = getMatchingCharacters(option.label);
                if (!matchingCharacters) return null;
                const replaceable = `<br/>${matchingCharacters}<br/>`;
                const newLabel = option.label;
                const labelReplaced = newLabel.replace(matchingCharacters, replaceable);
                const arr = labelReplaced.split('<br/>').filter((current) => current !== '');

                return (
                    <div
                        className={classes.highlightedContainer}
                        {...override.highlightedContainer}
                    >
                        {arr.map((current) => {
                            if (current === matchingCharacters)
                                return (
                                    <span className={classes.highlighted} {...override.highlighted}>
                                        {matchingCharacters}
                                    </span>
                                );
                            else return current;
                        })}
                    </div>
                );
            },
            [getMatchingCharacters, classes, highlightMatch, override],
        );

        const formatOptionLabel = useCallback(
            (option) => {
                if (customOption) {
                    return customOption(option, getMatchingCharacters);
                } else if (isMulti)
                    return MenuMulti({
                        option,
                        value: newValue,
                        classes,
                        override,
                        getHighlighted,
                    });
                else
                    return MenuSingle({
                        option,
                        classes,
                        override,
                        getHighlighted,
                    });
            },
            [
                isMulti,
                classes,
                override,
                newValue,
                customOption,
                getHighlighted,
                getMatchingCharacters,
            ],
        );

        const formatGroupLabel = useCallback(
            (data) => (
                <div key={data.value} className={classes.groupLabel} {...override.groupLabel}>
                    {data.label}
                </div>
            ),
            [classes, override],
        );

        const onMouseDown = useCallback(
            (e) => {
                if (!focused) {
                    e.preventDefault();
                    e.stopPropagation();
                    selectRef.current.focus();
                    setFocused(true);
                    return false;
                }
            },
            [focused],
        );

        const newIsClearable = useMemo(() => {
            if (isMulti && !hideMultivalueChips) return true;
            if (isRequired || hideMultivalueChips) return false;
            else return isClearable;
        }, [isMulti, hideMultivalueChips, isRequired, isClearable]);

        const handleOnKeyDown = useCallback(
            (e) => {
                if (e.key === 'Enter') {
                    if (forceBlurOnEnter) {
                        selectRef.current.blur();
                        setFocused(false);
                    }
                    if (keepInputValueOnBlur && !isMulti) {
                        setNewValue(null);
                    }
                    onEnter && onEnter(e);
                } else {
                    setFocused(true);
                }
                onKeyDown && onKeyDown(e);
            },
            [onKeyDown, onEnter, forceBlurOnEnter, keepInputValueOnBlur, isMulti],
        );

        const handleOnInputChange = useCallback(
            (inputValue, action) => {
                if (customOnChangeInput) {
                    customOnChangeInput({
                        value: newValue,
                        inputValue,
                        action,
                        setNewValue,
                        setNewInputValue,
                    });
                    return;
                }

                if (action.action === 'input-change') {
                    setNewInputValue(inputValue);
                    if (
                        !keepValueOnInputChange &&
                        keepInputValueOnBlur &&
                        !isMulti &&
                        newValue?.value
                    ) {
                        setNewValue(null);
                    }
                } else {
                    //This is exectued everytime blur is executed, including onKeyDown e.key === 'Enter'
                    onBlurSearch && onBlurSearch(newInputValue, action);
                }
            },
            [
                keepValueOnInputChange,
                keepInputValueOnBlur,
                isMulti,
                newValue,
                onBlurSearch,
                newInputValue,
                customOnChangeInput,
            ],
        );

        const selectProps = useMemo(() => {
            let menuIsOpen =
                (focused && (!(loadOptions && isFuzzy) || !!innerOptions?.length)) || false;
            if (useAsSimpleSearch) menuIsOpen = false;
            if (forceMenuIsOpen) menuIsOpen = true;
            let Indicator = DropdownIndicator;
            let additionalComponents = {};
            if ((loadOptions && isFuzzy) || useAsSimpleSearch || hideDropdownIndicator)
                Indicator = null;
            if (newInputValue && !newValue && keepInputValueOnBlur) Indicator = ClearIndicator;
            if (isReadOnly) Indicator = LockIndicator;
            if (dropDownIcon) Indicator = CustomIndicator;
            if (showNumSelected) additionalComponents = { ...additionalComponents, ValueContainer };
            let filterOption = filterByKey ? filterKeyValue : createFilter;
            if (withoutFilter) filterOption = undefined;
            if (customFilter) filterOption = customFilter;

            return {
                ref: (ref) => {
                    getRef && getRef(ref);
                    selectRef.current = ref;
                },
                className: selectClassName,
                classNamePrefix: 'hoi-poi-select',
                placeholder,
                options: lazyOptions.options || innerOptions,
                defaultOptions: innerOptions,
                cacheOptions,
                noOptionsMessage,
                loadingMessage,
                defaultValue: newValue,
                value: newValue,
                inputValue: newInputValue,
                defaultMenuIsOpen,
                actions,
                isMulti,
                isDisabled: isReadOnly,
                isClearable: showNumSelected ? false : newIsClearable,
                isSearchable: showNumSelected ? false : isSearchable,
                isLoading: lazyOptions.isLoading,
                autoFocus: focused,
                blurInputOnSelect: !isMulti,
                hideSelectedOptions: isMulti ? false : hideSelectedOptions,
                closeMenuOnSelect: isMulti ? false : true,
                menuPlacement: menuPlacementRef.current,
                menuPosition: menuPosition || 'fixed',
                menuPortalTarget: useMenuPortal ? document.body : undefined,
                loadOptions,
                openMenuOnClick: !(loadOptions && isFuzzy),
                openMenuOnFocus: !(loadOptions && isFuzzy),
                menuIsOpen,
                onChange: handleOnChange,
                onInputChange: handleOnInputChange,
                onFocus: handleOnFocus,
                onBlur: handleOnBlur,
                onKeyDown: handleOnKeyDown,
                filterOption,
                formatOptionLabel,
                formatGroupLabel,
                dropDownIcon,
                clearIcon,
                lockIcon,
                isFuzzy,
                beforeControl,
                afterControl,
                onMouseDown,
                numSelectedLiteral,
                menuProps: {
                    dropdownWidth,
                    className: classes.menu,
                    actionContainerClassName: classes.actionContainer,
                    actionClassName: classes.action,
                    actionIconClassName: classes.actionIcon,
                    actionTextClassName: classes.actionText,
                    actionTextWithIconClassName: classes.actionTextWithIcon,
                    singleValueIconClassName: classes.singleValueIcon,
                    actions,
                    onClickAction,
                    override: {
                        menu: override.menu,
                        actionContainer: override.actionContainer,
                        action: override.action,
                        actionIcon: override.actionIcon,
                        actionText: override.actionText,
                        actionTextWithIcon: override.actionTextWithIcon,
                    },
                },
                components: {
                    DropdownIndicator: Indicator,
                    Control,
                    ClearIndicator,
                    SingleValue,
                    MultiValueLabel,
                    MultiValueRemove,
                    LoadingIndicator,
                    Menu,
                    Group: Group({
                        className: classes.group,
                        override: {
                            group: override.group,
                        },
                    }),
                    Option: Option({
                        className: classes.option,
                        override: {
                            option: override.option,
                        },
                    }),
                    ...additionalComponents,
                },
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
                    input: (styles) => ({
                        ...styles,
                        ...newStyles.input,
                        ...(override.input?.style || {}),
                    }),
                    group: (styles) => ({
                        ...styles,
                        ...newStyles.group,
                        ...(override.group?.style || {}),
                    }),
                    groupHeading: (styles) => ({
                        ...styles,
                        ...newStyles.groupHeading,
                        ...(override.groupHeading?.style || {}),
                    }),
                    option: (styles, { data, isDisabled, isFocused, isSelected }) => ({
                        ...styles,
                        ...optionStyles({ data, isDisabled, isFocused, isSelected }),
                    }),
                    indicatorsContainer: (styles) => ({
                        ...styles,
                        ...newStyles.indicatorsContainer,
                        ...(override.indicatorsContainer?.style || {}),
                    }),
                    clearIndicator: (styles) => ({
                        ...styles,
                        ...newStyles.clearIndicator,
                        ...(override.clearIndicator?.style || {}),
                        ...(override.clearIndicator?.getStyles?.() || {}),
                    }),
                    indicatorSeparator: (styles) => ({
                        ...styles,
                        ...indicatorSeparatorStyles,
                        ...(override.indicatorSeparator?.style || {}),
                        ...(override.indicatorSeparator?.getStyles?.() || {}),
                    }),
                    dropdownIndicator: (styles) => ({
                        ...styles,
                        ...newStyles.dropdownIndicator,
                        ...(override.dropdownIndicator?.style || {}),
                    }),
                    menuList: (styles) => ({
                        ...styles,
                        ...menuListStyles,
                    }),
                    multiValue: (styles, { data, isDisabled, isFocused, isSelected }) => {
                        const hideMultivalueChipsStyles = hideMultivalueChips
                            ? newStyles.hideMultivalueChips
                            : {};

                        return {
                            ...styles,
                            ...newStyles.multiValue,
                            ...hideMultivalueChipsStyles,
                            ...(override.multiValue?.style || {}),
                            ...(override.multiValue?.getStyles?.({
                                data,
                                isDisabled,
                                isFocused,
                                isSelected,
                            }) || {}),
                        };
                    },
                    multiValueLabel: (styles, { data, isDisabled, isFocused, isSelected }) => ({
                        ...styles,
                        ...multiValueLabelStyles({ data, isDisabled, isFocused, isSelected }),
                    }),
                    multiValueRemove: (styles, { data, isDisabled, isFocused, isSelected }) => ({
                        ...styles,
                        ...multiValueRemoveStyles({ data, isDisabled, isFocused, isSelected }),
                    }),
                    noOptionsMessage: (styles) => ({
                        ...styles,
                        ...newStyles.noOptionsMessage,
                        ...(override.noOptionsMessage?.style || {}),
                    }),
                    loadingMessage: (styles) => ({
                        ...styles,
                        ...newStyles.loadingMessage,
                        ...(override.loadingMessage?.style || {}),
                    }),
                    ...override.styles,
                },
                ...override['react-select'],
            };
        }, [
            focused,
            loadOptions,
            isFuzzy,
            innerOptions,
            useAsSimpleSearch,
            forceMenuIsOpen,
            hideDropdownIndicator,
            newInputValue,
            newValue,
            keepInputValueOnBlur,
            isReadOnly,
            dropDownIcon,
            clearIcon,
            lockIcon,
            showNumSelected,
            filterByKey,
            withoutFilter,
            customFilter,
            selectClassName,
            placeholder,
            lazyOptions.options,
            lazyOptions.isLoading,
            cacheOptions,
            noOptionsMessage,
            loadingMessage,
            defaultMenuIsOpen,
            actions,
            isMulti,
            newIsClearable,
            isSearchable,
            hideSelectedOptions,
            menuPosition,
            useMenuPortal,
            handleOnChange,
            handleOnInputChange,
            handleOnFocus,
            handleOnBlur,
            handleOnKeyDown,
            formatOptionLabel,
            formatGroupLabel,
            beforeControl,
            afterControl,
            onMouseDown,
            numSelectedLiteral,
            dropdownWidth,
            classes.menu,
            classes.actionContainer,
            classes.action,
            classes.actionIcon,
            classes.actionText,
            classes.actionTextWithIcon,
            classes.singleValueIcon,
            classes.group,
            classes.option,
            onClickAction,
            override,
            getRef,
            controlStyles,
            placeholderStyles,
            valueContainerStyles,
            optionStyles,
            indicatorSeparatorStyles,
            menuListStyles,
            hideMultivalueChips,
            multiValueLabelStyles,
            multiValueRemoveStyles,
        ]);

        let SelectComponent = RSelect;
        if (loadOptions && isFuzzy) {
            SelectComponent = AsyncSelect;
            selectProps.loadOptions = loadOptionsCb;
        }

        return (
            <InputWrapper
                {...props}
                error={error}
                className={rootClassName}
                overrides={overridesProp}
                isFullWidth={isFullWidth}
                isRequired={isRequired}
            >
                <div className={classes.inputComponents} {...override.inputComponents}>
                    <SelectComponent {...selectProps} />
                </div>
            </InputWrapper>
        );
    },
);

Select.overrides = [
    'root',
    'react-select',
    'inputComponents',
    'control',
    'controlFocused',
    'option',
    'optionFocused',
    'optionSelected',
    'optionsDisabled',
    'valueContainer',
    'valueContainerDisabled',
    'input',
    'group',
    'groupHeading',
    'indicatorsContainer',
    'clearIndicator',
    'placeholder',
    'placeholderDisabled',
    'multiValue',
    'multiValueLabel',
    'multiValueLabelDisabled',
    'multiValueRemove',
    'multiValueRemoveDisabled',
    'optionLabel',
    'optionLabelIcon',
    'optionLabelCustomIcon',
    'optionLabelAvatar',
    'disabledAvatar',
    'disabledText',
    'disabledIcon',
    'label',
    'optionLabelBlock',
    'optionLabelText',
    'optionLabelSubLabel',
    'menu',
    'actionContainer',
    'action',
    'actionIcon',
    'actionText',
    'actionTextWithIcon',
    'styles',
];

Select.defaultProps = {
    labelMode: 'vertical',
    onChange: () => {},
    value: '',
    isReadOnly: false,
    hideSelectedOptions: true,
    isClearable: true,
    overrides: {},
    hideOptions: false,
    filterByKey: false,
    defaultMenuIsOpen: false,
    size: 'medium',
    onlyText: false,
    isSearchable: true,
    showNumSelected: false,
    numSelectedLiteral: '%@ Selected',
    hideDropdownIndicator: false,
    shouldSetValueOnChange: true,
    cacheOptions: true,
    focusDefaultOption: true,
    withoutFilter: false,
    useMenuPortal: true,
};

Select.propTypes = {
    className: PropTypes.string,
    menuListClassName: PropTypes.string,
    menuClassName: PropTypes.string,
    overrides: PropTypes.object,
    /** Async mode */
    loadOptions: PropTypes.func,
    groupOptions: PropTypes.func,
    /* Autocomplete/Search UI */
    isFuzzy: PropTypes.bool,
    onChange: PropTypes.func,
    onKeyDown: PropTypes.func,
    /** Native input id */
    id: PropTypes.string,
    /** Native input name */
    name: PropTypes.string,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string,
            value: PropTypes.any,
            isDisabled: PropTypes.bool,
            src: PropTypes.string,
            icon: PropTypes.element,
            iconType: PropTypes.string,
            subLabel: PropTypes.string,
        }),
    ),
    defaultSearch: PropTypes.string,
    defaultValue: PropTypes.any,
    value: PropTypes.any,
    label: PropTypes.string,
    labelMode: PropTypes.oneOf(['horizontal', 'vertical']),
    placeholder: PropTypes.string,
    noOptionsPlaceholder: PropTypes.string,
    loadingPlaceholder: PropTypes.string,
    isFullWidth: PropTypes.bool,
    inputValue: PropTypes.string,
    forceBlurOnEnter: PropTypes.bool,
    keepInputValueOnBlur: PropTypes.bool,
    /** It allows using the Select as a simple input for search uses */
    useAsSimpleSearch: PropTypes.bool,
    onBlurSearch: PropTypes.func,
    /** Info popover */
    hint: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** Error will be displayed below the component with style changes */
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    /** Info will be displayed below the component with style changes */
    info: PropTypes.string,
    isRequired: PropTypes.bool,
    isReadOnly: PropTypes.bool,
    isSearchable: PropTypes.bool,
    /** Hide the selected option from the menu */
    hideSelectedOptions: PropTypes.bool,
    /** Is the select value clearable */
    isClearable: PropTypes.bool,
    /** React select component customization */
    components: PropTypes.object,
    /** multiple select support */
    isMulti: PropTypes.bool,
    /** Fixed actions added at the bottom con menu list */
    actions: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string,
            onClick: PropTypes.func,
        }),
    ),
    /** Filter by keys as well */
    filterByKey: PropTypes.bool,
    defaultMenuIsOpen: PropTypes.bool,
    /** Custom dropDown icon */
    dropDownIcon: PropTypes.element,
    /** Custom clear icon */
    clearIcon: PropTypes.element,
    /** Custom lock icon */
    lockIcon: PropTypes.element,
    hideDropdownIndicator: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'medium']),
    onlyText: PropTypes.bool,
    dropdownWidth: PropTypes.string,
    beforeControl: PropTypes.node,
    afterControl: PropTypes.node,
    showNumSelected: PropTypes.bool,
    numSelectedLiteral: PropTypes.string,
    /** Function to customize the option row */
    customOption: PropTypes.func,
    /** If false, the selected value won't be set as selected. Useful if your goal is just to pick an option without showing it on the input */
    shouldSetValueOnChange: PropTypes.bool,
    cacheOptions: PropTypes.bool,
    /** Enable/disable focusing first option of the select */
    focusDefaultOption: PropTypes.bool,
    /** Highlights the first matching characters in the fuzzy result options */
    highlightMatch: PropTypes.bool,
    menuPosition: PropTypes.oneOf(['absolute', 'fixed']),
    /** false prints the menu as a sibiling of the control element, true prints the menu in a portal*/
    useMenuPortal: PropTypes.bool,
    forceMenuIsOpen: PropTypes.bool,
    forceStartFocused: PropTypes.bool,
    getRef: PropTypes.func,
    /** Hide chips in multiselect */
    hideMultivalueChips: PropTypes.bool,
    /** Control change events from outside the component */
    customOnChange: PropTypes.func,
    /** Control change input events from outside the component */
    customOnChangeInput: PropTypes.func,
};

export default Select;
