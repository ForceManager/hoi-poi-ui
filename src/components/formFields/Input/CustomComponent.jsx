import React, { memo } from 'react';

const CustomComponent = memo(({ isReadOnly, ...props }) => {
    return <input {...props} />;
});

export default CustomComponent;
