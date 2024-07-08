import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import Input from '../Input';

function InputControl({ onChange, onBlur, ...props }) {
    const onChangeInput = useCallback(
        (value) => {
            onChange && onChange(props.name, value);
        },
        [onChange, props.name],
    );

    const onBlurInput = useCallback(
        (value) => {
            onBlur && onBlur(props.name, value);
        },
        [onBlur, props.name],
    );

    return <Input {...props} isFullWidth onChange={onChangeInput} onBlur={onBlurInput} />;
}

InputControl.propTypes = {
    onChange: PropTypes.func,
};

export default React.memo(InputControl);
