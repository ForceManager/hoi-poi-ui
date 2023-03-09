import React, { memo } from 'react';
import { default as DefaultIcon } from './Icon';
import IconGradient from './IconGradient';

const Icon = memo(({ hasGradient, ...props }) =>
    hasGradient ? <IconGradient {...props} /> : <DefaultIcon {...props} />,
);

export default Icon;