import React from 'react';

const Email = ({ color = '#788590', ...props }) => (
    <svg {...props} viewBox="0 0 24 24">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            fill={color}
            d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z"
        />
    </svg>
);

export default Email;
