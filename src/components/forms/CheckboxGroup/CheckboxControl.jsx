import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import { getOverrides } from '../../../utils/overrides';
import Checkbox from '../../general/Checkbox';
import styles from './styles';

function CheckboxControl({
    children,
    overrides: overridesProp,
    className: classNameProp,
    classes,
    option,
    onChange,
    value,
    isReadOnly,
    ...props
}) {
    // Overrides
    const override = getOverrides(overridesProp, CheckboxControl.overrides);

    const onChangeCheckbox = useCallback(() => {
        onChange && onChange(option.value);
    }, [onChange, option]);

    return (
        <div
            key={option.value}
            className={classes.checkboxControl}
            onClick={isReadOnly ? undefined : () => onChangeCheckbox(option.value)}
            {...override.checkboxControl}
        >
            <Checkbox checked={value} isDisabled={isReadOnly} />
            <span className={classes.checkboxLabel} {...override.checkboxLabel}>
                {option.label}
            </span>
        </div>
    );
}

CheckboxControl.overrides = ['checkboxLabel', 'checkboxControl'];

CheckboxControl.defaultProps = {
    onChange: () => {},
    value: false,
    option: {},
    isReadOnly: false,
};

CheckboxControl.propTypes = {
    className: PropTypes.string,
    overrides: PropTypes.object,
    onChange: PropTypes.func,
    option: PropTypes.shape({
        label: PropTypes.string,
        value: PropTypes.string,
    }),
    value: PropTypes.bool,
    isReadOnly: PropTypes.bool,
};

export default React.memo(withStyles(styles, { name: 'CheckboxControl' })(CheckboxControl));
