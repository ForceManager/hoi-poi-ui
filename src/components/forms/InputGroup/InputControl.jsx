import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import Input from '../Input';

function InputControl({ onChange, ...props }) {
    const onChangeInput = useCallback(
        (e) => {
            const value = e && e.target ? e.target.value : '';
            onChange && onChange(props.name, value);
        },
        [onChange],
    );

    return <Input {...props} onChange={onChangeInput} />;
}

InputControl.defaultProps = {
    onChange: () => {},
};

InputControl.propTypes = {
    onChange: PropTypes.func,
};

export default React.memo(InputControl);
