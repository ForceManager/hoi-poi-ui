import React, { Fragment, memo, useState, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { getOverrides, useClasses } from '../../../utils/overrides';
import Icon from '../../general/Icon';
import Label from '../Label';

import { createUseStyles } from '../../../utils/styles';
import styles from './styles';
const useStyles = createUseStyles(styles, 'Input');

const directionKeys = ['ArrowLeft', 'ArrowUp', 'ArrowRight', 'ArrowDown'];
const deleteKeys = ['Backspace', 'Delete'];
const integerRegEx = /^[+-]$|^[-+]?\d+$/;
const decimalRegEx = /^[+-]$|^[+-]?\d+[,.]?\d*$/;
const incompleteDecimalRegEx = /^[+-]?\d+[,.]$/;

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
        value,
        label,
        labelMode,
        isFullWidth,
        placeholder,
        hint,
        error,
        info,
        isRequired,
        isReadOnly,
        preComponent,
        postComponent,
        component,
        isCopyable,
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
                [classes[labelMode]]: labelMode,
                [classes.isFullWidth]: isFullWidth,
                [classes.focused]: focused,
                [classes.error]: error,
                [classes.custom]: component,
                [classes.withMessage]: (error || info) && !(error && info),
                [classes.withTwoMessage]: error && info,
                [classes.title]: type === 'title',
            },
            classNameProp,
        );

        const handleOnFocus = useCallback(
            (e) => {
                if (isReadOnly) return;
                setFocused(true);
                onFocus && onFocus(e);
            },
            [onFocus, isReadOnly],
        );

        const handleOnBlur = useCallback(
            (e) => {
                if (isReadOnly) return;
                if (type === 'decimal' && incompleteDecimalRegEx.test(e.target.value)) {
                }
                setFocused(false);
                onBlur && onBlur(e);
            },
            [isReadOnly, onBlur, type],
        );

        const handleOnKeyDown = useCallback(
            (e) => {
                if (e.key === 'Enter') {
                    onEnter && onEnter(e);
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

        const handleOnChange = useCallback(
            (e) => {
                onChange && onChange(e);
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
                ...override.input,
            };
        }, [
            classes,
            handleOnChange,
            handleOnFocus,
            handleOnBlur,
            handleOnKeyDown,
            id,
            isReadOnly,
            name,
            value,
            override,
            type,
            placeholder,
        ]);

        if (component) inputProps.isReadOnly = isReadOnly;
        else inputProps.readOnly = isReadOnly;

        let newPostComponent = postComponent;

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

        const compIsReadOnly = useMemo(() => <Icon name="lock" size="medium" />, []);

        const compIsCopyable = useMemo(() => <Icon name="duplicate" onClick={copyValue} />, [
            copyValue,
        ]);

        if (value && !isReadOnly) {
            newPostComponent = (
                <Fragment>
                    <div
                        onClick={postComponentClick}
                        className={`${classes.postCloseComponent} ${classes.isClickable} ${classes.clear}`}
                    >
                        <Icon name="close" />
                    </div>
                    <div
                        className={`${classes.customPostComponent}`}
                        {...override.customPostComponent}
                    >
                        {postComponent}
                    </div>
                </Fragment>
            );
        }

        if (isReadOnly) {
            newPostComponent = (
                <div className={classes.postCloseComponent} {...override.postCloseComponent}>
                    {compIsReadOnly}
                </div>
            );
        }

        if (isCopyable) {
            newPostComponent = (
                <Fragment>
                    <div
                        className={`${classes.postCloseComponent}`}
                        {...override.postCloseComponent}
                    >
                        {compIsCopyable}
                    </div>
                    <div
                        className={`${classes.customPostComponent}`}
                        {...override.customPostComponent}
                    >
                        {postComponent}
                    </div>
                </Fragment>
            );
        }

        if (isReadOnly && isCopyable) {
            newPostComponent = (
                <div className={`${classes.postCloseComponent}`} {...override.postCloseComponent}>
                    <div className={`${classes.isClickable} ${classes.copy}`} {...override.copy}>
                        {compIsCopyable}
                    </div>
                    {compIsReadOnly}
                </div>
            );
        }

        const Component = component;

        const errorInfoClassName = classnames(classes.errorInfo, {
            [classes.errorInfoSecond]: info && error,
        });

        return (
            <div className={rootClassName} {...override.root}>
                {label && (
                    <Label
                        className={classes.Label}
                        isRequired={isRequired}
                        hint={hint}
                        {...override.Label}
                    >
                        {label}
                    </Label>
                )}
                <div className={classes.formControl} {...override.formControl}>
                    {preComponent && (
                        <div className={classes.preComponent} {...override.preComponent}>
                            {preComponent}
                        </div>
                    )}
                    {!component && <input {...inputProps} />}
                    {component && <Component {...inputProps} />}
                    {newPostComponent && (
                        <div className={classes.postComponent} {...override.postComponent}>
                            {newPostComponent}
                        </div>
                    )}
                    {info && (
                        <div className={classes.info} {...override.info}>
                            {info}
                        </div>
                    )}
                    {error && (
                        <div className={errorInfoClassName} {...override.error}>
                            {error}
                        </div>
                    )}
                </div>
            </div>
        );
    },
);

Input.overrides = [
    'root',
    'input',
    'error',
    'info',
    'preComponent',
    'postComponent',
    'formControl',
    'Label',
];

Input.defaultProps = {
    labelMode: 'vertical',
    type: 'text',
    onChange: () => {},
    value: '',
    isReadOnly: false,
    isCopyable: false,
    override: {},
};

Input.propTypes = {
    className: PropTypes.string,
    overrides: PropTypes.object,
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
    label: PropTypes.string,
    labelMode: PropTypes.oneOf(['horizontal', 'vertical']),
    placeholder: PropTypes.string,
    isFullWidth: PropTypes.bool,
    /** Info popover */
    hint: PropTypes.string,
    /** Error will be displayed below the component with style changes */
    error: PropTypes.string,
    onCopy: PropTypes.func,
    /** Info will be displayed below the component with style changes */
    info: PropTypes.string,
    isRequired: PropTypes.bool,
    isReadOnly: PropTypes.bool,
    isCopyable: PropTypes.bool,
    /** Component rendered at the input beginning */
    preComponent: PropTypes.any,
    /** Component rendered at the input ending */
    postComponent: PropTypes.any,
    /** Custom input component */
    component: PropTypes.any,
};

export default Input;
