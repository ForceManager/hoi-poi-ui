import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { getOverrides, useClasses } from '../../../utils/overrides';
import CheckedIcon from './CheckedIcon';
import UncheckedIcon from './UncheckedIcon';

import { createUseStyles } from '../../../utils/styles';
import styles from './styles';
const useStyles = createUseStyles(styles, 'Radio');

function Radio({
    checked,
    classes: classesProp,
    className: classNameProp,
    isDisabled,
    onChange,
    overrides: overridesProp,
    ...props
}) {
    const classes = useClasses(useStyles, classesProp);
    // Overrides
    const override = getOverrides(overridesProp, Radio.overrides);

    // Classes
    const rootClassName = classnames(
        classes.root,
        {
            [classes.disabled]: isDisabled,
            [classes.checked]: checked,
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

export default React.memo(Radio);
