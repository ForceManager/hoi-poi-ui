import React, { memo } from 'react';
import Button from '../../general/Button';

const CustomComponent = memo(({ isReadOnly, inputRef, value, ...props }) => {
    return (
        <Button ref={inputRef} {...props}>
            {(value && value.toLocaleDateString('en-US')) || 'Select Date'}
        </Button>
    );
});

export default CustomComponent;
