import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { createUseStyles } from '../../../utils/styles';
import { getOverrides, useClasses } from '../../../utils/overrides';

import InputWrapper from '../components/InputWrapper';
import Switch from '../Switch';

import styles from './styles';

const useStyles = createUseStyles(styles, 'SwitchInput');

function SwitchInput({
    children,
    classes: classesProp,
    overrides: overridesProp,
    className: classNameProp,
    error,
    checked,
    isRange,
    value,
    isFullWidth,
    labelMode = 'horizontal',
    onChange = () => {},
    isReadOnly = false,
    ...props
}) {
    const classes = useClasses(useStyles, classesProp);

    // Overrides
    const override = getOverrides(overridesProp, SwitchInput.overrides);

    // Classes
    const rootClassName = classnames(
        classes.root,
        {
            [classes.isReadOnly]: isReadOnly,
            [classes.vertical]: labelMode === 'vertical',
            [classes.isFullWidth]: isFullWidth,
        },
        classNameProp,
    );

    const onSwitch = useCallback(() => {
        onChange && onChange(!value);
    }, [onChange, value]);

    const switchProps = {
        className: classes.switchinput,
        onChange: onSwitch,
        checked: !!value,
        isDisabled: isReadOnly,
        ...override.Switch,
    };

    return (
        <InputWrapper
            {...props}
            error=""
            info=""
            isFullWidth={isFullWidth}
            labelMode={labelMode}
            className={rootClassName}
            overrides={overridesProp}
            classes={{ Label: classes.Label, formControl: classes.formControl }}
        >
            <Switch {...switchProps} />
        </InputWrapper>
    );
}

SwitchInput.overrides = ['root', 'Switch', 'overlay', 'overlayLabel'];

SwitchInput.propTypes = {
    className: PropTypes.string,
    overrides: PropTypes.object,
    label: PropTypes.string,
    labelMode: PropTypes.oneOf(['horizontal', 'vertical']),
    value: PropTypes.any,
    onChange: PropTypes.func,
    /** Info popover */
    hint: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** Error will be displayed below the component with style changes */
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    isReadOnly: PropTypes.bool,
};

export default React.memo(SwitchInput);
