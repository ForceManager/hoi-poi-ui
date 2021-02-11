import React from 'react';

const DownloadAlt = ({ color = '#788590', ...props }) => (
    <svg {...props} viewBox="0 0 32 32">
        <path
            fill={color}
            d="M29.176 11.294h-7.529v-11.294h-11.294v11.294h-7.529l13.176 13.176 13.176-13.176zM2.823 28.235v3.765h26.353v-3.765h-26.353z"
        />
    </svg>
);

export default DownloadAlt;
