import React, { Fragment, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { getOverrides, useClasses } from '../../../utils/overrides';
import Icon from '../../general/Icon';
import Label from '../Label';
import Text from '../../typography/Text';
import Link from '../../typography/Link';

import { createUseStyles } from '../../../utils/styles';
import styles from './styles';
const useStyles = createUseStyles(styles, 'Input');

function Input({
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
    autoFocus,
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
    isBulk,
    bulkEditLabel,
    bulkCancelLabel,
    onBulkEdit,
    onBulkCancel,
    ...props
}) {
    const classes = useClasses(useStyles, classesProp);
    // State
    const [focused, setFocused] = useState(false);
    const [bulkEditable, setBulkEditable] = useState(false);

    // Overrides
    const override = getOverrides(overridesProp, Input.overrides);

    // Classes
    const rootClassName = classnames(
        classes.root,
        {
            [classes.isReadOnly]: isReadOnly,
            [classes.isReadAndDuplicable]: isCopyable && isReadOnly,
            [classes[labelMode]]: labelMode,
            [classes.isFullWidth]: isFullWidth,
            [classes.focused]: focused,
            [classes.errored]: error,
            [classes.custom]: component,
            [classes.withMessage]: (error || info) && !(error && info),
            [classes.withTwoMessage]: error && info,
            [classes.withBulk]: bulkEditable,
            [classes.withMessageBulk]: (error || info) && !(error && info) && bulkEditable,
            [classes.withTwoMessageBulk]: error && info && bulkEditable,
        },
        classNameProp,
    );

    const rootProps = {
        className: rootClassName,
    };

    const labelProps = {
        className: classes.Label,
        isRequired,
        hint,
        ...override.Label,
    };

    let inputProps = {
        id,
        name,
        className: classes.input,
        type,
        placeholder,
        value,
        onChange: isReadOnly ? undefined : onChange,
        onFocus: useCallback(
            (e) => {
                setFocused(true);
                onFocus && onFocus(e);
            },
            [onFocus],
        ),
        onBlur: useCallback(
            (e) => {
                setFocused(false);
                onBlur && onBlur(e);
            },
            [onBlur],
        ),
        onKeyDown: useCallback(
            (e) => {
                if (e.key === 'Enter') {
                    onEnter && onEnter(e);
                }
            },
            [onEnter],
        ),
        autoFocus,
        ...override.input,
    };

    if (component) {
        inputProps.isReadOnly = isReadOnly;
    } else {
        inputProps.readOnly = isReadOnly;
    }

    // Remove content post component
    const postComponentClick = useCallback(() => {
        onChange && onChange();
        onBlur && onBlur();
    }, [onBlur, onChange]);

    let renderedPostComponent = postComponent;

    const copyValue = useCallback(() => {
        const textField = document.createElement('textarea');
        textField.innerText = value;
        document.body.appendChild(textField);
        textField.select();
        document.execCommand('copy');
        textField.remove();
        onCopy && onCopy();
    }, [onCopy, value]);

    const onClickBulkEdit = useCallback(() => {
        setBulkEditable(true);
        onBulkEdit && onBulkEdit();
    }, [onBulkEdit]);

    const onClickBulkCancel = useCallback(() => {
        setBulkEditable(false);
        onBulkCancel && onBulkCancel();
    }, [onBulkCancel]);

    const compIsReadOnly = <Icon name="lock" />;

    const compIsCopyable = <Icon name="duplicate" onClick={copyValue} />;

    if (value && !isReadOnly) {
        renderedPostComponent = (
            <Fragment>
                <span
                    onClick={postComponentClick}
                    className={`${classes.postCloseComponent} ${classes.isClickable} ${classes.clear}`}
                >
                    <Icon name="close" />
                </span>
                {postComponent}
            </Fragment>
        );
    }

    if (isReadOnly) {
        renderedPostComponent = (
            <span className={classes.postCloseComponent}>{compIsReadOnly}</span>
        );
    }

    if (isCopyable) {
        renderedPostComponent = (
            <Fragment>
                <span className={`${classes.postCloseComponent}`}>{compIsCopyable}</span>
                {postComponent}
            </Fragment>
        );
    }

    if (isReadOnly && isCopyable) {
        renderedPostComponent = (
            <span className={`${classes.postCloseComponent}`}>
                <span className={`${classes.isClickable} ${classes.copy}`}>{compIsCopyable}</span>
                {compIsReadOnly}
            </span>
        );
    }

    const Component = component;

    return (
        <div {...rootProps} {...override.root}>
            {label && <Label {...labelProps}>{label}</Label>}
            {isBulk && !bulkEditable && (
                <Text className={classes.bulkEdit} onClick={onClickBulkEdit}>
                    {bulkEditLabel}
                </Text>
            )}
            {(!isBulk || (isBulk && bulkEditable)) && (
                <div className={classes.formControl} {...override.formControl}>
                    {preComponent && (
                        <div className={classes.preComponent} {...override.postComponent}>
                            {preComponent}
                        </div>
                    )}
                    {!component && <input {...inputProps} />}
                    {component && <Component {...inputProps} />}
                    {renderedPostComponent && (
                        <div className={classes.postComponent} {...override.postComponent}>
                            {renderedPostComponent}
                        </div>
                    )}
                    {info && (
                        <div className={classes.info} {...override.info}>
                            {info}
                        </div>
                    )}
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
        </div>
    );
}

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
    labelMode: 'horizontal',
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

export default React.memo(Input);
