import React from 'react';
import { components } from 'react-select';
import Icon from '../../../general/Icon';

export default React.memo(({ children, ...props }) => {
    const { singleValueIconClassName, override } = props.selectProps.menuProps;

    const icon = props.data.icon;
    const iconType = props.data.iconType;

    let finalIcon;
    if (icon) finalIcon = icon;
    else if (iconType) finalIcon = <Icon name={iconType} />;

    return (
        components.SingleValue && (
            <components.SingleValue {...props}>
                {finalIcon && (
                    <div className={singleValueIconClassName} {...override.actionIcon}>
                        {finalIcon ? finalIcon : null}
                    </div>
                )}
                {props.data.label}
            </components.SingleValue>
        )
    );
});
