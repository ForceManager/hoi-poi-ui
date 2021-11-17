import React from 'react';
import { components } from 'react-select';
import Icon from '../../../general/Icon';

export default React.memo((props) => {
    const onClick = (e) => {
        e.stopPropagation();
        props.selectProps.onChange(null, {
            action: 'clear',
        });
    };

    props.innerProps.onMouseDown = onClick;

    let icon = <Icon name="closeSmall" size="large" />;
    if (props?.selectProps?.clearIcon) {
        icon = props?.selectProps?.clearIcon;
    }

    return (
        components.ClearIndicator && (
            <components.ClearIndicator {...props}>{icon}</components.ClearIndicator>
        )
    );
});
