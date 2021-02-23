import React from 'react';
import { components } from 'react-select';

export default React.memo(({ children, selectProps, ...props }) => {
    const { numSelectedLiteral } = selectProps;
    let [values, input] = children;

    if (Array.isArray(values)) {
        values = numSelectedLiteral.replace('%@', values.length);
    }

    return (
        <components.ValueContainer {...props}>
            <components.SingleValue {...props}>{values}</components.SingleValue>
            {input}
        </components.ValueContainer>
    );
});
