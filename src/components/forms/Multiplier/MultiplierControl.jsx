import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { getOverrides } from '../../../utils/overrides';
import Form from '../../forms/Form';
import FieldControl from '../Form/FieldControl';

function MultiplierControl({
    overrides: overridesProp,
    className: classNameProp,
    index,
    type,
    schema,
    labelMode,
    isFullWidth,
    values,
    errors,
    onChange,
    onFocus,
    onBlur,
    onRemove,
    ...props
}) {
    // Overrides
    const override = getOverrides(overridesProp, MultiplierControl.overrides);

    const onChangeMultiplier = useCallback(
        (value) => {
            onChange && onChange(value, index);
        },
        [onChange, index],
    );

    const onClickRemove = useCallback(() => {
        onRemove && onRemove(index);
    }, [onRemove, index]);

    if (type === 'form') {
        return (
            <Form
                overrides={overridesProp}
                schema={schema}
                values={values}
                errors={errors}
                onChange={onChangeMultiplier}
                onFocus={onFocus}
                onBlur={onBlur}
                onRemoveSection={onClickRemove}
                className={classNameProp}
                isFullWidth={isFullWidth}
                {...override.Form}
                override={override.Form}
                useNativeForm={false}
            />
        );
    } else if (type === 'field') {
        let field = { ...schema };
        field.label = index === 0 ? field.label : '';
        return (
            <FieldControl
                labelMode={labelMode}
                isFullWidth={isFullWidth}
                field={field}
                value={values}
                error={errors[field.name] || null}
                onChange={onChangeMultiplier}
                onFocus={onFocus}
                onBlur={onBlur}
                className={classNameProp}
                {...override.fieldControl}
            />
        );
    }
    return;
}

MultiplierControl.overrides = ['Form', 'fieldControl'];

MultiplierControl.defaultProps = {
    labelMode: 'horizontal',
    isFullWidth: false,
};

MultiplierControl.propTypes = {
    /** Native form class */
    index: PropTypes.number,
    type: PropTypes.string,
    schema: PropTypes.any,
    labelMode: PropTypes.string,
    isFullWidth: PropTypes.bool,
    values: PropTypes.any,
    errors: PropTypes.any,
    multiplierItemClassNames: PropTypes.any,
};

export default React.memo(MultiplierControl);
