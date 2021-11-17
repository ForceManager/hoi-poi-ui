import React from 'react';
import { components } from 'react-select';
import Icon from '../../../general/Icon';
import defaultTheme from './../../../../utils/styles/defaultTheme';

export default React.memo((props) => {
    let icon = <Icon name="lockOutline" size="medium" color={defaultTheme.colors.neutral600} />;
    if (props?.selectProps?.lockIcon) {
        icon = props?.selectProps?.lockIcon;
    }
    return (
        components.DropdownIndicator && (
            <components.DropdownIndicator {...props}>{icon}</components.DropdownIndicator>
        )
    );
});
