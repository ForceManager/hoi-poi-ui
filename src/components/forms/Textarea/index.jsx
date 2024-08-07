import React, { forwardRef, memo, useState, useCallback, useMemo, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import TextareaAutosize from 'react-textarea-autosize';
import { getOverrides, useClasses } from '../../../utils/overrides';
import Icon from '../../general/Icon';
import InputWrapper from '../components/InputWrapper';

import { createUseStyles } from '../../../utils/styles';
import styles from './styles';

const useStyles = createUseStyles(styles, 'Textarea');

const Textarea = forwardRef(
    (
        {
            children,
            classes: classesProp,
            overrides: overridesProp,
            className: classNameProp,
            onCopy,
            onFocus,
            onBlur,
            onEnter,
            id,
            name,
            placeholder,
            error,
            isFullWidth,
            label,
            isRequired,
            autofocus,
            labelMode = 'vertical',
            onChange = () => {},
            value = '',
            isReadOnly = false,
            isCopyable = false,
            isResizable = true,
            hideClear = false,
            overrides = {},
            minRows = 3,
            maxRows = 6,
            ...props
        },
        ref,
    ) => {
        const [focused, setFocused] = useState(false);

        const textAreaRef = useRef(null);

        const classes = useClasses(useStyles, classesProp);
        const override = getOverrides(overridesProp, Textarea.overrides);

        useEffect(() => {
            if (autofocus) textAreaRef.current.focus();
        }, [autofocus]);

        const rootClassName = classnames(
            classes.root,
            {
                [classes.isReadOnly]: isReadOnly,
                [classes.isReadAndDuplicable]: isCopyable && isReadOnly,
                [classes.focused]: focused,
                [classes.error]: error,
                [classes.isFullWidth]: isFullWidth,
                [classes.horizontal]: labelMode === 'horizontal',
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
                setFocused(false);
                const finalValue = e?.target?.value || '';
                onBlur && onBlur(finalValue, e);
            },
            [isReadOnly, onBlur],
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
            },
            [onEnter],
        );

        const handleOnKeyUp = useCallback((e) => {
            if (e.key === 'x' && e.ctrlKey) {
                e.target.value = '';
            }
        }, []);

        const handleOnChange = useCallback(
            (e, action) => {
                const finalValue = e?.target?.value || '';
                onChange && onChange(finalValue, e, { action });
            },
            [onChange],
        );

        let textareaProps = useMemo(
            () => ({
                id,
                name,
                className: classnames(classes.textarea, { [classes.notResizable]: !isResizable }),
                placeholder: isReadOnly ? null : placeholder,
                value: value,
                onChange: isReadOnly ? undefined : handleOnChange,
                onFocus: handleOnFocus,
                onBlur: handleOnBlur,
                onKeyDown: handleOnKeyDown,
                onKeyUp: handleOnKeyUp,
                readOnly: isReadOnly || ref,
                ref: textAreaRef,
                minRows,
                maxRows,
                ...props,
                ...override.textarea,
            }),
            [
                id,
                name,
                classes.textarea,
                classes.notResizable,
                isResizable,
                isReadOnly,
                placeholder,
                value,
                handleOnChange,
                handleOnFocus,
                handleOnBlur,
                handleOnKeyDown,
                handleOnKeyUp,
                ref,
                minRows,
                maxRows,
                props,
                override.textarea,
            ],
        );

        // Remove content post component
        const postComponentClick = useCallback(() => {
            handleOnChange(null, 'clear');
            textAreaRef.current.rows = minRows;
            textAreaRef.current.removeAttribute('style');
        }, [handleOnChange, minRows]);

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

        const compIsCopyable = useMemo(
            () => <Icon name="contentCopy" onClick={copyValue} />,
            [copyValue],
        );

        const shouldSeparate = isCopyable || isReadOnly;

        let newPostComponent = useMemo(() => {
            let postComponentsArray = [];
            if (value && !isReadOnly && !hideClear) {
                postComponentsArray.push(
                    <div
                        key="close"
                        className={`${classes.postComponentClose} ${classes.isClickable} ${classes.clear}`}
                        {...override.postComponentClose}
                    >
                        <Icon name="closeSmall" size="large" onClick={postComponentClick} />
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

            return postComponentsArray;
        }, [
            value,
            isReadOnly,
            hideClear,
            isCopyable,
            classes.postComponentClose,
            classes.isClickable,
            classes.clear,
            classes.clearSeparator,
            classes.postComponentCopy,
            classes.postComponentReadOnly,
            override.postComponentClose,
            override.clearSeparator,
            override.postComponentCopy,
            override.postComponentReadOnly,
            postComponentClick,
            shouldSeparate,
            compIsCopyable,
            compIsReadOnly,
        ]);

        return (
            <InputWrapper
                {...props}
                label={label}
                labelMode={labelMode}
                error={error}
                className={rootClassName}
                overrides={overridesProp}
                isFullWidth={isFullWidth}
                isRequired={isRequired}
            >
                <div className={classes.textareaComponents} {...override.textareaComponents}>
                    <TextareaAutosize {...textareaProps} />
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

Textarea.overrides = ['root', 'input', 'postComponent', 'textareaComponents'];

Textarea.propTypes = {
    className: PropTypes.string,
    overrides: PropTypes.object,
    label: PropTypes.string,
    labelMode: PropTypes.oneOf(['horizontal', 'vertical']),
    isFullWidth: PropTypes.bool,
    /** Info popover */
    hint: PropTypes.string,
    /** Error will be displayed below the component with style changes */
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
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
    value: PropTypes.any,
    placeholder: PropTypes.string,
    onCopy: PropTypes.func,
    isReadOnly: PropTypes.bool,
    /** In order to add a tooltip to lock icon*/
    readOnlyTooltip: PropTypes.string,
    isCopyable: PropTypes.bool,
    isResizable: PropTypes.bool,
    hideClear: PropTypes.bool,
    ref: PropTypes.func,
    /** Minimum text rows visible (initial height of the textarea) */
    minRows: PropTypes.number,
    /** Maximum rows visible for growing until scroll bars */
    maxRows: PropTypes.number,
};

export default memo(Textarea);
