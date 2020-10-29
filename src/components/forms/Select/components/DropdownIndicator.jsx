import React from 'react';
import { components } from 'react-select';
import Icon from '../../../general/Icon';
import defaultTheme from './../../../../utils/styles/defaultTheme';

export default React.memo((props) => {
    const icon = props.isDisabled ? (
        <Icon name="lockOutline" size="medium" color={defaultTheme.colors.neutral600} />
    ) : (
        <Icon name="arrowDropDown" size="large" />
    );

    return (
        components.DropdownIndicator && (
            <components.DropdownIndicator {...props}>{icon}</components.DropdownIndicator>
        )
    );
});
