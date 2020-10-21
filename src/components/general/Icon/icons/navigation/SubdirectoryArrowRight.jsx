import React from 'react';

function Apps({ color = '#788590', ...props }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <path
                d="M19 15l-6 6-1.42-1.42L15.17 16H4V4h2v10h9.17l-3.59-3.58L13 9z"
                fill={color}
                fillRule="evenodd"
            />
        </svg>
    );
}

export default Apps;
