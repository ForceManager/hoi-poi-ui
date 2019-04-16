import React from 'react';
import { components } from 'react-select';

export default (className) => {
    return React.memo(({ children, ...props }) => {
        return (
            components.Menu && (
                <components.Menu {...props} className={className}>
                    {children}
                </components.Menu>
            )
        );
    });
};
