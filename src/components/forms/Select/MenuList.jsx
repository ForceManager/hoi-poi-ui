import React from 'react';
import { components } from 'react-select';
import ScrollBar from 'components/utils/ScrollBar';

export default (className) => {
    return React.memo(({ children, ...props }) => {
        return (
            components.MenuList && (
                <components.MenuList {...props} className={className}>
                    <ScrollBar autoHeight>{children}</ScrollBar>
                </components.MenuList>
            )
        );
    });
};
