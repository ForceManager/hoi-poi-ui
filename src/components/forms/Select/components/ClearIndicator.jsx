import React from 'react';
import { components } from 'react-select';
import Icon from '../../../general/Icon';

export default React.memo((props) => {
    return (
        components.ClearIndicator && (
            <components.ClearIndicator {...props}>
                <Icon name="closeSmall" />
            </components.ClearIndicator>
        )
    );
});
