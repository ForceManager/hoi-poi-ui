import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { getOverrides, useClasses } from '../../../utils/overrides';
import Button from '../Button';
import { createUseStyles } from '../../../utils/styles';
import styles from './styles';

const useStyles = createUseStyles(styles, 'ButtonSwitch');

function ButtonSwitch({
    children,
    classes: classesProp,
    overrides: overridesProp,
    className: classNameProp,
    buttons,
    onChange,
    value,
    ...props
}) {
    const classes = useClasses(useStyles, classesProp);
    // Overrides
    const override = getOverrides(overridesProp, ButtonSwitch.overrides);

    const rootClassName = classnames(classes.root, classNameProp);

    const buttonsEl = useMemo(
        () =>
            buttons.map((button) => {
                const buttonClassName = classnames(classes.button, {
                    [classes.active]: button.value === value,
                });
                return (
                    <Button
                        key={button.value}
                        type="secondary"
                        className={buttonClassName}
                        onClick={() => onChange && onChange(button.value)}
                        {...override.Button}
                    >
                        {button.label}
                    </Button>
                );
            }),
        [buttons, classes.active, classes.button, onChange, override.Button, value],
    );

    return (
        <div className={rootClassName} {...override.root}>
            {buttonsEl}
        </div>
    );
}

ButtonSwitch.overrides = ['root', 'Button'];

ButtonSwitch.defaultProps = {
    buttons: [],
    overrides: {},
};

ButtonSwitch.propTypes = {
    className: PropTypes.string,
    overrides: PropTypes.object,
    buttons: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string,
            value: PropTypes.any,
        }),
    ),
    onChange: PropTypes.func,
    value: PropTypes.any,
};

export default React.memo(ButtonSwitch);
