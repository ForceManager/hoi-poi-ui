import React from 'react';
import { components } from 'react-select';
import Icon from '../../../general/Icon';
import defaultTheme from './../../../../utils/styles/defaultTheme';

export default React.memo((props) => {
    const icon = props.isDisabled ? (
        <div style={{ padding: '2px 2px 2px 6px', display: 'flex' }}>
            <Icon name="lockOutline" size="medium" color={defaultTheme.colors.neutral600} />
        </div>
    ) : (
        <Icon name="arrowDropDown" size="large" />
    );

    return (
        components.DropdownIndicator && (
            <components.DropdownIndicator {...props}>{icon}</components.DropdownIndicator>
        )
    );
});
