import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { getOverrides, useClasses } from '../../../utils/overrides';

import Form from '../../forms/Form';
import FieldControl from '../Form/FieldControl';
import Icon from '../../general/Icon';

import { createUseStyles } from '../../../utils/styles';
import styles from './styles';
const useStyles = createUseStyles(styles, 'MultiplierControl');

function MultiplierControl({
    classes: classesProp,
    overrides: overridesProp,
    className: classNameProp,
    index,
    type,
    schema,
    labelMode,
    isFullWidth,
    isReadOnly,
    values,
    errors,
    customFields,
    onChange,
    onFocus,
    onBlur,
    onRemove,
    removeIconClassName,
    ...props
}) {
    const classes = useClasses(useStyles, classesProp);
    // Overrides
    const override = getOverrides(overridesProp, MultiplierControl.overrides);

    // Classes
    const removeIconClasses = classnames(removeIconClassName, {
        [classes.removeIconVertical]: labelMode === 'vertical',
    });

    const onChangeMultiplier = useCallback(
        (value) => {
            onChange && onChange(value, schema, index);
        },
        [onChange, schema, index],
    );

    const onClickRemove = useCallback(() => {
        onRemove(schema, index);
    }, [onRemove, schema, index]);

    let component;
    if (type === 'form') {
        component = (
            <Form
                className={classes.form}
                overrides={overridesProp}
                schema={schema}
                values={values}
                errors={errors}
                onChange={onChangeMultiplier}
                onFocus={onFocus}
                onBlur={onBlur}
                isFullWidth={isFullWidth}
                isReadOnly={isReadOnly}
                labelMode={labelMode}
                customFields={customFields}
                {...override.Form}
                override={override.Form}
                useNativeForm={false}
            />
        );
    } else if (type === 'field') {
        let field = { ...schema };
        field.label = index === 0 ? field.label : '';
        component = (
            <FieldControl
                labelMode={labelMode}
                isFullWidth={isFullWidth}
                isReadOnly={isReadOnly}
                field={field}
                value={values}
                error={errors}
                onChange={onChangeMultiplier}
                onFocus={onFocus}
                onBlur={onBlur}
                customFields={customFields}
                {...override.fieldControl}
            />
        );
    }
    return (
        <div className={classNameProp}>
            {component}
            {isReadOnly !== true && onRemove && (
                <Icon
                    onClick={onClickRemove}
                    className={removeIconClasses}
                    {...override.removeIcon}
                    name="trash"
                />
            )}
        </div>
    );
}

MultiplierControl.overrides = ['Form', 'fieldControl', 'removeIcon'];

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
    isReadOnly: PropTypes.bool,
    values: PropTypes.any,
    errors: PropTypes.any,
    multiplierItemClassNames: PropTypes.any,
};

export default React.memo(MultiplierControl);
