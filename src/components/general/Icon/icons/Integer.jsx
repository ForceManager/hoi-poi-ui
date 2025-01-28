import React, { memo } from 'react';

function Integer({ color = '#335B70', ...props }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2 8.5a4.5 4.5 0 019 0v7a4.5 4.5 0 11-9 0v-7zm2 0a2.5 2.5 0 015 0v7a2.5 2.5 0 01-5 0v-7zm9 0a4.5 4.5 0 119 0v7a4.5 4.5 0 11-9 0v-7zm2 0a2.5 2.5 0 015 0v7a2.5 2.5 0 01-5 0v-7z"
                fill={color}
            />
        </svg>
    );
}

export default memo(Integer);
