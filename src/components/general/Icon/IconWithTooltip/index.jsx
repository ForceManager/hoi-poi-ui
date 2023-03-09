import React, { memo } from 'react';
import Icon from '../index';
import Tooltip from '../../../utils/Tooltip';

const IconWithTooltip = ({ name, ...props }) => {
    return (
        <Tooltip placement="top" content={name}>
            <span>
                <Icon name={name} {...props} />
            </span>
        </Tooltip>
    );
};

export default memo(IconWithTooltip);
