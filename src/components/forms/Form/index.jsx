import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import { getOverrides } from '../../../utils/overrides';

import Section from '../Section';
import Input from '../Input';
import InputGroup from '../InputGroup';
import CheckboxGroup from '../CheckboxGroup';
import RadioGroup from '../RadioGroup';
import Select from '../Select';
import Slider from '../Slider';

import styles from './styles';

const FIELD_MAP = {
    text: Input,
    inputGroup: InputGroup,
    checkboxGroup: CheckboxGroup,
    radioGroup: RadioGroup,
    select: Select,
    slider: Slider,
};

function Form({
    overrides: overridesProp,
    className: classNameProp,
    labelMode,
    isFullwidth,
    schema,
    onChange,
    values,
    errors,
    ...props
}) {
    // Overrides
    const override = getOverrides(overridesProp, Form.overrides);

    const onChangeField = (field) =>
        useCallback(
            (input) => {
                const value = input && input.target ? input.target.value : input;
                onChange &&
                    onChange(
                        {
                            ...values,
                            [field.name]: value,
                        },
                        field,
                        value,
                    );
            },
            [values, onChange],
        );

    return (
        <form className={classNameProp} action="" autoComplete="off" {...override.form}>
            {schema.map((section, index) => (
                <Section key={index} title={section.title} {...override.Section}>
                    {section.fields.map((field) => {
                        if (!field || !field.type || !FIELD_MAP[field.type]) return null;
                        const Field = FIELD_MAP[field.type];
                        const props = {
                            ...field,
                            key: field.name,
                            labelMode: field.labelMode || labelMode,
                            isFullwidth: field.isFullwidth || isFullwidth,
                            onChange: onChangeField(field),
                            value: values[field.name],
                            error: errors[field.name],
                        };
                        let attrs = field.attrs || {};
                        return <Field {...props} {...attrs} />;
                    })}
                </Section>
            ))}
        </form>
    );
}

Form.overrides = ['form', 'Section'];

Form.defaultProps = {
    labelMode: 'horizontal',
    isFullWidth: false,
    errors: {},
    values: {},
    schema: [],
};

Form.propTypes = {
    /** Native form class */
    className: PropTypes.string,
    labelMode: PropTypes.string,
    isFullWidth: PropTypes.bool,
    values: PropTypes.object,
    errors: PropTypes.object,
    schema: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string,
            fields: PropTypes.arrayOf(
                PropTypes.shape({
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
                }),
            ),
        }),
    ).isRequired,
};

export default React.memo(withStyles(styles, { name: 'Form' })(Form));
