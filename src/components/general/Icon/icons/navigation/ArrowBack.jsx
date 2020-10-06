import React from 'react';

function ArrowBack({ color = '#788590', ...props }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
                d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"
                fill={color}
                fillRule="evenodd"
            />
        </svg>
    );
}

export default ArrowBack;
