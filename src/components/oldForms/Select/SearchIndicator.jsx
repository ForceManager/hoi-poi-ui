import React from 'react';
import { components } from 'react-select';
import Icon from '../../general/Icon';

export default (props) => {
    return (
        components.DropdownIndicator && (
            <components.DropdownIndicator {...props}>
                <Icon name="magnifier" />
            </components.DropdownIndicator>
        )
    );
};
