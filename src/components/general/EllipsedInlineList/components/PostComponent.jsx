import React, { memo } from 'react';
import Text from '../../../typography/Text';

const PostComponent = ({ count, ...props }) => {
    return <Text {...props}>+{count}</Text>;
};

export default memo(PostComponent);
