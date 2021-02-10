import React from 'react';
import { components } from 'react-select';

export default React.memo((props) => {
    return (
        components.DropdownIndicator && (
            <components.DropdownIndicator {...props}>
                {props.selectProps?.dropDownIcon}
            </components.DropdownIndicator>
        )
    );
});
