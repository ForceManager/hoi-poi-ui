import React from 'react';
import { components } from 'react-select';

export default React.memo(({ children, ...props }) => {
    return (
        components.SingleValue && (
            <components.SingleValue {...props}>{props.data.label}</components.SingleValue>
        )
    );
});
