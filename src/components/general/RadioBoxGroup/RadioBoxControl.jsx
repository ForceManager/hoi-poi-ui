import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { getOverrides, useClasses } from '../../../utils/overrides';
import RadioBox from '../RadioBox';

import { createUseStyles } from '../../../utils/styles';
import styles from './styles';
const useStyles = createUseStyles(styles, 'RadioBoxControl');

function RadioBoxControl({
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
    const override = getOverrides(overridesProp, RadioBoxControl.overrides);

    const onChangeRadio = useCallback(() => {
        onChange && onChange(option.value);
        onBlur && onBlur(option.value);
    }, [onBlur, onChange, option.value]);

    return (
        <div
            className={classes.radioBoxControl}
            onClick={isReadOnly || option.isReadOnly ? undefined : onChangeRadio}
            {...override.radioBoxControl}
        >
            <RadioBox
                checked={value === option.value}
                icon={option.icon}
                title={option.title}
                text={option.text}
                isReadOnly={isReadOnly || option.isReadOnly}
                children={option.children}
                overrides={overridesProp.radioBox}
            />
        </div>
    );
}

RadioBoxControl.defaultProps = {
    onChange: () => {},
    option: {},
    isReadOnly: false,
};

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
