import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ReactSwitch from 'react-switch';

import { getOverrides, useClasses } from '../../../utils/overrides';

import { createUseStyles, useTheme } from '../../../utils/styles';
import styles from './styles';
const useStyles = createUseStyles(styles, 'Switch');

const sizes = {
    small: { handle: 12, width: 28, height: 16 },
    medium: { handle: 16, width: 36, height: 20 },
    large: { handle: 20, width: 44, height: 24 },
};

function Switch({
    classes: classesProp,
    className: classNameProp,
    isDisabled,
    overrides: overridesProp,
    checked = false,
    onChange = () => {},
    size = 'medium',
    ...props
}) {
    const classes = useClasses(useStyles, classesProp);
    const theme = useTheme();
    // Overrides
    const override = getOverrides(overridesProp, Switch.overrides);
    const [hovered, setHovered] = useState(false);

    // Classes
    const rootClassName = classnames(
        classes.root,
        {
            [classes.disabledOn]: checked && isDisabled,
            [classes.disabledOff]: !checked && isDisabled,
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
    const onHover = useCallback((value) => setHovered(value), []);

    return (
        <div
            onMouseOver={() => onHover(true)}
            onMouseLeave={() => onHover(false)}
            {...rootProps}
            {...override.root}
        >
            <ReactSwitch
                className={classes.Switch}
                onChange={onChangeSwitch}
                checked={checked}
                disabled={isDisabled}
                offColor={
                    hovered && !isDisabled ? theme.colors.grey[700] : theme.colors.textLight.secondary
                }
                onColor={hovered && !isDisabled ? theme.colors.actionMajor[600] : theme.colors.actionMajor[500]}
                offHandleColor={theme.colors.primary.white}
                onHandleColor={theme.colors.primary.white}
                boxShadow={null}
                activeBoxShadow={null}
                handleDiameter={sizes[size].handle}
                width={sizes[size].width}
                height={sizes[size].height}
                uncheckedIcon={false}
                checkedIcon={false}
                {...override.Switch}
            />
        </div>
    );
}

Switch.overrides = ['root', 'Switch'];

Switch.propTypes = {
    checked: PropTypes.bool,
    className: PropTypes.string,
    isDisabled: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    onChange: PropTypes.func,
    overrides: PropTypes.object,
};

export default React.memo(Switch);
