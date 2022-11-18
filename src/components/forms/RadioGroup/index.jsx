import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { getOverrides, useClasses } from '../../../utils/overrides';

import RadioControl from './RadioControl';
import Label from '../../forms/Label';

import { createUseStyles } from '../../../utils/styles';
import styles from './styles';
const useStyles = createUseStyles(styles, 'RadioGroup');

function RadioGroup({
    children,
    classes: classesProp,
    overrides: overridesProp,
    className: classNameProp,
    options,
    onChange,
    onBlur,
    value,
    label,
    labelMode,
    orientation,
    hint,
    isReadOnly,
    isFullWidth,
    ...props
}) {
    const classes = useClasses(useStyles, classesProp);
    // Overrides
    const override = getOverrides(overridesProp, RadioGroup.overrides);

    // Classes
    const rootClassName = classnames(
        classes.root,
        {
            [classes.isReadOnly]: isReadOnly,
            [classes[`${labelMode}Label`]]: labelMode,
            [classes[orientation]]: orientation,
        },
        classNameProp,
    );

    const formControlClassName = classnames(classes.formControl, {
        [classes.isFullWidth]: isFullWidth,
    });

    const rootProps = {
        className: rootClassName,
    };

    const labelProps = {
        className: classes.Label,
        hint,
        ...override.Label,
    };

    return (
        <div {...rootProps} {...override.root}>
            {label && <Label {...labelProps}>{label}</Label>}
            <div className={formControlClassName} {...override.formControl}>
                {options.map((option) => (
                    <RadioControl
                        key={option.value}
                        onClick={isReadOnly ? undefined : onChange}
                        overrides={overridesProp}
                        isReadOnly={isReadOnly}
                        option={option}
                        value={value}
                        onChange={onChange}
                        onBlur={onBlur}
                        classes={classesProp}
                        className={classes.radioControl}
                    />
                ))}
            </div>
        </div>
    );
}

RadioGroup.overrides = ['root', 'Radio', 'formControl', 'Label'];

RadioGroup.defaultProps = {
    labelMode: 'horizontal',
    orientation: 'vertical',
    onChange: () => {},
    value: null,
    options: [],
    isReadOnly: false,
    overrides: {},
};

RadioGroup.propTypes = {
    className: PropTypes.string,
    overrides: PropTypes.object,
    onChange: PropTypes.func,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string,
            value: PropTypes.any,
        }),
    ),
    value: PropTypes.any,
    label: PropTypes.string,
    labelMode: PropTypes.oneOf(['horizontal', 'vertical']),
    orientation: PropTypes.oneOf(['horizontal', 'vertical']),
    /** Info popover */
    hint: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    isReadOnly: PropTypes.bool,
    isFullWidth: PropTypes.bool,
};

export default React.memo(RadioGroup);
