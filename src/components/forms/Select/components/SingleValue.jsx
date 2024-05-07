import React from 'react';
import { components } from 'react-select';
import Icon from '../../../general/Icon';
import Avatar from '../../../general/Avatar';

export default React.memo(({ children, ...props }) => {
    const { singleValueIconClassName, singleValueAvatarClassName, override } =
        props.selectProps.menuProps;

    const icon = props.data.icon;
    const iconType = props.data.iconType;
    const src = props.data.src;

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
                {src && (
                    <div className={singleValueAvatarClassName}>
                        <Avatar size="small" src={src} />
                    </div>
                )}
                {props.data.label}
            </components.SingleValue>
        )
    );
});
