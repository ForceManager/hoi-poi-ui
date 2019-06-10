import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import classnames from 'classnames';
import { getOverrides } from '../../../utils/overrides';

import Form from '../../forms/Form';
import FieldControl from '../Form/FieldControl';
import Icon from '../../general/Icon';
import styles from './styles';

function MultiplierControl({
    overrides: overridesProp,
    className: classNameProp,
    classes,
    index,
    type,
    schema,
    labelMode,
    isFullWidth,
    values,
    errors,
    customFields,
    onChange,
    onFocus,
    onBlur,
    onRemove,
    ...props
}) {
    // Overrides
    const override = getOverrides(overridesProp, MultiplierControl.overrides);

    // Classes
    const removeIconClasses = classnames(classes.removeIcon, {
        [classes.removeIconVertical]: labelMode === 'vertical',
    });

    const onChangeMultiplier = useCallback(
        (value) => {
            onChange && onChange(value, index);
        },
        [onChange, index],
    );

    const onClickRemove = useCallback(() => {
        onRemove(index);
    }, [onRemove, index]);

    const showRemove = onRemove && index > 0;

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
                field={field}
                value={values}
                error={errors[field.name] || null}
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
            {showRemove && (
                <Icon
                    onClick={onClickRemove}
                    className={removeIconClasses}
                    {...override.removeIcon}
                    name="close"
                    size="small"
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
    values: PropTypes.any,
    errors: PropTypes.any,
    multiplierItemClassNames: PropTypes.any,
};

export default React.memo(withStyles(styles, { name: 'MultiplierControl' })(MultiplierControl));
