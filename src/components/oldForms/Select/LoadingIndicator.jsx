import React from 'react';
import { components } from 'react-select';
import Loader from '../../general/Loader';

export default (props) => {
    let className = `${props.className} hoi-poi-select__loading-indicator`;
    return (
        components.DropdownIndicator && (
            <components.DropdownIndicator {...props} className={className}>
                <Loader size="tiny" />
            </components.DropdownIndicator>
        )
    );
};
