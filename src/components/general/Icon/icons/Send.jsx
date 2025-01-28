import React from 'react';

const Send = ({ color = '#335B70', ...props }) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path fill={color} d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
    </svg>
);

export default React.memo(Send);
