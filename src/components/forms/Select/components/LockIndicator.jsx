import React from 'react';
import { components } from 'react-select';
import Icon from '../../../general/Icon';
import defaultTheme from './../../../../utils/styles/defaultTheme';

export default React.memo((props) => {
    return (
        components.DropdownIndicator && (
            <components.DropdownIndicator {...props}>
                <Icon name="lockOutline" size="medium" color={defaultTheme.colors.neutral600} />
            </components.DropdownIndicator>
        )
    );
});
