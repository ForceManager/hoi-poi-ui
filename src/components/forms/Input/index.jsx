import React, { memo, useState, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { getOverrides, useClasses } from '../../../utils/overrides';
import Icon from '../../general/Icon';
import InputWrapper from '../components/InputWrapper';

import { createUseStyles } from '../../../utils/styles';
import styles from './styles';
const useStyles = createUseStyles(styles, 'Input');

const directionKeys = ['ArrowLeft', 'ArrowUp', 'ArrowRight', 'ArrowDown'];
const deleteKeys = ['Backspace', 'Delete'];
const integerRegEx = /^[+-]$|^[-+]?\d+$/;
const decimalRegEx = /^[+-]$|^[+-]?\d+[,.]?\d*$/;

const types = {
    integer: 'text',
    decimal: 'text',
    title: 'text',
};

const Input = memo(
    ({
        children,
        classes: classesProp,
        overrides: overridesProp,
        className: classNameProp,
        onChange,
        onCopy,
        onFocus,
        onBlur,
        onEnter,
        id,
        name,
        type,
        numberDecimals,
        value,
        placeholder,
        error,
        isReadOnly,
        isFullWidth,
        preComponent,
        postComponent,
        component,
        isCopyable,
        hideClear,
        ...props
    }) => {
        const [focused, setFocused] = useState(false);

        const classes = useClasses(useStyles, classesProp);
        const override = getOverrides(overridesProp, Input.overrides);

        const rootClassName = classnames(
            classes.root,
            {
                [classes.isReadOnly]: isReadOnly,
                [classes.isReadAndDuplicable]: isCopyable && isReadOnly,
                [classes.focused]: focused,
                [classes.error]: error,
                [classes.custom]: component,
                [classes.title]: type === 'title',
                [classes.isFullWidth]: isFullWidth,
            },
            classNameProp,
        );

        const handleOnFocus = useCallback(
            (e) => {
                if (isReadOnly) return;
                setFocused(true);
                const finalValue = e.target.value || '';
                onFocus && onFocus(finalValue, e);
            },
            [onFocus, isReadOnly],
        );

        const handleOnBlur = useCallback(
            (e) => {
                if (isReadOnly) return;
                if (type === 'integer' && e.target.value) {
                    if (!integerRegEx.test(e.target.value) || isNaN(parseInt(e.target.value, 10))) {
                        e.target.value = '';
                    }
                }

                if (type === 'decimal' && e.target.value) {
                    if (!decimalRegEx.test(e.target.value) || isNaN(parseFloat(e.target.value))) {
                        e.target.value = '';
                    } else {
                        const hasComa = e.target.value.includes(',');

                        let newValue = parseFloat(e.target.value.replace(',', '.')).toFixed(
                            numberDecimals,
                        );

                        if (hasComa) newValue = newValue.toString().replace('.', ',');
                        e.target.value = newValue;
                    }
                }

                setFocused(false);
                const finalValue = e.target.value || '';
                onBlur && onBlur(finalValue, e);
            },
            [isReadOnly, onBlur, type, numberDecimals],
        );

        const handleOnKeyDown = useCallback(
            (e) => {
                if (e.key === 'Enter') {
                    const finalValue = e.target.value || '';
                    onEnter && onEnter(finalValue, e);
                }

                if (
                    (e.key === 'v' && e.ctrlKey) ||
                    (e.key === 'c' && e.ctrlKey) ||
                    (e.key === 'x' && e.ctrlKey) ||
                    e.key === 'Tab'
                ) {
                    return;
                }

                const newValue = `${e.target.value}${e.key}`;

                if (type === 'integer') {
                    if (directionKeys.includes(e.key)) return;
                    else if (deleteKeys.includes(e.key)) return;
                    else if (integerRegEx.test(newValue)) return;
                    else {
                        e.preventDefault();
                        return;
                    }
                }

                if (type === 'decimal') {
                    if (directionKeys.includes(e.key)) return;
                    else if (deleteKeys.includes(e.key)) return;
                    else if (decimalRegEx.test(newValue)) return;
                    else {
                        e.preventDefault();
                        return;
                    }
                }
            },
            [onEnter, type],
        );

        const handleOnKeyUp = useCallback((e) => {
            if (e.key === 'x' && e.ctrlKey) {
                e.target.value = '';
            }
        }, []);

        const handleOnChange = useCallback(
            (e) => {
                const finalValue = e.target.value || '';
                onChange && onChange(finalValue, e);
            },
            [onChange],
        );

        let inputProps = useMemo(() => {
            return {
                id,
                name,
                className: classes.input,
                type: types[type] || type,
                placeholder,
                value: value,
                onChange: isReadOnly ? undefined : handleOnChange,
                onFocus: handleOnFocus,
                onBlur: handleOnBlur,
                onKeyDown: handleOnKeyDown,
                onKeyUp: handleOnKeyUp,
                ...override.input,
            };
        }, [
            id,
            name,
            classes.input,
            type,
            placeholder,
            value,
            isReadOnly,
            handleOnChange,
            handleOnFocus,
            handleOnBlur,
            handleOnKeyDown,
            handleOnKeyUp,
            override.input,
        ]);

        if (component) {
            inputProps.isReadOnly = isReadOnly;
            if (isFullWidth) inputProps.isFullWidth = isFullWidth;
        } else inputProps.readOnly = isReadOnly;

        // Remove content post component
        const postComponentClick = useCallback(() => {
            onChange && onChange();
            onBlur && onBlur();
        }, [onBlur, onChange]);

        const copyValue = useCallback(() => {
            const textField = document.createElement('textarea');
            textField.innerText = value;
            document.body.appendChild(textField);
            textField.select();
            document.execCommand('copy');
            textField.remove();
            onCopy && onCopy();
        }, [onCopy, value]);

        const compIsReadOnly = useMemo(() => <Icon name="lockOutline" size="medium" />, []);

        const compIsCopyable = useMemo(() => <Icon name="contentCopy" onClick={copyValue} />, [
            copyValue,
        ]);

        const shouldSeparate = isCopyable || isReadOnly || postComponent;

        let newPostComponent = useMemo(() => {
            let postComponentsArray = [];
            if (value && !isReadOnly && !hideClear) {
                postComponentsArray.push(
                    <div
                        key="close"
                        className={`${classes.postComponentClose} ${classes.isClickable} ${classes.clear}`}
                        {...override.postComponentClose}
                    >
                        <Icon
                            name={type === 'title' ? 'close' : 'closeSmall'}
                            size="large"
                            onClick={postComponentClick}
                        />
                        {shouldSeparate && (
                            <div className={classes.clearSeparator} {...override.clearSeparator} />
                        )}
                    </div>,
                );
            }

            if (isCopyable) {
                postComponentsArray.push(
                    <div
                        key="copy"
                        className={`${classes.postComponentCopy}`}
                        {...override.postComponentCopy}
                    >
                        {compIsCopyable}
                    </div>,
                );
            }

            if (isReadOnly) {
                postComponentsArray.push(
                    <div
                        key="readOnly"
                        className={classes.postComponentReadOnly}
                        {...override.postComponentReadOnly}
                    >
                        {compIsReadOnly}
                    </div>,
                );
            }

            if (postComponent) {
                postComponentsArray.push(
                    <div
                        key="custom"
                        className={`${classes.customPostComponent}`}
                        {...override.customPostComponent}
                    >
                        {postComponent}
                    </div>,
                );
            }
            return postComponentsArray;
        }, [
            value,
            isReadOnly,
            hideClear,
            isCopyable,
            postComponent,
            classes.postComponentClose,
            classes.isClickable,
            classes.clear,
            classes.clearSeparator,
            classes.postComponentCopy,
            classes.postComponentReadOnly,
            classes.customPostComponent,
            override.postComponentClose,
            override.clearSeparator,
            override.postComponentCopy,
            override.postComponentReadOnly,
            override.customPostComponent,
            type,
            postComponentClick,
            shouldSeparate,
            compIsCopyable,
            compIsReadOnly,
        ]);

        const Component = component;

        return (
            <InputWrapper
                {...props}
                error={error}
                className={rootClassName}
                overrides={overridesProp}
                isFullWidth={isFullWidth}
            >
                <div className={classes.inputComponents} {...override.inputComponents}>
                    {preComponent && (
                        <div className={classes.preComponent} {...override.preComponent}>
                            {preComponent}
                        </div>
                    )}
                    {!component && <input {...inputProps} />}
                    {component && <Component {...inputProps} />}
                    {newPostComponent.length > 0 && (
                        <div className={classes.postComponent} {...override.postComponent}>
                            {newPostComponent}
                        </div>
                    )}
                </div>
            </InputWrapper>
        );
    },
);

Input.overrides = ['root', 'input', 'preComponent', 'postComponent', 'inputComponents'];

Input.defaultProps = {
    ...InputWrapper.defaultProps,
    type: 'text',
    onChange: () => {},
    value: '',
    isReadOnly: false,
    isCopyable: false,
    hideClear: false,
    numberDecimals: 2,
    overrides: {},
};

Input.propTypes = {
    className: PropTypes.string,
    overrides: PropTypes.object,
    label: PropTypes.string,
    labelMode: PropTypes.oneOf(['horizontal', 'vertical']),
    isFullWidth: PropTypes.bool,
    /** Info popover */
    hint: PropTypes.string,
    /** Error will be displayed below the component with style changes */
    error: PropTypes.string,
    /** Info will be displayed below the component with style changes */
    info: PropTypes.string,
    isRequired: PropTypes.bool,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onEnter: PropTypes.func,
    /** Native input id */
    id: PropTypes.string,
    /** Native input name */
    name: PropTypes.string,
    /** Native input type */
    type: PropTypes.string,
    value: PropTypes.any,
    placeholder: PropTypes.string,
    numberDecimals: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onCopy: PropTypes.func,
    isReadOnly: PropTypes.bool,
    isCopyable: PropTypes.bool,
    hideClear: PropTypes.bool,
    /** Component rendered at the input beginning */
    preComponent: PropTypes.any,
    /** Component rendered at the input ending */
    postComponent: PropTypes.any,
    /** Custom input component */
    component: PropTypes.any,
};

export default Input;
