import React from 'react';

function Apps({ color = '#788590', ...props }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <path
                d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"
                fill={color}
                fillRule="evenodd"
            />
        </svg>
    );
}

export default Apps;
