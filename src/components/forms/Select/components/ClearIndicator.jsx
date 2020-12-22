import React from 'react';
import { components } from 'react-select';
import Icon from '../../../general/Icon';

export default React.memo((props) => {
    const onClick = (e) => {
        e.stopPropagation();
        props.selectProps.onChange([], {
            action: 'clear',
        });
    };

    props.innerProps.onMouseDown = onClick;

    return (
        components.ClearIndicator && (
            <components.ClearIndicator {...props}>
                <Icon name="closeSmall" />
            </components.ClearIndicator>
        )
    );
});
