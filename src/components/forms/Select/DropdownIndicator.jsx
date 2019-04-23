import React from 'react';
import { components } from 'react-select';
import Icon from '../../general/Icon';

export default React.memo((props) => {
    return (
        components.DropdownIndicator && (
            <components.DropdownIndicator {...props}>
                <Icon name="chevron" size="small" />
            </components.DropdownIndicator>
        )
    );
});
