import React from 'react';
import { components } from 'react-select';
import Icon from '../../../general/Icon';

export default React.memo((props) => {
    const onClick = (e) => {
        e.stopPropagation();
        const newValue = props.selectProps.value.filter((current) => {
            return current.value !== props.data.value;
        });
        props.selectProps.onChange(newValue, {
            action: 'remove-value',
            removedValue: props.data,
        });
    };

    return (
        components.MultiValueRemove && (
            <components.MultiValueRemove {...props}>
                <Icon name="closeSmall" onClick={onClick} />
            </components.MultiValueRemove>
        )
    );
});
