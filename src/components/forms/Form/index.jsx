import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import { getOverrides } from '../../../utils/overrides';

import FieldControl from './FieldControl';
import Section from '../Section';
import styles from './styles';

function Form({
    overrides: overridesProp,
    className: classNameProp,
    labelMode,
    isFullwidth,
    schema,
    onChange,
    onFocus,
    onBlur,
    values,
    errors,
    ...props
}) {
    // Overrides
    const override = getOverrides(overridesProp, Form.overrides);

    const onChangeField = useCallback(
        (value, field) => {
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
        <form className={classNameProp} action="" autoComplete="off" {...override.root}>
            {schema.map((section, index) => (
                <Section
                    key={index}
                    title={section.title}
                    className={section.className}
                    {...override.Section}
                >
                    {section.fields.map((field) => (
                        <FieldControl
                            key={field.name}
                            labelMode={field.labelMode || labelMode}
                            isFullWidth={field.isFullwidth || isFullwidth}
                            field={field}
                            value={values[field.name]}
                            error={errors[field.name]}
                            onChange={onChangeField}
                            onFocus={onFocus}
                            onBlur={onBlur}
                            className={field.className}
                        />
                    ))}
                </Section>
            ))}
        </form>
    );
}

Form.overrides = ['root', 'Section'];

Form.defaultProps = {
    labelMode: 'horizontal',
    isFullWidth: false,
    errors: {},
    values: {},
    schema: [],
    override: {},
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
            className: PropTypes.string,
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
                    className: PropTypes.string,
                }),
            ),
        }),
    ).isRequired,
};

export default React.memo(withStyles(styles, { name: 'Form' })(Form));
