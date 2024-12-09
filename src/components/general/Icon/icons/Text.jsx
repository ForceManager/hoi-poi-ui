import React, { memo } from 'react';

function Text({ color = '#335B70', ...props }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M4 3v3h6.5v15h3V6H20V3H4z" fill={color} />
        </svg>
    );
}

export default memo(Text);
