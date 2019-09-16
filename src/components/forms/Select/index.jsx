import React, { useState, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import classnames from 'classnames';
import { default as RSelect } from 'react-select';
import AsyncSelect from 'react-select/async';

import { getOverrides } from '../../../utils/overrides';
import { createFilter } from './utils'; // Local utils

import ClearIndicator from './ClearIndicator';
import DropdownIndicator from './DropdownIndicator';
import SearchIndicator from './SearchIndicator';
import LoadingIndicator from './LoadingIndicator';
import Menu from './Menu';
import MenuList from './MenuList';
import Checkbox from '../../general/Checkbox';
import Chip from '../../general/Chip';

import Label from '../Label';
import styles from './styles';

function Select({
    children,
    overrides: overridesProp,
    className: classNameProp,
    classes,
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
    hideSelectedOptions,
    actions,
    onClickAction, // private props
    isMulti,
    loadOptions,
    loadingMessage,
    loadingPlaceholder,
    ...props
}) {
    // State
    const [focused, setFocused] = useState(false);

    // Overrides
    const override = getOverrides(overridesProp, Select.overrides);

    // Classes
    const rootClassName = classnames(
        classes.root,
        {
            [classes.isReadOnly]: isReadOnly,
            [classes[labelMode]]: labelMode,
            [classes.isFullWidth]: isFullWidth,
            [classes.focused]: focused,
            [classes.errored]: error,
            [classes.async]: loadOptions,
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

    const onRemove = useCallback(
        (itemForRemove) => {
            const result = value.filter((item) => item.value !== itemForRemove.value);
            onChange && onChange(result, options);
            onBlur && onBlur(result, options);
        },
        [onBlur, onChange, options, value],
    );

    const selectProps = {
        id,
        name,
        className: selectClassName,
        classNamePrefix: 'hoi-poi-select',
        placeholder,
        options,
        value: isMulti ? [] : value,
        isMulti,
        onChange: useCallback(
            (data, action) => {
                if (isMulti) {
                    let hasValue = !!(value || []).find((item) => item.value === data[0].value);
                    if (hasValue) {
                        data = value.filter((item) => item.value !== data[0].value);
                    } else {
                        data = [...value, ...data];
                    }
                }
                onChange && onChange(data, options);
                onBlur && onBlur(data, options);
            },
            [isMulti, onBlur, onChange, options, value],
        ),
        isDisabled: isReadOnly,
        isClearable: isMulti ? false : isClearable,
        autoFocus: focused,
        hideSelectedOptions: isMulti ? true : hideSelectedOptions,
        closeMenuOnSelect: isMulti ? false : true,
        noOptionsMessage: useCallback(() => noOptionsPlaceholder, [noOptionsPlaceholder]),
        loadingMessage: useCallback(() => loadingPlaceholder, [loadingPlaceholder]),
        getOptionValue: useCallback(({ value }) => value, []),
        menuPlacement: 'auto',
        menuPortalTarget: document.body,
        styles: {
            menuPortal: (base) => ({ ...base, zIndex: 9999 }),
        },
        components: {
            ClearIndicator: loadOptions ? null : ClearIndicator,
            DropdownIndicator: loadOptions ? SearchIndicator : DropdownIndicator,
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
        filterOption: createFilter,
        onFocus: useCallback((e) => {
            setFocused(true);
        }, []),
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
                                        ? !!value.find((item) => item.value === data.value)
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
        loadOptions: focused ? loadOptions : null,
        defaultOptions: !!loadOptions,
        openMenuOnClick: false,
        ...override['react-select'],
    };

    const selectedOptions = useMemo(() => {
        if (!isMulti || !value) return null;
        return value.map((item) => <Chip onClose={() => onRemove(item)}>{item.label}</Chip>);
    }, [isMulti, onRemove, value]);

    // Async/sync
    let SelectComponent = RSelect;
    if (loadOptions) {
        SelectComponent = AsyncSelect;
    }

    return (
        <div {...rootProps} {...override.root}>
            {label && <Label {...labelProps}>{label}</Label>}
            <div className={classes.formControl} {...override.formControl}>
                <SelectComponent {...selectProps} />
                {error && (
                    <div className={classes.error} {...override.error}>
                        {error}
                    </div>
                )}
            </div>
            {selectedOptions && <div className={classes.selectedOptions}>{selectedOptions}</div>}
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
};

Select.propTypes = {
    className: PropTypes.string,
    menuListClassName: PropTypes.string,
    menuClassName: PropTypes.string,
    overrides: PropTypes.object,
    /** Async mode */
    loadOptions: PropTypes.func,
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
    /** Fixed actions added at the bottom con menu list */
    actions: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string,
            onClick: PropTypes.func,
        }),
    ),
};

export default React.memo(withStyles(styles, { name: 'Select' })(Select));
