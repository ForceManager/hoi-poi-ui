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
    isFullWidth,
    schema,
    onChange,
    onFocus,
    onBlur,
    values,
    errors,
    customFields,
    useNativeForm,
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

    const content = schema.map((section, index) => (
        <Section
            key={index}
            title={section.title}
            className={section.className}
            isExpandable={section.isExpandable}
            {...override.Section}
        >
            {section.fields.map((field) => {
                const value = values && values[field.name] ? values[field.name] : undefined;
                return (
                    <FieldControl
                        key={field.name}
                        labelMode={field.labelMode || labelMode}
                        isFullWidth={field.isFullWidth || isFullWidth}
                        field={field}
                        value={value}
                        error={errors[field.name]}
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

Form.defaultProps = {
    labelMode: 'horizontal',
    isFullWidth: false,
    errors: {},
    values: {},
    schema: [],
    override: {},
    useNativeForm: false,
};

Form.propTypes = {
    /** Native form class */
    className: PropTypes.string,
    labelMode: PropTypes.string,
    isFullWidth: PropTypes.bool,
    values: PropTypes.object,
    errors: PropTypes.object,
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
