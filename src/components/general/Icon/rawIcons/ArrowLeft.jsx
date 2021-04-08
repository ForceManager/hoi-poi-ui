import React from 'react';

function ArrowLeft({ color = '#788590', ...props }) {
    return (
        <svg width={7} height={10} viewBox="0 0 7 10" fill="none" {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5 10l1.388-1.388L2.783 5l3.605-3.612L5 0 0 5l5 5zM2.505 5L6.11 8.612 2.505 5zM6.11 1.388L5 .278l1.11 1.11z"
                fill={color}
            />
        </svg>
    );
}

export default ArrowLeft;
