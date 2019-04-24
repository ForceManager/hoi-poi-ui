import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { withStyles, Section, Input, InputGroup, CheckboxGroup, Select, Slider } from 'hoi-poi-ui';
import styles from './styles';

const FIELD_MAP = {
    text: Input,
    inputGroup: InputGroup,
    checkboxGroup: CheckboxGroup,
    select: Select,
    slider: Slider,
};

function Form({ labelMode, isFullwidth, schema, values, errors, ...props }) {
    const onChange = (field) =>
        useCallback((input) => {
            const value = input && input.target ? input.target.value : input;
            props.onChange &&
                props.onChange(
                    {
                        ...values,
                        [field.name]: value,
                    },
                    field,
                    value,
                );
        }, []);

    return (
        <form action="" autoComplete="off">
            {schema.map((section, index) => (
                <Section key={index} title={section.title}>
                    {section.fields.map((field) => {
                        if (!field || !field.type || !FIELD_MAP[field.type]) return null;
                        const Field = FIELD_MAP[field.type];
                        const props = {
                            ...field,
                            key: field.name,
                            labelMode: field.labelMode || labelMode,
                            isFullwidth: field.isFullwidth || isFullwidth,
                            onChange: onChange(field),
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

Form.defaultProps = {
    labelMode: 'horizontal',
    isFullWidth: false,
    errors: {},
    values: {},
    schema: [],
};

Form.propTypes = {
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
                    error: PropTypes.string,
                    attrs: PropTypes.object,
                }),
            ),
        }),
    ).isRequired,
};

export default React.memo(withStyles(styles, { name: 'Form' })(Form));
