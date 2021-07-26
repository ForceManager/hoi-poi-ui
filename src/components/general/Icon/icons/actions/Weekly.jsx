import React from 'react';

function Weekly({ color = '#788590', ...props }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <path
                d="M19 20V9H5v11h14zM16 2h2v2h1a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2h1V2h2v2h8V2zM7 18v-7h2v7H7zm8-7h2v7h-2v-7z"
                fill={color}
            />
        </svg>
    );
}

export default Weekly;
