import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import classnames from 'classnames';
import { getOverrides } from '../../../utils/overrides';
import Label from '../Label';
import CheckboxControl from './CheckboxControl';
import styles from './styles';

function CheckboxGroup({
    children,
    overrides: overridesProp,
    className: classNameProp,
    classes,
    options,
    onChange,
    value,
    label,
    labelMode,
    hint,
    error,
    isReadOnly,
    ...props
}) {
    // Overrides
    const override = getOverrides(overridesProp, CheckboxGroup.overrides);

    // Classes
    const rootClassName = classnames(
        classes.root,
        {
            [classes.isReadOnly]: isReadOnly,
            [classes[labelMode]]: labelMode,
            [classes.errored]: error,
        },
        classNameProp,
    );

    const rootProps = {
        className: rootClassName,
    };

    const labelProps = {
        className: classes.Label,
        hint,
        ...override.Label,
    };

    const onChangeCheckbox = useCallback(
        (option) => {
            onChange &&
                onChange({
                    ...value,
                    [option]: !value[option],
                });
        },
        [onChange, value],
    );

    return (
        <div {...rootProps} {...override.root}>
            {label && <Label {...labelProps}>{label}</Label>}
            <div className={classes.formControl} {...override.formControl}>
                {options.map((option) => (
                    <CheckboxControl
                        key={option.value}
                        option={option}
                        value={value[option.value]}
                        isReadOnly={isReadOnly}
                        onChange={onChangeCheckbox}
                        overrides={overridesProp}
                    />
                ))}
                {error && (
                    <div className={classes.error} {...override.error}>
                        {error}
                    </div>
                )}
            </div>
        </div>
    );
}

CheckboxGroup.overrides = [
    'root',
    'error',
    'Checkbox',
    'checkboxLabel',
    'checkboxControl',
    'formControl',
    'Label',
];

CheckboxGroup.defaultProps = {
    labelMode: 'horizontal',
    onChange: () => {},
    value: {},
    options: [],
    isReadOnly: false,
    overrides: {},
};

CheckboxGroup.propTypes = {
    className: PropTypes.string,
    overrides: PropTypes.object,
    onChange: PropTypes.func,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string,
            value: PropTypes.string,
        }),
    ),
    value: PropTypes.object,
    error: PropTypes.string,
    label: PropTypes.string,
    labelMode: PropTypes.oneOf(['horizontal', 'vertical']),
    /** Info popover */
    hint: PropTypes.string,
    isReadOnly: PropTypes.bool,
};

export default React.memo(withStyles(styles, { name: 'CheckboxGroup' })(CheckboxGroup));
