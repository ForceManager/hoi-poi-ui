import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { getOverrides } from '../../../utils/overrides';

import FieldControl from '../components/FieldControl';
import Section from '../../general/Section';

function Form({
    overrides: overridesProp,
    className: classNameProp,
    isReadOnly,
    onSubmit,
    onChange,
    onFocus,
    onBlur,
    customFields,
    orientation,
    labelMode = 'horizontal',
    isFullWidth = false,
    errors = {},
    values = {},
    schema = [],
    useNativeForm = false,
}) {
    // Overrides
    const override = getOverrides(overridesProp, Form.overrides);

    const onChangeField = useCallback(
        (value, field) => {
            let newValues = {
                ...values,
                [field.name]: value,
            };

            if (field.type === 'inputGroup') {
                newValues = {
                    ...values,
                    ...value,
                };
            }

            onChange && onChange(newValues, field, value);
        },
        [values, onChange],
    );

    const onFocusField = useCallback(
        (value, field) => {
            onFocus &&
                onFocus(
                    {
                        ...values,
                        [field.name]: value,
                    },
                    field,
                    value,
                );
        },
        [onFocus, values],
    );

    const onBlurField = useCallback(
        (value, field) => {
            onBlur &&
                onBlur(
                    {
                        ...values,
                        [field.name]: value,
                    },
                    field,
                    value,
                );
        },
        [onBlur, values],
    );

    const onEnterField = useCallback(
        (value, field) => {
            onSubmit &&
                onSubmit(
                    {
                        ...values,
                        [field.name]: value,
                    },
                    field,
                    value,
                );
        },
        [onSubmit, values],
    );

    const content = schema.map((section, index) => (
        <Section
            key={index}
            title={section.title}
            className={section.className}
            isExpandable={section.isExpandable}
            orientation={orientation}
            {...override.Section}
        >
            {section.fields.map((field) => {
                let value = values && values[field.name] ? values[field.name] : undefined;
                if (field.type === 'inputGroup') {
                    value = values;
                }
                return (
                    <FieldControl
                        key={field.name}
                        labelMode={field.labelMode || labelMode}
                        isFullWidth={field.isFullWidth || isFullWidth}
                        isReadOnly={isReadOnly || field.isReadOnly}
                        field={field}
                        value={value}
                        error={errors[field.name]}
                        onEnter={onEnterField}
                        onChange={onChangeField}
                        onFocus={onFocusField}
                        onBlur={onBlurField}
                        className={field.className}
                        customFields={customFields}
                        overrides={overridesProp}
                    />
                );
            })}
        </Section>
    ));

    const withForm = (children) => (
        <form className={classNameProp} action="" autoComplete="off" {...override.root}>
            {children}
        </form>
    );

    const withDiv = (children) => (
        <div className={classNameProp} {...override.root}>
            {children}
        </div>
    );

    if (useNativeForm) return withForm(content);
    return withDiv(content);
}

Form.overrides = ['root', 'Section'];

Form.propTypes = {
    /** Native form class */
    className: PropTypes.string,
    labelMode: PropTypes.string,
    isFullWidth: PropTypes.bool,
    isReadOnly: PropTypes.bool,
    values: PropTypes.object,
    errors: PropTypes.object,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    onSubmit: PropTypes.func,
    customFields: PropTypes.object,
    useNativeForm: PropTypes.bool,
    schema: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string,
            className: PropTypes.string,
            isExpandable: PropTypes.bool,
            fields: PropTypes.arrayOf(
                PropTypes.shape({
                    label: PropTypes.string,
                    labelMode: PropTypes.string,
                    isFullWidth: PropTypes.bool,
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
    orientation: PropTypes.oneOf(['horizontal', 'vertical']),
};

export default React.memo(Form);
