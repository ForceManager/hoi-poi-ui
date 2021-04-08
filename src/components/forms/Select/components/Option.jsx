import React from 'react';
import { components } from 'react-select';

export default ({ className, override }) => {
    return React.memo(({ children, ...props }) => {
        return (
            components.Option && (
                <components.Option {...props} className={className} {...override.option}>
                    {children}
                </components.Option>
            )
        );
    });
};
