import React from 'react';

function SortArrowUpward({ color = '#788590', ...props }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <path
                d="M12 3.25L6 9.235h4.5V19.75h3V9.235H18L12 3.25z"
                fill={color}
                fillRule="evenodd"
            />
        </svg>
    );
}

export default SortArrowUpward;
