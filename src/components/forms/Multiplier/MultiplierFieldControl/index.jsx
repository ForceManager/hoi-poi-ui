import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import Input from '../../Input';
// import InputGroup from '../../InputGroup'; // TO-DO: Add when this component is updated
// import CheckboxGroup from '../../CheckboxGroup'; // TO-DO: Add when this component is updated
import RadioGroup from '../../RadioGroup';
import Select from '../../Select';
import Slider from '../../Slider';
// import CheckboxInput from '../../CheckboxInput'; // TO-DO: Add when this component is updated
import DatePicker from '../../DatePicker';
import SwitchInput from '../../SwitchInput';

const FIELD_MAP = {
    text: Input,
    // inputGroup: InputGroup, // TO-DO: Add when this component is updated
    // checkbox: CheckboxInput, // TO-DO: Add when this component is updated
    // checkboxGroup: CheckboxGroup, // TO-DO: Add when this component is updated
    radioGroup: RadioGroup,
    select: Select,
    slider: Slider,
    date: DatePicker,
    switch: SwitchInput,
};

function MultiplierFieldControl({
    overrides: overridesProp,
    className: classNameProp,
    labelMode,
    isFullWidth,
    isReadOnly,
    field,
    onChange,
    onFocus,
    onBlur,
    onEnter,
    value,
    error,
    customFields,
    ...props
}) {
    const onChangeField = useCallback(
        (input) => {
            const value = input && input.target ? input.target.value : input;
            onChange && onChange(value, field);
        },
        [onChange, field],
    );

    const onFocusField = useCallback(
        (input) => {
            const value = input && input.target ? input.target.value : input;
            onFocus && onFocus(value, field);
        },
        [onFocus, field],
    );

    const onBlurField = useCallback(
        (input, select) => {
            const control = select || input;
            const value = control && control.target ? control.target.value : control;
            onBlur && onBlur(value, field);
        },
        [onBlur, field],
    );

    const onEnterField = useCallback(
        (input) => {
            const value = input && input.target ? input.target.value : input;
            onEnter && onEnter(value, field);
        },
        [onEnter, field],
    );

    if (!field || !field.type) return null;
    let Field = FIELD_MAP[field.type];
    let component = customFields && customFields[field.type];
    if (!Field && component) Field = Input;
    if (!Field) return null;

    const fieldProps = {
        ...field,
        labelMode,
        isFullWidth,
        isReadOnly,
        onEnter: onEnterField,
        onChange: onChangeField,
        onFocus: onFocusField,
        onBlur: onBlurField,
        className: classNameProp,
        value,
        error,
        component,
        overrides: overridesProp,
    };
    let attrs = field.attrs || {};
    return <Field {...fieldProps} {...attrs} />;
}

MultiplierFieldControl.defaultProps = {
    labelMode: 'horizontal',
    isFullWidth: false,
    error: '',
    field: {},
};

MultiplierFieldControl.propTypes = {
    /** Native form class */
    labelMode: PropTypes.string,
    isFullWidth: PropTypes.bool,
    isReadOnly: PropTypes.bool,
    value: PropTypes.any,
    error: PropTypes.any,
    className: PropTypes.string,
    customFields: PropTypes.object,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onEnter: PropTypes.func,
    field: PropTypes.shape({
        label: PropTypes.string,
        labelMode: PropTypes.string,
        isFullWidth: PropTypes.bool,
        name: PropTypes.string,
        type: PropTypes.string,
        placeholder: PropTypes.string,
        hint: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
        isRequired: PropTypes.bool,
        isReadOnly: PropTypes.bool,
        className: PropTypes.string,
        attrs: PropTypes.object,
    }).isRequired,
};

export default React.memo(MultiplierFieldControl);
