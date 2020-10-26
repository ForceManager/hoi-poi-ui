import React from 'react';

function ChevronRight({ color = '#788590', ...props }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <path
                d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
                fill={color}
                fillRule="evenodd"
            />
        </svg>
    );
}

export default ChevronRight;
