import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { getOverrides, useClasses } from '../../../utils/overrides';
import Icon from '../../general/Icon';
import Label from '../Label';

import { createUseStyles } from '../../../utils/styles';
import styles from './styles';
const useStyles = createUseStyles(styles, 'Input');

function Input({
    children,
    classes: classesProp,
    overrides: overridesProp,
    className: classNameProp,
    onChange,
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
    ...props
}) {
    const classes = useClasses(useStyles, classesProp);
    // State
    const [focused, setFocused] = useState(false);

    // Overrides
    const override = getOverrides(overridesProp, Input.overrides);

    // Classes
    const rootClassName = classnames(
        classes.root,
        {
            [classes.isReadOnly]: isReadOnly,
            [classes[labelMode]]: labelMode,
            [classes.isFullWidth]: isFullWidth,
            [classes.focused]: focused,
            [classes.errored]: error,
            [classes.custom]: component,
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

    if (value && !isReadOnly) {
        renderedPostComponent = (
            <span onClick={postComponentClick} className={classes.postCloseComponent}>
                <Icon name="close" />
            </span>
        );
    }

    if (isReadOnly) {
        renderedPostComponent = (
            <span className={classes.postCloseComponent}>
                <Icon name="lock" />
            </span>
        );
    }

    const Component = component;

    return (
        <div {...rootProps} {...override.root}>
            {label && <Label {...labelProps}>{label}</Label>}
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
            </div>
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
    /** Info will be displayed below the component with style changes */
    info: PropTypes.string,
    isRequired: PropTypes.bool,
    isReadOnly: PropTypes.bool,
    /** Component rendered at the input beginning */
    preComponent: PropTypes.any,
    /** Component rendered at the input ending */
    postComponent: PropTypes.any,
    /** Custom input component */
    component: PropTypes.any,
};

export default React.memo(Input);
