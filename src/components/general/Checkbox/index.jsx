import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { getOverrides, useClasses } from '../../../utils/overrides';
import CheckedIcon from './CheckedIcon';
import UnCheckedIcon from './UnCheckedIcon';
import IndeterminateIcon from './IndeterminateIcon';

import { createUseStyles } from '../../../utils/styles';
import styles from './styles';
const useStyles = createUseStyles(styles, 'Checkbox');

function Checkbox({
    children,
    classes: classesProp,
    overrides: overridesProp,
    className: classNameProp,
    checked,
    indeterminate,
    isDisabled,
    onChange,
    color,
    ...props
}) {
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

    const rootProps = {
        className: rootClassName,
        onClick: !isDisabled ? onChange : undefined,
    };

    let checkState = 'unchecked';
    if (checked && indeterminate) checkState = 'indeterminate';
    else if (checked) checkState = 'checked';

    return (
        <div {...rootProps} {...override.root}>
            {checkState === 'checked' && <CheckedIcon color={color} {...override.svg} />}
            {checkState === 'unchecked' && <UnCheckedIcon color={color} {...override.svg} />}
            {checkState === 'indeterminate' && (
                <IndeterminateIcon color={color} {...override.svg} />
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
    checked: false,
};

Checkbox.propTypes = {
    className: PropTypes.string,
    overrides: PropTypes.object,
    checked: PropTypes.bool,
    indeterminate: PropTypes.bool,
    onChange: PropTypes.func,
    isDisabled: PropTypes.bool,
    color: PropTypes.string,
};

export default React.memo(Checkbox);
