import React, { memo } from 'react';

function Decimals({ color = '#7D8A96', ...props }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.5 4A4.5 4.5 0 001 8.5v7a4.5 4.5 0 109 0v-7A4.5 4.5 0 005.5 4zm0 2A2.5 2.5 0 003 8.5v7a2.5 2.5 0 005 0v-7A2.5 2.5 0 005.5 6zM19 8a4 4 0 00-4 4v4a4 4 0 008 0v-4a4 4 0 00-4-4zm0 2a2 2 0 00-2 2v4a2 2 0 104 0v-4a2 2 0 00-2-2zm-6.5 10a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
                fill={color}
            />
        </svg>
    );
}

export default memo(Decimals);
