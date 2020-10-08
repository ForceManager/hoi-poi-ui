import React, { useState, useCallback } from 'react';
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
    isReadOnly,
    isRange,
    min,
    max,
    step,
    tipFormatter,
    size,
    ...props
}) {
    const classes = useClasses(useStyles, classesProp);
    // State
    const [innerValue, setInnerValue] = useState(
        isRange && value === undefined ? [min, max] : value || 0,
    );

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
    const sizes = {
        small: {
            overlayHandler: classes?.smallOverlayHandler,
            slider: classes?.smallSlider,
        },
        medium: {
            overlayHandler: classes?.overlayHandler,
            slider: classes?.slider,
        },
    };

    // Tip element
    const handle = useCallback(
        (props) => {
            const { offset, dragging, index, ...restProps } = props;
            const positionStyle = { left: `${offset}%` };
            const handlerValue = Array.isArray(innerValue) ? innerValue[index] : innerValue;
            const finalValue = tipFormatter ? tipFormatter(handlerValue) : handlerValue;

            return (
                <div key={index} className={classes.overlay} {...override.overlay}>
                    <span
                        style={positionStyle}
                        className={classes.overlayLabel}
                        {...override.overlayLabel}
                    >
                        {finalValue}
                    </span>
                    <Handle
                        value={innerValue}
                        offset={offset}
                        {...restProps}
                        className={sizes[size].overlayHandler}
                        prefixCls="hoi-poi-slider"
                        dragging={dragging.toString()}
                    />
                </div>
            );
        },
        [
            classes.overlay,
            classes.overlayLabel,
            innerValue,
            override.overlay,
            override.overlayLabel,
            size,
            sizes,
            tipFormatter,
        ],
    );

    const onAfterChange = useCallback(
        (...args) => {
            props.onBlur && props.onBlur(...args);
        },
        [props],
    );

    const sliderProps = {
        className: sizes[size].slider,
        value: innerValue,
        onChange: setInnerValue,
        onAfterChange: onAfterChange,
        disabled: isReadOnly,
        max,
        min,
        step,
        defaultValue: isRange ? [min, max] : min,
        handle,
        ...override['rc-slider'],
    };

    const Component = isRange ? Range : RCSlider;

    return (
        <InputWrapper {...props} error={error} className={rootClassName} overrides={overridesProp}>
            <Component {...sliderProps} />
        </InputWrapper>
    );
}

Slider.overrides = [
    'root',
    'rc-slider',
    'error',
    'formControl',
    'Label',
    'overlay',
    'overlayLabel',
];

Slider.defaultProps = {
    overrides: {},
    labelMode: 'horizontal',
    onChange: () => {},
    isReadOnly: false,
    max: 100,
    min: 0,
    step: 1,
    isRange: false,
    size: 'medium',
};

Slider.propTypes = {
    className: PropTypes.string,
    overrides: PropTypes.object,
    label: PropTypes.string,
    labelMode: PropTypes.oneOf(['horizontal', 'vertical']),
    size: PropTypes.oneOf(['small', 'medium']),
    value: PropTypes.any,
    onChange: PropTypes.func,
    isFullWidth: PropTypes.bool,
    isRange: PropTypes.bool,
    /** Info popover */
    hint: PropTypes.string,
    /** Error will be displayed below the component with style changes */
    error: PropTypes.string,
    isReadOnly: PropTypes.bool,
    /** A function to format tooltip\'s overlay */
    tipFormatter: PropTypes.func,
    /** The maximum value of the slider */
    max: PropTypes.number,
    /** The minimum value of the slider */
    min: PropTypes.number,
    /** Value to be added or subtracted on each step the slider makes. Must be greater than zero, and max - min should be evenly divisible by the step value.  */
    step: PropTypes.number,
    /** Info will be displayed below the component with style changes */
    info: PropTypes.string,
};

export default React.memo(Slider);
