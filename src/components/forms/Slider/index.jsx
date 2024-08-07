import React, { useState, useCallback, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import RCSlider, { Range } from 'rc-slider';

import { getOverrides, useClasses } from '../../../utils/overrides';
import InputWrapper from '../components/InputWrapper';

import { createUseStyles } from '../../../utils/styles';
import styles from './styles';
const useStyles = createUseStyles(styles, 'Slider');

const Handle = RCSlider.Handle;

function Slider({
    children,
    classes: classesProp,
    overrides: overridesProp,
    className: classNameProp,
    value,
    error,
    tipFormatter,
    size,
    showValue,
    overrides = {},
    onChange = () => {},
    isReadOnly = false,
    max = 100,
    min = 0,
    step = 1,
    isRange = false,
    isPercentage = false,
    reverse = false,
    ...props
}) {
    const classes = useClasses(useStyles, classesProp);
    // State
    const [innerValue, setInnerValue] = useState(
        isRange && (value === undefined || value === null) ? [min, max] : value || min,
    );

    useEffect(() => {
        if (isRange) {
            if (!value) setInnerValue([min, max]);
            else setInnerValue(value);
        } else {
            setInnerValue(value || min);
        }
    }, [value, isRange, min, max]);

    // Overrides
    const override = getOverrides(overridesProp, Slider.overrides);

    // Classes
    const rootClassName = classnames(
        classes.root,
        {
            [classes.isReadOnly]: isReadOnly,
        },
        classNameProp,
    );

    // Tip element
    const handle = useCallback(
        (props) => {
            const { offset, dragging, index, ...restProps } = props;
            const positionStyle = reverse
                ? { right: `${offset}%`, transform: 'translateX(50%)' }
                : { left: `${offset}%` };
            const handlerValue = Array.isArray(innerValue) ? innerValue[index] : innerValue;
            let finalValue;
            if (tipFormatter) finalValue = tipFormatter(handlerValue);
            else if (isPercentage) finalValue = `${handlerValue}%`;
            else finalValue = handlerValue;

            return (
                <div key={index} className={classes.overlay} {...override.overlay}>
                    {(showValue || !isReadOnly) && (
                        <span
                            style={positionStyle}
                            className={classes.overlayLabel}
                            {...override.overlayLabel}
                        >
                            {finalValue}
                        </span>
                    )}
                    <Handle
                        value={innerValue}
                        offset={offset}
                        {...restProps}
                        className={classes.overlayHandler}
                        prefixCls="hoi-poi-slider"
                        dragging={dragging.toString()}
                        {...override.overlayHandler}
                    />
                </div>
            );
        },
        [
            reverse,
            innerValue,
            tipFormatter,
            isPercentage,
            classes.overlay,
            classes.overlayLabel,
            classes.overlayHandler,
            override.overlay,
            override.overlayLabel,
            override.overlayHandler,
            showValue,
            isReadOnly,
        ],
    );

    const onAfterChange = useCallback(
        (...args) => {
            props.onBlur && props.onBlur(...args);
        },
        [props],
    );

    const onChangeRange = useCallback(
        (value) => {
            setInnerValue(value);
            onChange && onChange(value);
        },
        [onChange],
    );

    const getValue = useMemo(
        () => (!isRange ? innerValue : Array.isArray(innerValue) ? innerValue : [min, max]),
        [innerValue, isRange, min, max],
    );

    const sliderProps = useMemo(
        () => ({
            className: classes.slider,
            value: getValue,
            onChange: onChangeRange,
            onAfterChange: onAfterChange,
            disabled: isReadOnly,
            labelMode: 'vertical',
            max,
            min,
            step,
            defaultValue: isRange ? [min, max] : min,
            handle,
            reverse,
            ...override['rc-slider'],
        }),
        [
            classes.slider,
            getValue,
            onChangeRange,
            onAfterChange,
            isReadOnly,
            max,
            min,
            step,
            isRange,
            handle,
            reverse,
            override,
        ],
    );

    const Component = isRange ? Range : RCSlider;

    return (
        <InputWrapper {...props} error={error} className={rootClassName} overrides={overridesProp}>
            <Component {...sliderProps} />
        </InputWrapper>
    );
}

Slider.overrides = ['root', 'rc-slider', 'overlay', 'overlayLabel', 'overlayHandler'];

Slider.propTypes = {
    className: PropTypes.string,
    overrides: PropTypes.object,
    label: PropTypes.string,
    value: PropTypes.any,
    onChange: PropTypes.func,
    isFullWidth: PropTypes.bool,
    isRange: PropTypes.bool,
    /** Info popover */
    hint: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** Error will be displayed below the component with style changes */
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    isReadOnly: PropTypes.bool,
    /** A function to format tooltip\'s overlay */
    tipFormatter: PropTypes.func,
    /** This prop adds percentage symbol to value label */
    isPercentage: PropTypes.bool,
    /** The maximum value of the slider */
    max: PropTypes.number,
    /** The minimum value of the slider */
    min: PropTypes.number,
    /** Value to be added or subtracted on each step the slider makes. Must be greater than zero, and max - min should be evenly divisible by the step value.  */
    step: PropTypes.number,
    /** Info will be displayed below the component with style changes */
    info: PropTypes.string,
    /** If the value is true, it means the component is rendered reverse. (Handle moves from right to left) */
    reverse: PropTypes.bool,
};

export default React.memo(Slider);
