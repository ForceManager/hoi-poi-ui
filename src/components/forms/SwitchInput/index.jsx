import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { getOverrides, useClasses } from '../../../utils/overrides';
import Label from '../Label';

import { createUseStyles } from '../../../utils/styles';
import styles from './styles';
import Switch from '../Switch';

const useStyles = createUseStyles(styles, 'SwitchInput');

function SwitchInput({
    children,
    classes: classesProp,
    overrides: overridesProp,
    className: classNameProp,
    label,
    labelMode,
    isFullWidth,
    hint,
    error,
    checked,
    isRequired,
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
        <div {...rootProps} {...override.root}>
            {label && <Label {...labelProps}>{label}</Label>}
            <div className={classes.formControl} {...override.formControl}>
                <Switch {...switchProps} />
                {error && (
                    <div className={classes.error} {...override.error}>
                        {error}
                    </div>
                )}
            </div>
        </div>
    );
}

SwitchInput.overrides = [
    'root',
    'Switch',
    'error',
    'formControl',
    'Label',
    'overlay',
    'overlayLabel',
];

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
