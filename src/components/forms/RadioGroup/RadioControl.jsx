import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { getOverrides, useClasses } from '../../../utils/overrides';
import Radio from '../Radio';

import { createUseStyles } from '../../../utils/styles';
import styles from './styles';
const useStyles = createUseStyles(styles, 'RadioControl');

function RadioControl({
    children,
    classes: classesProp,
    overrides: overridesProp,
    className: classNameProp,
    option,
    onChange,
    onBlur,
    value,
    isReadOnly,
    ...props
}) {
    const classes = useClasses(useStyles, classesProp);
    // Overrides
    const override = getOverrides(overridesProp, RadioControl.overrides);

    const { value: optionValue, overrides: optionOverrides, label, ...optionProps } = option;

    const onChangeRadio = useCallback(() => {
        onChange && onChange(optionValue);
        onBlur && onBlur(optionValue);
    }, [onBlur, onChange, optionValue]);

    return (
        <div
            className={classes.radioControl}
            onClick={isReadOnly ? undefined : onChangeRadio}
            {...override.radioControl}
        >
            <Radio
                {...props}
                {...optionProps}
                checked={value === optionValue}
                isDisabled={isReadOnly}
                overrides={{ ...overridesProp.radio, ...optionOverrides }}
            />
            <span className={classes.radioLabel} {...override.radioLabel}>
                {label}
            </span>
        </div>
    );
}

RadioControl.overrides = ['radioLabel', 'radioControl'];

RadioControl.defaultProps = {
    onChange: () => {},
    option: {},
    isReadOnly: false,
};

RadioControl.propTypes = {
    overrides: PropTypes.object,
    onChange: PropTypes.func,
    option: PropTypes.shape({
        label: PropTypes.string,
        value: PropTypes.string,
    }),
    value: PropTypes.string,
    isReadOnly: PropTypes.bool,
};

export default React.memo(RadioControl);
