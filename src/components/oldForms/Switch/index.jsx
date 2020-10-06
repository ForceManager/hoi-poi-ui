import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ReactSwitch from 'react-switch';

import { getOverrides, useClasses } from '../../../utils/overrides';

import { createUseStyles, useTheme } from '../../../utils/styles';
import styles from './styles';
const useStyles = createUseStyles(styles, 'Switch');

function Switch({
    checked,
    classes: classesProp,
    className: classNameProp,
    isDisabled,
    onChange,
    overrides: overridesProp,
    ...props
}) {
    const classes = useClasses(useStyles, classesProp);
    const theme = useTheme();
    // Overrides
    const override = getOverrides(overridesProp, Switch.overrides);

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
    };

    const onChangeSwitch = useCallback(
        (...args) => {
            if (isDisabled) return;
            onChange && onChange(...args);
        },
        [isDisabled, onChange],
    );

    return (
        <div {...rootProps} {...override.root}>
            <ReactSwitch
                className={classes.Switch}
                onChange={onChangeSwitch}
                checked={checked}
                disabled={isDisabled}
                offColor={theme.colors.placeholders}
                onColor={theme.colors.primaryDark}
                offHandleColor={theme.colors.greyLight}
                onHandleColor={theme.colors.primary}
                boxShadow="none"
                activeBoxShadow="none"
                handleDiameter={20}
                width={32}
                height={15}
                uncheckedIcon={false}
                checkedIcon={false}
                {...override.Switch}
            />
        </div>
    );
}

Switch.overrides = ['root', 'Switch'];

Switch.defaultProps = {
    checked: false,
    onChange: () => {},
    overrides: {},
};

Switch.propTypes = {
    checked: PropTypes.bool,
    className: PropTypes.string,
    isDisabled: PropTypes.bool,
    onChange: PropTypes.func,
    overrides: PropTypes.object,
};

export default React.memo(Switch);
