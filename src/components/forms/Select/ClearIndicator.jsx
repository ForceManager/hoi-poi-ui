import React from 'react';
import { components } from 'react-select';
import Icon from 'components/general/Icon';

export default React.memo((props) => {
    return (
        components.ClearIndicator && (
            <components.ClearIndicator {...props}>
                <Icon name="close" />
            </components.ClearIndicator>
        )
    );
});
