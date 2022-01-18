import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { default as RSelect } from 'react-select';
import AsyncSelect from 'react-select/async';

import { getOverrides, useClasses } from '../../../utils/overrides';
import { createFilter, filterKeyValue } from './utils'; // Local utils

import ClearIndicator from './ClearIndicator';
import DropdownIndicator from './DropdownIndicator';
import SearchIndicator from './SearchIndicator';
import LoadingIndicator from './LoadingIndicator';
import Menu from './Menu';
import MenuList from './MenuList';
import Checkbox from '../../general/Checkbox';
import Chip from '../../general/Chip';
import Label from '../Label';
import Text from '../../typography/Text';
import Link from '../../typography/Link';

import { createUseStyles } from '../../../utils/styles';
import styles from './styles';
const useStyles = createUseStyles(styles, 'Select');

function Select({
    children,
    classes: classesProp,
    overrides: overridesProp,
    className: classNameProp,
    onChange,
    onBlur,
    id,
    name,
    options,
    value,
    label,
    labelMode,
    isFullWidth,
    placeholder,
    noOptionsPlaceholder,
    hint,
    error,
    isRequired,
    isReadOnly,
    isClearable,
    components,
    hideSelectedOptions, // native react-select
    hideOptions,
    actions,
    onClickAction, // private props
    isMulti,
    loadOptions,
    loadingMessage,
    loadingPlaceholder,
    isFuzzy,
    isValueObject,
    filterByKey,
    autoFocus,
    isBulk,
    bulkEditLabel,
    bulkCancelLabel,
    onBulkEdit,
    onBulkCancel,
    ...props
}) {
    const classes = useClasses(useStyles, classesProp);
    // State
    const [innerOptions, setInnerOptions] = useState(options);
    const [focused, setFocused] = useState(autoFocus);
    const [lazyOptions, setLazyOptions] = useState({
        areLoaded: false,
        options: null,
        isLoading: false,
    });
    const [bulkEditable, setBulkEditable] = useState(false);
    const debounce = useRef(null);

    // Overrides
    const override = getOverrides(overridesProp, Select.overrides);

    // Classes
    const rootClassName = classnames(
        classes.root,
        {
            [classes.isReadOnly]: isReadOnly && !isFuzzy,
            [classes[labelMode]]: labelMode,
            [classes.isFullWidth]: isFullWidth,
            [classes.focused]: focused,
            [classes.errored]: error,
            [classes.async]: loadOptions && isFuzzy,
            [classes.withBulk]: bulkEditable,
            [classes.withErrorBulk]: error && bulkEditable,
        },
        classNameProp,
    );

    const menuListClassName = classnames(classes.menuList, props.menuListClassName);
    const menuClassName = classnames(classes.menu, props.menuClassName);
    const selectClassName = classnames(classes.select, {
        [classes.isMulti]: isMulti,
    });

    const rootProps = {
        className: rootClassName,
    };

    const labelProps = {
        className: classes.Label,
        isRequired,
        hint,
        ...override.Label,
    };

    useEffect(() => setFocused(autoFocus), [autoFocus]);

    const onRemove = useCallback(
        (itemForRemove) => {
            return () => {
                const result = value.filter((item) => item.value !== itemForRemove.value);
                onChange && onChange(result, options);
                onBlur && onBlur(result, options);
            };
        },
        [onBlur, onChange, options, value],
    );

    const onRemoveSingle = useCallback(() => {
        onChange && onChange(null);
        onBlur && onBlur(null);
    }, [onBlur, onChange]);

    const onClickBulkEdit = useCallback(() => {
        setBulkEditable(true);
        onBulkEdit && onBulkEdit();
    }, [onBulkEdit]);

    const onClickBulkCancel = useCallback(() => {
        setBulkEditable(false);
        onBulkCancel && onBulkCancel();
    }, [onBulkCancel]);

    const loadOptionsCb = useCallback(
        (text, cb) => {
            if (debounce.current) clearTimeout(debounce.current);
            debounce.current = setTimeout(() => {
                if (!loadOptions) return cb();
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
    const selectedValue = useMemo(() => {
        if (isValueObject) return value;
        const finalOptions = innerOptions && innerOptions.length ? innerOptions : options;
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
    }, [isMulti, options, value, innerOptions, isValueObject]);

    const selectProps = {
        id,
        name,
        className: selectClassName,
        classNamePrefix: 'hoi-poi-select',
        placeholder,
        options: lazyOptions.options || options,
        value: isMulti ? [] : selectedValue,
        isMulti,
        onChange: useCallback(
            (data, action) => {
                if (isMulti) {
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
            [isMulti, isValueObject, onBlur, onChange, options, value],
        ),
        isDisabled: isReadOnly,
        isClearable: isMulti ? false : isClearable,
        autoFocus: focused,
        hideSelectedOptions: isMulti ? true : hideSelectedOptions,
        closeMenuOnSelect: isMulti ? false : true,
        defaultOptions: isMulti && isFuzzy ? innerOptions : null,
        noOptionsMessage: useCallback(() => noOptionsPlaceholder, [noOptionsPlaceholder]),
        loadingMessage: useCallback(() => loadingPlaceholder, [loadingPlaceholder]),
        isLoading: lazyOptions.isLoading,
        getOptionValue: useCallback(({ value }) => value, []),
        menuPlacement: 'auto',
        menuPortalTarget: document.body,
        styles: {
            menuPortal: (base) => ({ ...base, zIndex: 9999 }),
        },
        components: {
            ClearIndicator: useMemo(() => ClearIndicator(loadOptions && isFuzzy, classes.clear), [
                classes.clear,
                isFuzzy,
                loadOptions,
            ]),
            DropdownIndicator: loadOptions && isFuzzy ? SearchIndicator : DropdownIndicator,
            LoadingIndicator,
            MenuList: useMemo(() => MenuList(menuListClassName), [menuListClassName]),
            Menu: useMemo(() => Menu(menuClassName, classes.action, actions, onClickAction), [
                actions,
                classes.action,
                menuClassName,
                onClickAction,
            ]),
            ...components,
        },
        filterOption: filterByKey ? filterKeyValue : createFilter,
        onFocus: useCallback(
            (e) => {
                setFocused(true);
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
                }
            },
            [isFuzzy, lazyOptions, loadOptions],
        ),
        onBlur: useCallback((e) => {
            setFocused(false);
        }, []),
        formatOptionLabel: useCallback(
            (data) => {
                return (
                    <div className={classes.optionLabel}>
                        {isMulti && (
                            <Checkbox
                                checked={
                                    value
                                        ? !!value.find(
                                              (item) =>
                                                  item.value === data.value || item === data.value,
                                          )
                                        : false
                                }
                            />
                        )}
                        <span>{data.label}</span>
                    </div>
                );
            },
            [classes.optionLabel, isMulti, value],
        ),
        formatGroupLabel: useCallback(
            (data) => (
                <div key={data.value} className={classes.group}>
                    {data.label}
                </div>
            ),
            [classes.group],
        ),
        loadOptions,
        openMenuOnClick: !(loadOptions && isFuzzy),
        ...override['react-select'],
    };

    const selectedOptions = useMemo(() => {
        if (!isMulti || !selectedValue || hideOptions) return null;
        return selectedValue.map((item) => (
            <Chip key={item.value} onClose={!isReadOnly && onRemove(item)}>
                {item.label}
            </Chip>
        ));
    }, [isMulti, onRemove, selectedValue, hideOptions, isReadOnly]);

    const shouldRenderSingleChip = useMemo(() => {
        if (loadOptions && isFuzzy && !isMulti && selectedValue) return true;
        return false;
    }, [loadOptions, isFuzzy, isMulti, selectedValue]);

    const renderSingleOption = useMemo(() => {
        if (!selectedValue || !selectedValue.value) return null;
        return <Chip onClose={!isReadOnly && onRemoveSingle}>{selectedValue.label}</Chip>;
    }, [onRemoveSingle, isReadOnly, selectedValue]);

    // Async/sync
    let SelectComponent = RSelect;
    if (loadOptions && isFuzzy) {
        SelectComponent = AsyncSelect;
        selectProps.loadOptions = loadOptionsCb;
    }

    return (
        <div {...rootProps} {...override.root}>
            {label && <Label {...labelProps}>{label}</Label>}
            {isBulk && !bulkEditable && (
                <Text className={classes.bulkEdit} onClick={onClickBulkEdit}>
                    {bulkEditLabel}
                </Text>
            )}
            {shouldRenderSingleChip && renderSingleOption}
            {((!shouldRenderSingleChip && !isBulk) || (isBulk && bulkEditable)) && (
                <div className={classes.formControl} {...override.formControl}>
                    <SelectComponent {...selectProps} />
                    {error && (
                        <div className={classes.error} {...override.error}>
                            {error}
                        </div>
                    )}
                    {bulkEditable && (
                        <Link className={classes.bulkCancel} onClick={onClickBulkCancel}>
                            {bulkCancelLabel}
                        </Link>
                    )}
                </div>
            )}
            {!shouldRenderSingleChip && selectedOptions && (
                <div className={classes.selectedOptions}>{selectedOptions}</div>
            )}
        </div>
    );
}

Select.overrides = ['root', 'react-select', 'menuListClassName', 'error', 'formControl', 'Label'];

Select.defaultProps = {
    labelMode: 'horizontal',
    onChange: () => {},
    value: '',
    isReadOnly: false,
    hideSelectedOptions: true,
    isClearable: true,
    overrides: {},
    isValueObject: true,
    hideOptions: false,
    filterByKey: false,
};

Select.propTypes = {
    className: PropTypes.string,
    menuListClassName: PropTypes.string,
    menuClassName: PropTypes.string,
    overrides: PropTypes.object,
    /** Async mode */
    loadOptions: PropTypes.func,
    /* Autocomplete/Search UI */
    isFuzzy: PropTypes.bool,
    onChange: PropTypes.func,
    /** Native input id */
    id: PropTypes.string,
    /** Native input name */
    name: PropTypes.string,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string,
            value: PropTypes.any,
            isDisabled: PropTypes.bool,
        }),
    ),
    value: PropTypes.any,
    label: PropTypes.string,
    labelMode: PropTypes.oneOf(['horizontal', 'vertical']),
    placeholder: PropTypes.string,
    noOptionsPlaceholder: PropTypes.string,
    loadingPlaceholder: PropTypes.string,
    isFullWidth: PropTypes.bool,
    /** Info popover */
    hint: PropTypes.string,
    /** Error will be displayed below the component with style changes */
    error: PropTypes.string,
    isRequired: PropTypes.bool,
    isReadOnly: PropTypes.bool,
    /** Hide the selected option from the menu */
    hideSelectedOptions: PropTypes.bool,
    /** Is the select value clearable */
    isClearable: PropTypes.bool,
    /** React select component customization */
    components: PropTypes.object,
    /** multiple select support */
    isMulti: PropTypes.bool,
    /** Use value as a object { label, value } or as the value */
    isValueObject: PropTypes.bool,
    /** Fixed actions added at the bottom con menu list */
    actions: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string,
            onClick: PropTypes.func,
        }),
    ),
    /** Filter by keys as well */
    filterByKey: PropTypes.bool,
};

export default React.memo(Select);
