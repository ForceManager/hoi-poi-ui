import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { getOverrides, useClasses } from '../../../utils/overrides';
import { createUseStyles } from '../../../utils/styles';
import styles from './styles';

const useStyles = createUseStyles(styles, 'ButtonTabGroup');

function ButtonTabGroup({
    children,
    classes: classesProp,
    overrides: overridesProp,
    className: classNameProp,
    buttons,
    onChange,
    value,
    disabled,
    ...props
}) {
    const classes = useClasses(useStyles, classesProp);
    // Overrides
    const override = getOverrides(overridesProp, ButtonTabGroup.overrides);

    const rootClassName = classnames(classes.root, classNameProp);

    const buttonsEl = useMemo(
        () =>
            buttons.reduce((array, button, idx) => {
                const buttonClassName = classnames(classes.button, {
                    [classes.active]: button.value === value,
                });

                // not first or last
                if (idx && idx < buttons.length)
                    array.push(<span key={`${idx}${button.value}`} className={classes.divider} />);

                array.push(
                    <button
                        key={button.value}
                        className={buttonClassName}
                        onClick={() => onChange && onChange(button.value)}
                        {...override.button}
                    >
                        {button.label}
                    </button>,
                );

                return array;
            }, []),
        [
            buttons,
            classes.active,
            classes.button,
            classes.divider,
            onChange,
            override.button,
            value,
        ],
    );

    return (
        <div className={rootClassName} {...override.root}>
            {buttonsEl}
        </div>
    );
}

ButtonTabGroup.overrides = ['root', 'button'];

ButtonTabGroup.defaultProps = {
    buttons: [],
    overrides: {},
};

ButtonTabGroup.propTypes = {
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

export default React.memo(ButtonTabGroup);
