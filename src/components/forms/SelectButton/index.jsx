import React, { useState, useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import classnames from 'classnames';
import useOnClickOutside from 'use-onclickoutside';
import useOnPressEsc from '../../../utils/hooks/useOnPressEsc';
import { getOverrides } from '../../../utils/overrides';
import ValueContainer from './ValueContainer';
import { checkPathTarget } from './utils';

import Select from '../Select';
import styles from './styles';

function SelectButton({
    children,
    overrides: overridesProp,
    className: classNameProp,
    classes,
    onChange,
    button,
    id,
    name,
    options,
    value,
    placeholder,
    noOptionsPlaceholder,
    hint,
    error,
    isRequired,
    isReadOnly,
    isMulti,
    components,
    hideSelectedOptions,
    actions,
    ...props
}) {
    // State
    const [isOpen, setIsOpen] = useState(false);

    // Hooks

    // Closing select
    const ref = useRef(null);
    useOnClickOutside(ref, (e) => {
        const optionEl = checkPathTarget(e.target, 'hoi-poi-select__option');
        const actionEl = checkPathTarget(e.target, 'hoi-poi-select__action');
        if (!optionEl && !actionEl) setIsOpen(false);
    });
    useOnPressEsc(() => setIsOpen(false));

    const onSelectChange = useCallback(
        (...args) => {
            onChange && onChange(...args);
            setIsOpen(false);
        },
        [onChange],
    );

    const toggleOpen = useCallback(() => {
        setIsOpen(!isOpen);
    }, [isOpen]);

    // Overrides
    const override = getOverrides(overridesProp, SelectButton.overrides);

    // Classes
    const rootClassName = classnames(classes.root, classNameProp);

    const rootProps = {
        className: rootClassName,
        ...override.root,
    };

    const selectProps = {
        id,
        name,
        hint,
        placeholder,
        options,
        value,
        hideSelectedOptions,
        noOptionsPlaceholder,
        onChange: onSelectChange,
        isMulti,
        actions,
        onClickAction: toggleOpen,
        ...override.Select,
    };

    return (
        <div {...rootProps} ref={ref}>
            <div className={classes.button} {...override.button} onClick={toggleOpen}>
                {children}
            </div>
            {isOpen && (
                <Select
                    className={classes.select}
                    menuClassName={classes.menu}
                    menuListClassName={classes.menuList}
                    {...selectProps}
                    components={{
                        ValueContainer,
                        DropdownIndicator: null,
                    }}
                    overrides={{
                        'react-select': {
                            isClearable: false,
                            autoFocus: true,
                            controlShouldRenderValue: false,
                            backspaceRemovesValue: false,
                            tabSelectsValue: false,
                            menuIsOpen: true,
                        },
                    }}
                />
            )}
        </div>
    );
}

SelectButton.overrides = ['root', 'Select', 'button'];

SelectButton.defaultProps = {
    onChange: () => {},
    value: '',
    isReadOnly: false,
    hideSelectedOptions: true,
    isClearable: true,
    isMulti: false,
};

SelectButton.propTypes = {
    className: PropTypes.string,
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
    placeholder: PropTypes.string,
    noOptionsPlaceholder: PropTypes.string,
    error: PropTypes.string,
    /** Hide the selected option from the menu */
    hideSelectedOptions: PropTypes.bool,
    /** multiple select support */
    isMulti: PropTypes.bool,
    /** Fixed actions added at the bottom of menu list */
    actions: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string,
            onClick: PropTypes.func,
        }),
    ),
};

export default React.memo(withStyles(styles, { name: 'SelectButton' })(SelectButton));
