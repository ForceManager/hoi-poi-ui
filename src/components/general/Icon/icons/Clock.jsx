import React from 'react';

function Clock({ color = '#335B70', ...props }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" id="ic_access_time" {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 4c4.42 0 8 3.58 8 8s-3.58 8-8 8-8-3.58-8-8 3.58-8 8-8zm.5 3H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"
                fill={color}
            />
        </svg>
    );
}

export default Clock;
