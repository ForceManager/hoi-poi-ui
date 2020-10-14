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
    labelMode,
    error,
    checked,
    isReadOnly,
    isRange,
    onChange,
    value,
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
            labelMode={labelMode}
            className={rootClassName}
            overrides={overridesProp}
        >
            <Switch {...switchProps} />
        </InputWrapper>
    );
}

SwitchInput.overrides = ['root', 'Switch', 'overlay', 'overlayLabel'];

SwitchInput.defaultProps = {
    overrides: {},
    labelMode: 'horizontal',
    onChange: () => {},
    isReadOnly: false,
};

SwitchInput.propTypes = {
    className: PropTypes.string,
    overrides: PropTypes.object,
    label: PropTypes.string,
    labelMode: PropTypes.oneOf(['horizontal', 'vertical']),
    value: PropTypes.any,
    onChange: PropTypes.func,
    /** Info popover */
    hint: PropTypes.string,
    /** Error will be displayed below the component with style changes */
    error: PropTypes.string,
    isReadOnly: PropTypes.bool,
};

export default React.memo(SwitchInput);
