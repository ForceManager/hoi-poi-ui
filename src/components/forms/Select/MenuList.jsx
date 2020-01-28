import React from 'react';
import { components } from 'react-select';

export default (className) => {
    return React.memo(({ children, ...props }) => {
        return (
            components.MenuList && (
                <components.MenuList {...props} className={className}>
                    {children}
                </components.MenuList>
            )
        );
    });
};
