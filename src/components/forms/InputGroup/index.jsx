import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import classnames from 'classnames';
import { getOverrides } from 'utils/overrides';
import Checkbox from 'components/forms/Checkbox';
import Label from '../Label';
import styles from './styles';

function CheckboxGroup({
    children,
    overrides: overridesProp,
    className: classNameProp,
    classes,
    options,
    value,
    label,
    labelMode,
    hint,
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

    const onChange = (name) =>
        useCallback(() => {
            props.onChange({
                ...value,
                [name]: !value[name],
            });
        }, [value]);

    return (
        <div {...rootProps}>
            {label && <Label {...labelProps}>{label}</Label>}
            <div className={classes.formControl} {...override.formControl}>
                {options.map((option) => (
                    <div
                        key={option.name}
                        className={classes.checkboxControl}
                        {...override.checkboxControl}
                    >
                        <Checkbox
                            onChange={onChange(option.name)}
                            checked={value[option.name]}
                            isDisabled={isReadOnly}
                        />
                        <span className={classes.checkboxLabel} {...override.checkboxLabel}>
                            {option.label}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

CheckboxGroup.overrides = ['Checkbox', 'checkboxLabel', 'checkboxControl', 'formControl', 'Label'];

CheckboxGroup.defaultProps = {
    labelMode: 'horizontal',
    onChange: () => {},
    value: {},
    options: [],
    isReadOnly: false,
};

CheckboxGroup.propTypes = {
    onChange: PropTypes.func,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string,
            name: PropTypes.string,
        }),
    ),
    value: PropTypes.object,
    label: PropTypes.string,
    labelMode: PropTypes.oneOf(['horizontal', 'vertical']),
    /** Info popover */
    hint: PropTypes.string,
    isReadOnly: PropTypes.bool,
};

export default React.memo(withStyles(styles, { name: 'CheckboxGroup' })(CheckboxGroup));
