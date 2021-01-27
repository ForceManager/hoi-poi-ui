import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { getOverrides, useClasses } from '../../../utils/overrides';

import Link from '../../typography/Link';
import InputControl from './InputControl';

import { createUseStyles } from '../../../utils/styles';
import styles from './styles';
const useStyles = createUseStyles(styles, 'InputGroup');

function InputGroup({
    children,
    classes: classesProp,
    overrides: overridesProp,
    className: classNameProp,
    id,
    name,
    type,
    onChange,
    onBlur,
    onFocus,
    onEnter,
    value,
    labelMode,
    isFullWidth,
    placeholder,
    hint,
    error,
    isRequired,
    isReadOnly,
    preComponent,
    postComponent,
    inputs,
    showInputsLabel,
    hideInputsLabel,
    ...props
}) {
    const classes = useClasses(useStyles, classesProp);
    // State && Callbacks
    const [showInputs, setShowInputs] = useState(false);
    const onLinkClick = useCallback(() => setShowInputs(!showInputs), [showInputs]);

    // Overrides
    const override = getOverrides(overridesProp, InputGroup.overrides);

    // Classes
    const rootClassName = classnames(
        classes.root,
        {
            [classes.isFullWidth]: isFullWidth,
            [classes[labelMode]]: labelMode,
        },
        classNameProp,
    );

    const inputsControlClassName = classnames(classes.inputsControl, {
        [classes.hidden]: !showInputs,
    });

    const rootProps = { className: rootClassName };

    const onChangeInput = useCallback(
        (name, inputValue) => {
            onChange &&
                onChange({
                    ...value,
                    [name]: inputValue ? inputValue : '',
                });
        },
        [onChange, value],
    );

    const onBlurInput = useCallback(
        (name, inputValue) => {
            onBlur &&
                onBlur({
                    ...value,
                    [name]: inputValue ? inputValue : '',
                });
        },
        [onBlur, value],
    );

    const onEnterInput = useCallback(
        (name, inputValue) => {
            onEnter &&
                onEnter({
                    ...value,
                    [name]: inputValue ? inputValue : '',
                });
        },
        [onEnter, value],
    );

    const onFocusInput = useCallback(
        (name, inputValue) => {
            onFocus &&
                onFocus({
                    ...value,
                    [name]: inputValue ? inputValue : '',
                });
        },
        [onFocus, value],
    );

    // Principal inputs
    const inputProps = {
        id,
        type,
        labelMode,
        isFullWidth,
        placeholder,
        hint,
        error,
        isRequired,
        isReadOnly,
        name: inputs[0].name,
        label: inputs[0].label,
        value: value[inputs[0].name],
        onChange: onChangeInput,
        onFocus: onFocusInput,
        onBlur: onBlurInput,
        onEnter: onEnterInput,
        className: classes.Input,
        ...override.Input,
    };

    // Hidden inputs
    const inputsProps = {
        type,
        labelMode,
        isFullWidth,
        placeholder,
        isReadOnly,
        className: classes.Input,
        ...override.Input,
    };

    const hiddenInputs = inputs.slice(1);

    return (
        <div {...rootProps} {...override.root}>
            <div className={classes.formControl} {...override.formControl}>
                <InputControl
                    {...inputProps}
                    placeholder={inputsProps.placeholder || inputs[0].placeholder}
                />
                <Link size="small" onClick={onLinkClick} {...override.Link}>
                    {showInputs ? hideInputsLabel : showInputsLabel}
                </Link>
            </div>
            <div className={inputsControlClassName} {...override.inputsControl}>
                {hiddenInputs.map((input) => (
                    <InputControl
                        key={input.name}
                        name={input.name}
                        label={input.label}
                        value={value[input.name]}
                        onChange={onChangeInput}
                        onBlur={onBlurInput}
                        overrides={{ Label: { classes: { text: classes.hiddenInputLabel } } }}
                        {...inputsProps}
                        placeholder={input.placeholder || inputsProps.placeholder}
                    />
                ))}
            </div>
        </div>
    );
}

InputGroup.overrides = ['root', 'Input', 'formControl', 'inputsControl', 'Link'];

InputGroup.defaultProps = {
    overrides: {},
    labelMode: 'horizontal',
    onChange: () => {},
    value: {},
    inputs: [],
    isReadOnly: false,
    showInputsLabel: 'Show inputs',
    hideInputsLabel: 'Hide inputs',
};

InputGroup.propTypes = {
    className: PropTypes.string,
    overrides: PropTypes.object,
    onChange: PropTypes.func,
    inputs: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string,
            name: PropTypes.string,
        }),
    ).isRequired,
    /** Native input id */
    id: PropTypes.string,
    /** Native input name */
    name: PropTypes.string,
    /** Native input type */
    type: PropTypes.string,
    labelMode: PropTypes.oneOf(['horizontal', 'vertical']),
    /** Info popover */
    hint: PropTypes.string,
    /** Error will be displayed below the component with style changes */
    error: PropTypes.string,
    isRequired: PropTypes.bool,
    isReadOnly: PropTypes.bool,
    /** toggle button text for show/hide inputs */
    showInputsLabel: PropTypes.string,
    hideInputsLabel: PropTypes.string,
};

export default React.memo(InputGroup);
