import React from 'react';
import { components } from 'react-select';
import Divider from '../../../general/Divider';

export default ({ className, override }) => {
    return React.memo(({ children, ...props }) => {
        return !props?.data?.divider ? (
            components.Option && (
                <components.Option {...props} className={className} {...override.option}>
                    {children}
                </components.Option>
            )
        ) : (
            <Divider />
        );
    });
};
