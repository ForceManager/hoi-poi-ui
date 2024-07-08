import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { getOverrides, useClasses } from '../../../utils/overrides';
import RadioBox from '../RadioBox';

import { createUseStyles } from '../../../utils/styles';
import styles from './styles';
const useStyles = createUseStyles(styles, 'RadioBoxControl');

function RadioBoxControl({
    classes: classesProp,
    overrides: overridesProp = {},
    className: classNameProp,
    value,
    onBlur,
    onChange = () => {},
    option = {},
    isReadOnly = false,
    ...props
}) {
    const classes = useClasses(useStyles, classesProp);
    // Overrides
    const override = getOverrides(overridesProp, RadioBoxControl.overrides);

    const {
        value: optionValue,
        isReadOnly: optionIsReadOnly,
        overrides: optionOverrides,
        ...optionProps
    } = option;

    const onChangeRadio = useCallback(() => {
        onChange && onChange(optionValue);
        onBlur && onBlur(optionValue);
    }, [onBlur, onChange, optionValue]);

    return (
        <div
            className={classes.radioBoxControl}
            onClick={isReadOnly || optionIsReadOnly ? undefined : onChangeRadio}
            {...override.radioBoxControl}
        >
            <RadioBox
                {...props}
                {...optionProps}
                checked={value === optionValue}
                isReadOnly={isReadOnly || optionIsReadOnly}
                overrides={{ ...overridesProp.radioBox, ...optionOverrides }}
            />
        </div>
    );
}

RadioBoxControl.propTypes = {
    overrides: PropTypes.object,
    onChange: PropTypes.func,
    option: PropTypes.shape({
        label: PropTypes.string,
        value: PropTypes.string,
    }),
    value: PropTypes.string,
    isReadOnly: PropTypes.bool,
};

export default React.memo(RadioBoxControl);
