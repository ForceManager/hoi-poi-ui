import React from 'react';

function PersonRemove({ color = '#335B70', ...props }) {
    return (
        <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <path
                d="M15 14c2.67 0 8 1.33 8 4v2H7v-2c0-2.67 5.33-4 8-4Zm0-2a4 4 0 1 1 0-8 4 4 0 0 1 0 8ZM5 9.59l2.12-2.13 1.42 1.42L6.41 11l2.13 2.12-1.42 1.42L5 12.41l-2.12 2.13-1.42-1.42L3.59 11 1.46 8.88l1.42-1.42L5 9.59Z"
                fill={color}
            />
        </svg>
    );
}

export default PersonRemove;
