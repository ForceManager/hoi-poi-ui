import React from 'react';
import { components } from 'react-select';
import Icon from 'components/general/Icon';

export default React.memo((props) => {
    return (
        components.DropdownIndicator && (
            <components.DropdownIndicator {...props}>
                <Icon name="chevron" />
            </components.DropdownIndicator>
        )
    );
});
