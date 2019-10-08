import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import classnames from 'classnames';
import ReactSwitch from 'react-switch';

import { getOverrides } from '../../../utils/overrides';

import styles from './styles';

function Switch({
    checked,
    classes,
    theme,
    className: classNameProp,
    isDisabled,
    onChange,
    overrides: overridesProp,
    ...props
}) {
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
        onClick: !isDisabled ? onChange : undefined,
    };

    return (
        <div {...rootProps} {...override.root}>
            <ReactSwitch
                className={classes.Switch}
                onChange={!isDisabled ? onChange : undefined}
                checked={checked ? 'checked' : ''}
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

export default React.memo(withStyles(styles, { name: 'Switch', injectTheme: true })(Switch));
