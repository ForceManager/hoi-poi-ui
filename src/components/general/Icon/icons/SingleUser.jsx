import React from 'react';

function SingleUser({ color = '#788590', ...props }) {
    return (
        <svg viewBox="0 0 16 16" fill="none" {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8 8c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                fill={color}
            />
        </svg>
    );
}

export default SingleUser;
