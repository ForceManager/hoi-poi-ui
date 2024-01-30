import React, { useMemo } from 'react';
import { components } from 'react-select';
import Avatar from '../../../general/Avatar';
import Icon from '../../../general/Icon';

export default React.memo((props) => {
    const label = useMemo(
        () =>
            props.selectProps.showMediaInSelectedValues &&
            (props.data.iconType || props.data.src) ? (
                <span>
                    {props.data.iconType && (
                        <Icon
                            name={props.data.iconType}
                            color={props.data.iconColor || null}
                            size="medium"
                        />
                    )}
                    {props.data.src && (
                        <Avatar
                            size="tiny"
                            src={props.data.src}
                            placeholder={props.data.placeholder || ''}
                            alt={props.data.alt}
                        />
                    )}
                    <span>{props.data.label}</span>
                </span>
            ) : (
                props.data.label
            ),
        [props],
    );
    return (
        components.MultiValueLabel && (
            <components.MultiValueLabel {...props}>{label}</components.MultiValueLabel>
        )
    );
});
