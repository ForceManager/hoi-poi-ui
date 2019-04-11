import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import classnames from 'classnames';
import { getOverrides } from 'utils/overrides';
import CheckedIcon from './CheckedIcon';
import UnCheckedIcon from './UnCheckedIcon';
import IndeterminateIcon from './IndeterminateIcon';

import styles from './styles';

function Checkbox({
    children,
    overrides: overridesProp,
    className: classNameProp,
    classes,
    checked,
    indeterminate,
    isDisabled,
    ...props
}) {
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

    const onChange = useCallback(() => {
        props.onChange && props.onChange();
    }, [checked, indeterminate]);

    const rootProps = {
        className: rootClassName,
        onClick: onChange,
    };

    let checkState = 'unchecked';
    if (checked && indeterminate) checkState = 'indeterminate';
    else if (checked) checkState = 'checked';

    return (
        <div {...rootProps}>
            {checkState === 'checked' && <CheckedIcon {...override.svg} />}
            {checkState === 'unchecked' && <UnCheckedIcon {...override.svg} />}
            {checkState === 'indeterminate' && <IndeterminateIcon {...override.svg} />}
            <input
                className={classes.input}
                onChange={onChange}
                type="checkbox"
                checked={checked ? 'checked' : ''}
                disabled={isDisabled ? 'disabled' : ''}
                {...override.input}
            />
        </div>
    );
}

Checkbox.overrides = ['input', 'svg'];

Checkbox.defaultProps = {};

Checkbox.propTypes = {
    checked: PropTypes.bool,
    indeterminate: PropTypes.bool,
    onChange: PropTypes.func,
    isDisabled: PropTypes.bool,
};

export default React.memo(withStyles(styles, { name: 'Checkbox' })(Checkbox));
