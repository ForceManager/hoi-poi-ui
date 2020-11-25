import React from 'react';
import { components } from 'react-select';

export default ({ className, override }) => {
    return React.memo(({ children, ...props }) => {
        return (
            components.Group && (
                <components.Group {...props} className={className} {...override.group}>
                    {children}
                </components.Group>
            )
        );
    });
};
