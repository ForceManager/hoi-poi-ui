import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import Input from '../Input';
import InputGroup from '../InputGroup';
import CheckboxGroup from '../CheckboxGroup';
import RadioGroup from '../RadioGroup';
import Select from '../Select';
import Slider from '../Slider';

const FIELD_MAP = {
    text: Input,
    inputGroup: InputGroup,
    checkboxGroup: CheckboxGroup,
    radioGroup: RadioGroup,
    select: Select,
    slider: Slider,
};

function FieldControl({
    overrides: overridesProp,
    className: classNameProp,
    labelMode,
    isFullwidth,
    field,
    onChange,
    value,
    error,
    ...props
}) {
    const onChangeField = useCallback(
        (input) => {
            const value = input && input.target ? input.target.value : input;
            onChange && onChange(value, field);
        },
        [onChange, field],
    );

    if (!field || !field.type || !FIELD_MAP[field.type]) return null;

    const Field = FIELD_MAP[field.type];

    const fieldProps = {
        ...field,
        labelMode: labelMode,
        isFullwidth: isFullwidth,
        onChange: onChangeField,
        value,
        error,
    };
    let attrs = field.attrs || {};
    return <Field {...fieldProps} {...attrs} />;
}

FieldControl.defaultProps = {
    labelMode: 'horizontal',
    isFullWidth: false,
    error: '',
    field: {},
};

FieldControl.propTypes = {
    /** Native form class */
    labelMode: PropTypes.string,
    isFullWidth: PropTypes.bool,
    value: PropTypes.any,
    error: PropTypes.string,
    field: PropTypes.shape({
        label: PropTypes.string,
        labelMode: PropTypes.string,
        isFullWidth: PropTypes.string,
        name: PropTypes.string,
        type: PropTypes.string,
        placeholder: PropTypes.string,
        hint: PropTypes.string,
        isRequired: PropTypes.bool,
        isReadOnly: PropTypes.bool,
        attrs: PropTypes.object,
    }).isRequired,
};

export default React.memo(FieldControl);
