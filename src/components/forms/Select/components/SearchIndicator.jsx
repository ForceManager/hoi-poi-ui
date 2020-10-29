import React from 'react';
import { components } from 'react-select';
import Icon from '../../../general/Icon';

export default (props) => {
    return (
        components.DropdownIndicator && (
            <components.DropdownIndicator {...props}>
                <div style={{ padding: '4px 2px 4px 6px', display: 'flex' }}>
                    <Icon name="search" size="medium" />
                </div>
            </components.DropdownIndicator>
        )
    );
};
