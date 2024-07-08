import React, { useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { getOverrides, useClasses } from '../../../utils/overrides';
import Label from '../Label';
import CheckboxControl from './CheckboxControl';

import { createUseStyles } from '../../../utils/styles';
import styles from './styles';
const useStyles = createUseStyles(styles, 'CheckboxGroup');

function CheckboxGroup({
    classes: classesProp,
    overrides: overridesProp,
    className: classNameProp,
    onBlur,
    label,
    hint,
    error,
    isFullWidth,
    color,
    labelMode = 'horizontal',
    onChange = () => {},
    value = {},
    options = [],
    isReadOnly = false,
}) {
    const classes = useClasses(useStyles, classesProp);
    // Overrides
    const override = getOverrides(overridesProp, CheckboxGroup.overrides);

    // Classes
    const rootClassName = classnames(
        classes.root,
        {
            [classes.isReadOnly]: isReadOnly === true,
            [classes[labelMode]]: labelMode,
            [classes.errored]: error,
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
        className: classnames(classes.Label, {
            [classes.isFullWidth]: isFullWidth,
        }),
        hint,
        ...override.Label,
    };

    const onChangeCheckbox = useCallback(
        (option) => {
            onChange &&
                onChange({
                    ...value,
                    [option]: !value[option],
                });
            onBlur &&
                onBlur({
                    ...value,
                    [option]: !value[option],
                });
        },
        [onBlur, onChange, value],
    );

    const hasErrorObj = useMemo(() => {
        return !error || typeof error !== 'object' ? false : Object.entries(error).length > 0;
    }, [error]);

    return (
        <div {...rootProps} {...override.root}>
            {label && <Label {...labelProps}>{label}</Label>}
            <div className={formControlClassName} {...override.formControl}>
                {options.map((option, i) => (
                    <CheckboxControl
                        key={option.value}
                        option={option}
                        value={value[option.value]}
                        isReadOnly={Array.isArray(isReadOnly) ? isReadOnly[i] : isReadOnly}
                        onChange={onChangeCheckbox}
                        color={color}
                        overrides={overridesProp}
                        error={hasErrorObj ? error[option.value] : undefined}
                    />
                ))}
                {error && !hasErrorObj && (
                    <div className={classes.error} {...override.error}>
                        {error}
                    </div>
                )}
            </div>
        </div>
    );
}

CheckboxGroup.overrides = [
    'root',
    'error',
    'Checkbox',
    'checkboxLabel',
    'checkboxControl',
    'formControl',
    'Label',
];

CheckboxGroup.propTypes = {
    className: PropTypes.string,
    overrides: PropTypes.object,
    onChange: PropTypes.func,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string,
            value: PropTypes.string,
        }),
    ),
    value: PropTypes.object,
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    label: PropTypes.string,
    labelMode: PropTypes.oneOf(['horizontal', 'vertical']),
    /** Info popover */
    hint: PropTypes.string,
    isReadOnly: PropTypes.oneOfType([PropTypes.bool, PropTypes.array]),
    isFullWidth: PropTypes.bool,
};

export default React.memo(CheckboxGroup);
