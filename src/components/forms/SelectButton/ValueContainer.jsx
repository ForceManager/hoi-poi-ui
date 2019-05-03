import React from 'react';
import { components } from 'react-select';
import Icon from '../../general/Icon';

export default React.memo(({ children, ...props }) => {
    return (
        components.ValueContainer && (
            <components.ValueContainer {...props}>
                <Icon className="hoi-poi-select__search" name="magnifier" />
                {children}
            </components.ValueContainer>
        )
    );
});
