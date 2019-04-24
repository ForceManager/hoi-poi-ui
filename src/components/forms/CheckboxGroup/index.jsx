import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import classnames from 'classnames';
import { getOverrides } from '../../../utils/overrides';
import Checkbox from '../../forms/Checkbox';
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

    const onChange = (v) =>
        useCallback(() => {
            props.onChange({
                ...value,
                [v]: !value[v],
            });
        }, [value]);

    return (
        <div {...rootProps}>
            {label && <Label {...labelProps}>{label}</Label>}
            <div className={classes.formControl} {...override.formControl}>
                {options.map((option) => (
                    <div
                        key={option.value}
                        className={classes.checkboxControl}
                        onClick={isReadOnly ? undefined : onChange(option.value)}
                        {...override.checkboxControl}
                    >
                        <Checkbox checked={value[option.value]} isDisabled={isReadOnly} />
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
    label: PropTypes.string,
    labelMode: PropTypes.oneOf(['horizontal', 'vertical']),
    /** Info popover */
    hint: PropTypes.string,
    isReadOnly: PropTypes.bool,
};

export default React.memo(withStyles(styles, { name: 'CheckboxGroup' })(CheckboxGroup));
