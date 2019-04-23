import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import classnames from 'classnames';
import { getOverrides } from '../../../utils/overrides';
import Radio from '../Radio';
import Label from '../Label';
import styles from './styles';

function RadioGroup({
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
    const override = getOverrides(overridesProp, RadioGroup.overrides);

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
            props.onChange(name);
        }, [value]);

    return (
        <div {...rootProps}>
            {label && <Label {...labelProps}>{label}</Label>}
            <div className={classes.formControl} {...override.formControl}>
                {options.map((option) => (
                    <div
                        key={option.name}
                        className={classes.radioControl}
                        onClick={isReadOnly ? undefined : onChange(option.name)}
                        {...override.radioControl}
                    >
                        <Radio checked={value === option.name} isDisabled={isReadOnly} />
                        <span className={classes.radioLabel} {...override.radioLabel}>
                            {option.label}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

RadioGroup.overrides = ['Radio', 'radioLabel', 'radioControl', 'formControl', 'Label'];

RadioGroup.defaultProps = {
    labelMode: 'horizontal',
    onChange: () => {},
    value: null,
    options: [],
    isReadOnly: false,
};

RadioGroup.propTypes = {
    className: PropTypes.string,
    overrides: PropTypes.object,
    onChange: PropTypes.func,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string,
            name: PropTypes.string,
        }),
    ),
    value: PropTypes.string,
    label: PropTypes.string,
    labelMode: PropTypes.oneOf(['horizontal', 'vertical']),
    /** Info popover */
    hint: PropTypes.string,
    isReadOnly: PropTypes.bool,
};

export default React.memo(withStyles(styles, { name: 'RadioGroup' })(RadioGroup));
