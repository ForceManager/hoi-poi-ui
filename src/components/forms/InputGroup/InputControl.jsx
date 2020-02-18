import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import Input from '../Input';

function InputControl({ onChange, onBlur, ...props }) {
    const onChangeInput = useCallback(
        (e) => {
            const value = e && e.target ? e.target.value : '';
            onChange && onChange(props.name, value);
        },
        [onChange, props.name],
    );

    const onBlurInput = useCallback(
        (e) => {
            const value = e && e.target ? e.target.value : '';
            onBlur && onBlur(props.name, value);
        },
        [onBlur, props.name],
    );

    return <Input {...props} onChange={onChangeInput} onBlur={onBlurInput} />;
}

InputControl.defaultProps = {};

InputControl.propTypes = {
    onChange: PropTypes.func,
};

export default React.memo(InputControl);
