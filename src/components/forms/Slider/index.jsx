import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import classnames from 'classnames';
import RCSlider from 'rc-slider';

import { getOverrides } from '../../../utils/overrides';
import Label from '../Label';
import styles from './styles';

const Handle = RCSlider.Handle;

function Slider({
    children,
    overrides: overridesProp,
    className: classNameProp,
    classes,
    value,
    label,
    labelMode,
    isFullWidth,
    hint,
    error,
    isRequired,
    isReadOnly,
    min,
    max,
    step,
    tipFormatter,
    ...props
}) {
    // State
    const [innerValue, setInnerValue] = useState(value);

    // Overrides
    const override = getOverrides(overridesProp, Slider.overrides);

    // Classes
    const rootClassName = classnames(
        classes.root,
        {
            [classes.isReadOnly]: isReadOnly,
            [classes[labelMode]]: labelMode,
            [classes.isFullWidth]: isFullWidth,
            [classes.errored]: error,
        },
        classNameProp,
    );

    const rootProps = {
        className: rootClassName,
    };

    const labelProps = {
        className: classes.Label,
        isRequired,
        hint,
        ...override.Label,
    };

    // Tip element
    const handle = useCallback(
        (props) => {
            const { offset, dragging, ...restProps } = props;
            const positionStyle = { left: `${offset}%` };
            const finalValue = tipFormatter ? tipFormatter(innerValue) : innerValue;
            return (
                <div className={classes.overlay} {...override.overlay}>
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
                        className={classes.overlayHandler}
                        prefixCls="hoi-poi-slider"
                        dragging={dragging.toString()}
                    />
                </div>
            );
        },
        [innerValue],
    );

    // Avoiding re-renderings
    const onChange = useCallback((value) => {
        setInnerValue(value);
    }, []);

    const sliderProps = {
        className: classes.slider,
        value: innerValue,
        onChange: onChange,
        onAfterChange: props.onChange,
        disabled: isReadOnly,
        max,
        min,
        step,
        defaultValue: min,
        handle,
        ...override['rc-slider'],
    };

    // Allow dynamic value changes
    useEffect(() => setInnerValue(value), [value]);

    return (
        <div {...rootProps}>
            {label && <Label {...labelProps}>{label}</Label>}
            <div className={classes.formControl} {...override.formControl}>
                <RCSlider {...sliderProps} />
                {error && (
                    <div className={classes.error} {...override.error}>
                        {error}
                    </div>
                )}
            </div>
        </div>
    );
}

Slider.overrides = ['rc-slider', 'error', 'formControl', 'Label', 'overlay', 'overlayLabel'];

Slider.defaultProps = {
    labelMode: 'horizontal',
    onChange: () => {},
    isReadOnly: false,
    value: 0,
    max: 100,
    min: 0,
    step: 1,
};

Slider.propTypes = {
    className: PropTypes.string,
    overrides: PropTypes.object,
    label: PropTypes.string,
    labelMode: PropTypes.oneOf(['horizontal', 'vertical']),
    value: PropTypes.any,
    onChange: PropTypes.func,
    isFullWidth: PropTypes.bool,
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
};

export default React.memo(withStyles(styles, { name: 'Slider' })(Slider));
