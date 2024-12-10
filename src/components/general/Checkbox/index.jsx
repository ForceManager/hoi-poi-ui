import React, { useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { getOverrides, useClasses } from '../../../utils/overrides';
import Icon from '../../general/Icon';

import { createUseStyles, useTheme } from '../../../utils/styles';
import styles from './styles';
const useStyles = createUseStyles(styles, 'Checkbox');

const defaultColors = [
    'grey',
    'semanticNegative',
    'actionMajor',
    'semanticPositive',
    'semanticInfo',
    'semanticFocus',
    'purple',
];

function Checkbox({
    classes: classesProp,
    overrides: overridesProp,
    className: classNameProp,
    checked,
    indeterminate,
    isDisabled,
    color: colorProp = 'grey',
    isMonotone,
    onChange = () => {},
    size = 'medium',
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

    const { colorEnabled, colorDisabled } = useMemo(() => {
        let disabled = theme.colors.grey[200];
        let enabled = theme.colors.textLight.secondary;

        switch (colorProp) {
            case 'grey':
                disabled = theme.colors.grey[200];
                enabled = theme.colors.grey[500];
                break;
            case 'actionMajor':
                disabled = theme.colors.actionMajor[150];
                enabled = theme.colors.actionMajor[500];
                break;
            case 'semanticPositive':
                disabled = theme.colors.semantic.positiveCustom200;
                enabled = theme.colors.semantic.positive500;
                break;
            case 'semanticNegative':
                disabled = theme.colors.semantic.negativeCustom200;
                enabled = theme.colors.semantic.negative500;
                break;
            case 'semanticInfo':
                disabled = theme.colors.semantic.infoCustom100;
                enabled = theme.colors.semantic.info500;
                break;
            case 'semanticFocus':
                disabled = theme.colors.semantic.focusCustom200;
                enabled = theme.colors.semantic.focus500;
                break;
            case 'purple':
                disabled = theme.colors.temp.purple200;
                enabled = theme.colors.temp.purple500;
                break;
            default:
                break;
        }

        return { colorEnabled: enabled, colorDisabled: disabled };
    }, [
        colorProp,
        theme.colors.actionMajor,
        theme.colors.grey,
        theme.colors.semantic.focus500,
        theme.colors.semantic.focusCustom200,
        theme.colors.semantic.info500,
        theme.colors.semantic.infoCustom100,
        theme.colors.semantic.negative500,
        theme.colors.semantic.negativeCustom200,
        theme.colors.semantic.positive500,
        theme.colors.semantic.positiveCustom200,
        theme.colors.temp.purple200,
        theme.colors.temp.purple500,
        theme.colors.textLight.secondary,
    ]);

    const getColor = useCallback(
        (checkState) => {
            if (isMonotone) {
                if (colorProp === 'grey') {
                    return isDisabled ? theme.colors.grey[200] : theme.colors.textLight.secondary;
                }
                return isDisabled
                    ? colorDisabled || theme.colors.grey[200]
                    : colorEnabled || theme.colors.textLight.secondary;
            } else {
                if (checkState === 'unchecked') {
                    return isDisabled ? theme.colors.grey[200] : theme.colors.textLight.secondary;
                } else {
                    return isDisabled
                        ? colorDisabled || theme.colors.grey[200]
                        : colorEnabled || theme.colors.textLight.secondary;
                }
            }
        },
        [
            isMonotone,
            colorProp,
            isDisabled,
            colorDisabled,
            theme.colors.grey,
            theme.colors.textLight.secondary,
            colorEnabled,
        ],
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
