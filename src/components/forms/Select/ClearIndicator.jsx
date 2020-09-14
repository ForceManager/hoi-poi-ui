import React from 'react';
import { components } from 'react-select';
import Icon from '../../general/Icon';

export default (hide, className) => {
    if (hide) return null;
    return React.memo((props) => {
        console.log('ClearIndicator', hide, className, props);
        return (
            components.ClearIndicator && (
                <components.ClearIndicator {...props} className={className}>
                    <Icon name="close" size="small" />
                </components.ClearIndicator>
            )
        );
    });
};
