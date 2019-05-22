import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import classnames from 'classnames';
import { getOverrides } from '../../../utils/overrides';

import RadioControl from './RadioControl';
import Label from '../Label';
import styles from './styles';

function RadioGroup({
    children,
    overrides: overridesProp,
    className: classNameProp,
    classes,
    options,
    onChange,
    value,
    label,
    labelMode,
    hint,
    isReadOnly,
    ...props
}) {
    // Overrides
    const override = getOverrides(overridesProp, RadioGroup.overrides);

    // Classes
    const rootClassName = classnames(
        classes.root,
        {
            [classes.isReadOnly]: isReadOnly,
            [classes[labelMode]]: labelMode,
        },
        classNameProp,
    );

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
            <div className={classes.formControl} {...override.formControl}>
                {options.map((option) => (
                    <RadioControl
                        key={option.value}
                        onClick={isReadOnly ? undefined : onChange}
                        overrides={overridesProp}
                        isReadOnly={isReadOnly}
                        option={option}
                        value={value}
                        onChange={onChange}
                    />
                ))}
            </div>
        </div>
    );
}

RadioGroup.overrides = ['root', 'Radio', 'formControl', 'Label'];

RadioGroup.defaultProps = {
    labelMode: 'horizontal',
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
            value: PropTypes.string,
        }),
    ),
    value: PropTypes.string,
    label: PropTypes.string,
    labelMode: PropTypes.oneOf(['horizontal', 'vertical']),
    /** Info popover */
    hint: PropTypes.string,
    isReadOnly: PropTypes.bool,
};

export default React.memo(withStyles(styles, { name: 'RadioGroup' })(RadioGroup));
