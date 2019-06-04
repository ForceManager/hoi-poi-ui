import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import classnames from 'classnames';
import { getOverrides } from '../../../utils/overrides';
import CheckedIcon from './CheckedIcon';
import UncheckedIcon from './UncheckedIcon';

import styles from './styles';

function Radio({
    checked,
    classes,
    className: classNameProp,
    isDisabled,
    onChange,
    overrides: overridesProp,
    ...props
}) {
    // Overrides
    const override = getOverrides(overridesProp, Radio.overrides);

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

    return (
        <div {...rootProps} {...override.root}>
            {checked && <CheckedIcon {...override.svg} />}
            {!checked && <UncheckedIcon {...override.svg} />}
            <input
                className={classes.input}
                onChange={!isDisabled ? onChange : undefined}
                type="radio"
                checked={checked ? 'checked' : ''}
                disabled={isDisabled ? 'disabled' : ''}
                {...override.input}
            />
        </div>
    );
}

Radio.overrides = ['root', 'input', 'svg'];

Radio.defaultProps = {
    checked: false,
    onChange: () => {},
    overrides: {},
};

Radio.propTypes = {
    checked: PropTypes.bool,
    className: PropTypes.string,
    isDisabled: PropTypes.bool,
    onChange: PropTypes.func,
    overrides: PropTypes.object,
};

export default React.memo(withStyles(styles, { name: 'Radio' })(Radio));
