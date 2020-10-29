import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { getOverrides, useClasses } from '../../../utils/overrides';
import Icon from '../../general/Icon';

import { createUseStyles, useTheme } from '../../../utils/styles';
import styles from './styles';
const useStyles = createUseStyles(styles, 'Checkbox');

const defaultColors = [
    'neutral',
    'red',
    'orange',
    'green',
    'blue',
    'purple',
    'aqua',
    'yellow',
    'turquoise',
];

function Checkbox({
    children,
    classes: classesProp,
    overrides: overridesProp,
    className: classNameProp,
    checked,
    indeterminate,
    isDisabled,
    onChange,
    size,
    color: colorProp,
    isMonotone,
    ...props
}) {
    const theme = useTheme();
    const classes = useClasses(useStyles, classesProp);
    // Overrides
    const override = getOverrides(overridesProp, Checkbox.overrides);

    // Classes
    const rootClassName = classnames(
        classes.root,
        {
            [classes.disabled]: isDisabled,
        },
        classNameProp,
    );

    const getColor = useCallback(
        (checkState) => {
            if (isMonotone) {
                if (colorProp === 'neutral') {
                    return isDisabled ? theme.colors.neutral500 : theme.colors.neutral700;
                }
                return isDisabled
                    ? theme.colors[`${colorProp}200`] || theme.colors.neutral500
                    : theme.colors[`${colorProp}500`] || theme.colors.neutral700;
            } else {
                if (checkState === 'unchecked') {
                    return isDisabled ? theme.colors.neutral500 : theme.colors.neutral700;
                } else {
                    return isDisabled
                        ? theme.colors[`${colorProp}200`] || theme.colors.neutral500
                        : theme.colors[`${colorProp}500`] || theme.colors.neutral700;
                }
            }
        },
        [colorProp, isDisabled, theme.colors, isMonotone],
    );

    const rootProps = {
        className: rootClassName,
        onClick: !isDisabled ? onChange : undefined,
    };

    let checkState = 'unchecked';
    if (checked && indeterminate) checkState = 'indeterminate';
    else if (checked) checkState = 'checked';

    return (
        <div {...rootProps} {...override.root}>
            {checkState === 'checked' && (
                <Icon name="checkBox" size={size} color={getColor('checked')} {...override.svg} />
            )}
            {checkState === 'unchecked' && (
                <Icon
                    name="checkBoxOutlineBlank"
                    size={size}
                    color={getColor('unchecked')}
                    {...override.svg}
                />
            )}
            {checkState === 'indeterminate' && (
                <Icon
                    name="indeterminateCheckBox"
                    size={size}
                    color={getColor('indeterminate')}
                    {...override.svg}
                />
            )}
            <input
                className={classes.input}
                onChange={!isDisabled ? onChange : undefined}
                type="checkbox"
                checked={checked ? 'checked' : ''}
                value={checkState}
                disabled={isDisabled ? 'disabled' : ''}
                {...override.input}
            />
        </div>
    );
}

Checkbox.overrides = ['root', 'input', 'svg'];

Checkbox.defaultProps = {
    onChange: () => {},
    overrides: {},
    color: 'neutral',
    size: 'medium',
};

Checkbox.propTypes = {
    className: PropTypes.string,
    overrides: PropTypes.object,
    checked: PropTypes.bool,
    indeterminate: PropTypes.bool,
    onChange: PropTypes.func,
    isDisabled: PropTypes.bool,
    color: PropTypes.oneOf(defaultColors),
    size: PropTypes.oneOf(['small', 'medium', 'large', 'big', 'huge']),
    isMonotone: PropTypes.bool,
};

export default React.memo(Checkbox);
