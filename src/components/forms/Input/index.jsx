import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import classnames from 'classnames';
import { getOverrides } from '../../../utils/overrides';
import Icon from '../../general/Icon';
import Label from '../Label';
import styles from './styles';

function Input({
    children,
    overrides: overridesProp,
    className: classNameProp,
    classes,
    onChange,
    onFocus,
    onBlur,
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
    isRequired,
    isReadOnly,
    preComponent,
    postComponent,
    component,
    ...props
}) {
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

    const inputProps = {
        id,
        name,
        className: classes.input,
        type,
        placeholder,
        value,
        onChange,
        readOnly: isReadOnly,
        onFocus: useCallback(
            (e) => {
                setFocused(true);
                onFocus && onFocus();
            },
            [onFocus],
        ),
        onBlur: useCallback(
            (e) => {
                setFocused(false);
                onBlur && onBlur();
            },
            [onBlur],
        ),
        ...override.input,
    };

    // Remove content post component
    const postComponentClick = useCallback(() => onChange(), [onChange]);
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
            <span onClick={postComponentClick} className={classes.postCloseComponent}>
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
    isRequired: PropTypes.bool,
    isReadOnly: PropTypes.bool,
    /** Component rendered at the input beginning */
    preComponent: PropTypes.any,
    /** Component rendered at the input ending */
    postComponent: PropTypes.any,
    /** Custom input component */
    component: PropTypes.any,
};

export default React.memo(withStyles(styles, { name: 'Input' })(Input));
