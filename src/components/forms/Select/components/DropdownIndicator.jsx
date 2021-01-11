import React from 'react';
import { components } from 'react-select';
import Icon from '../../../general/Icon';
import defaultTheme from './../../../../utils/styles/defaultTheme';

export default React.memo((props) => {
    let icon = props.selectProps?.dropDownIcon ? (
        props.selectProps?.dropDownIcon
    ) : (
        <Icon name="arrowDropDown" size="large" />
    );

    if (props.isDisabled) {
        icon = <Icon name="lockOutline" size="medium" color={defaultTheme.colors.neutral600} />;
    }
    // const icon = props.isDisabled ? (
    //     <Icon name="lockOutline" size="medium" color={defaultTheme.colors.neutral600} />
    // ) : (
    //     <Icon name="arrowDropDown" size="large" />
    // );

    return (
        components.DropdownIndicator && (
            <components.DropdownIndicator {...props}>{icon}</components.DropdownIndicator>
        )
    );
});
