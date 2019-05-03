import React, { useState, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import classnames from 'classnames';
import { default as RSelect } from 'react-select';

import { getOverrides } from '../../../utils/overrides';
import { createFilter } from './utils'; // Local utils

import ClearIndicator from './ClearIndicator';
import DropdownIndicator from './DropdownIndicator';
import Menu from './Menu';
import MenuList from './MenuList';

import Label from '../Label';
import styles from './styles';

function Select({
    children,
    overrides: overridesProp,
    className: classNameProp,
    classes,
    onChange,
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
        },
        classNameProp,
    );

    const menuListClassName = classnames(classes.menuList, props.menuListClassName);
    const menuClassName = classnames(classes.menu, props.menuClassName);

    const rootProps = {
        className: rootClassName,
    };

    const labelProps = {
        className: classes.Label,
        isRequired,
        hint,
        ...override.Label,
    };

    const selectProps = {
        id,
        name,
        className: classes.select,
        classNamePrefix: 'hoi-poi-select',
        placeholder,
        options,
        value,
        onChange,
        isDisabled: isReadOnly,
        isClearable,
        hideSelectedOptions,
        noOptionsMessage: useCallback(() => noOptionsPlaceholder, []),
        getOptionValue: useCallback(({ value }) => value, []),
        menuPlacement: 'auto',
        menuPortalTarget: document.body,
        styles: {
            menuPortal: (base) => ({ ...base, zIndex: 9999 }),
        },
        components: {
            ClearIndicator,
            DropdownIndicator,
            MenuList: useMemo(() => MenuList(menuListClassName), []),
            Menu: useMemo(() => Menu(menuClassName, classes.action, actions, onClickAction), []),
            ...components,
        },
        filterOption: createFilter,
        onFocus: useCallback((e) => {
            setFocused(true);
        }, []),
        onBlur: useCallback((e) => {
            setFocused(false);
        }, []),
        formatGroupLabel: useCallback(
            (data) => <div className={classes.group}>{data.label}</div>,
            [],
        ),
        ...override['react-select'],
    };

    // Async/sync
    let SelectComponent = RSelect;

    return (
        <div {...rootProps}>
            {label && <Label {...labelProps}>{label}</Label>}
            <div className={classes.formControl} {...override.formControl}>
                <SelectComponent {...selectProps} />
                {error && (
                    <div className={classes.error} {...override.error}>
                        {error}
                    </div>
                )}
            </div>
        </div>
    );
}

Select.overrides = ['react-select', 'menuListClassName', 'error', 'formControl', 'Label'];

Select.defaultProps = {
    labelMode: 'horizontal',
    onChange: () => {},
    value: '',
    isReadOnly: false,
    hideSelectedOptions: true,
    isClearable: true,
};

Select.propTypes = {
    className: PropTypes.string,
    menuListClassName: PropTypes.string,
    menuClassName: PropTypes.string,
    overrides: PropTypes.object,
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
