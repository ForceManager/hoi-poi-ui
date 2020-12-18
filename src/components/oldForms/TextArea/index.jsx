import React, { Fragment, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { getOverrides, useClasses } from '../../../utils/overrides';
import Icon from '../../general/Icon';
import Label from '../Label';

import { createUseStyles } from '../../../utils/styles';
import styles from './styles';

const useStyles = createUseStyles(styles, 'TextArea');

function TextArea({
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
    isCopyable,
    style,
    ...props
}) {
    const classes = useClasses(useStyles, classesProp);
    // State
    const [focused, setFocused] = useState(false);

    // Overrides
    const override = getOverrides(overridesProp, TextArea.overrides);

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
            [classes.withMessage]: (error || info) && !(error && info),
            [classes.withTwoMessage]: error && info,
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

    let textAreaProps = {
        id,
        name,
        className: classes.textArea,
        placeholder,
        value,
        style,
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
        ...override.textArea,
    };

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

    const compIsReadOnly = <Icon name="lock" />;

    const compIsCopyable = <Icon name="duplicate" onClick={copyValue} />;

    if (value && !isReadOnly) {
        renderedPostComponent = (
            <Fragment>
                <span
                    onClick={postComponentClick}
                    className={`${classes.postCloseComponent} ${classes.isClickable}`}
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
                <span className={classes.isClickable}>{compIsCopyable}</span>
                {compIsReadOnly}
            </span>
        );
    }

    return (
        <div {...rootProps} {...override.root}>
            {label && <Label {...labelProps}>{label}</Label>}
            <div className={classes.formControl} {...override.formControl}>
                {preComponent && (
                    <div className={classes.preComponent} {...override.postComponent}>
                        {preComponent}
                    </div>
                )}
                <textarea {...textAreaProps} />
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
            </div>
        </div>
    );
}

TextArea.overrides = [
    'root',
    'textArea',
    'error',
    'info',
    'preComponent',
    'postComponent',
    'formControl',
    'Label',
];

TextArea.defaultProps = {
    labelMode: 'horizontal',
    onChange: () => {},
    value: '',
    isReadOnly: false,
    isCopyable: false,
    override: {},
};

TextArea.propTypes = {
    className: PropTypes.string,
    overrides: PropTypes.object,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onEnter: PropTypes.func,
    /** Native textArea id */
    id: PropTypes.string,
    /** Native textArea name */
    name: PropTypes.string,
    value: PropTypes.any,
    label: PropTypes.string,
    labelMode: PropTypes.oneOf(['horizontal', 'vertical']),
    placeholder: PropTypes.string,
    isFullWidth: PropTypes.bool,
    /** Info popover */
    hint: PropTypes.string,
    /** Error will be displayed below the component with style changes */
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    onCopy: PropTypes.func,
    /** Info will be displayed below the component with style changes */
    info: PropTypes.string,
    isRequired: PropTypes.bool,
    isReadOnly: PropTypes.bool,
    isCopyable: PropTypes.bool,
    /** Component rendered at the textArea beginning */
    preComponent: PropTypes.any,
    /** Component rendered at the textArea ending */
    postComponent: PropTypes.any,
};

export default React.memo(TextArea);
