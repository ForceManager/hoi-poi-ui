import React from 'react';
import { components } from 'react-select';
import Icon from '../../general/Icon';

export default React.memo((props) => {
    const icon = props.isDisabled ? <Icon name="lock" /> : <Icon name="chevron" size="small" />;

    return (
        components.DropdownIndicator && (
            <components.DropdownIndicator {...props}>{icon}</components.DropdownIndicator>
        )
    );
});
