import React from 'react';

function Save({ color = '#788590', ...props }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" {...props}>
            <path
                fill={color}
                fillRule="evenodd"
                d="M17 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V7l-4-4Zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3Zm3-10H5V5h10v4Z"
                clipRule="evenodd"
            />
        </svg>
    );
}

export default Save;
