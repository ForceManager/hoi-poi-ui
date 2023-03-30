import React, { memo } from 'react';
import { components } from 'react-select';

const Input = ({ ...props }) => {
    const { autoComplete, role } = props.selectProps;
    return <components.Input {...props} autocomplete={autoComplete} role={role} />;
};

export default memo(Input);
