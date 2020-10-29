import React from 'react';
import { components } from 'react-select';

export default React.memo((props) => {
    return (
        components.MultiValueLabel && (
            <components.MultiValueLabel {...props}>{props.data.label}</components.MultiValueLabel>
        )
    );
});
