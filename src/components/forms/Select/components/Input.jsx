import React, { memo } from 'react';
import { components } from 'react-select';

const Input = ({ ...props }) => {
    const { inputProps = {} } = props.selectProps;
    return <components.Input {...props} {...inputProps} />;
};

export default memo(Input);
