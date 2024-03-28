import React from 'react';

const PowerBI = ({ color = '#788590', ...props }) => (
    <svg {...props} viewBox="0 0 24 24">
        <path
            fill={color}
            d="M3.6 3.6h8.006v8.006H3.6zM12.394 3.6H20.4v8.006h-8.006zM3.6 12.394h8.006V20.4H3.6zM12.394 12.394H20.4V20.4h-8.006z"
        />
    </svg>
);

export default PowerBI;
