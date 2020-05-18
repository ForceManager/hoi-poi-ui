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
    placeholder,
    error,
    info,
    isRequired,
    preComponent,
    postComponent,
    component,
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
            [classes[labelMode]]: labelMode,
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
        ...override.Label,
    };

    let textAreaProps = {
        id,
        name,
        className: classes.textArea,
        placeholder,
        value,
        style,
        onChange: onChange,
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
        ...override.textArea,
    };

    // Remove content post component
    const postComponentClick = useCallback(() => {
        onChange && onChange();
        onBlur && onBlur();
    }, [onBlur, onChange]);

    let renderedPostComponent = postComponent;

    if (value) {
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
                {!component && <textarea {...textAreaProps} />}
                {component && <Component {...textAreaProps} />}
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
    /** Info will be displayed below the component with style changes */
    info: PropTypes.string,
    /** Error will be displayed below the component with style changes */
    error: PropTypes.string,
    onCopy: PropTypes.func,
    isRequired: PropTypes.bool,
    /** Component rendered at the textArea beginning */
    preComponent: PropTypes.any,
    /** Component rendered at the textArea ending */
    postComponent: PropTypes.any,
    /** Custom textArea component */
    component: PropTypes.any,
};

export default React.memo(TextArea);
