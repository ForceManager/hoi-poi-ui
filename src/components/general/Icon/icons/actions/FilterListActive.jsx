import React from 'react';

function FilterListActive({ color = '#788590', ...props }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g fill="none" fill-rule="evenodd">
                <path
                    d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm11 6.5c0 .17.01.336.028.5H6v-2h8.256c-.166.47-.256.974-.256 1.5z"
                    fill={color}
                    fillRule="evenodd"
                />
                <path
                    d="M18.5 15a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
                    fill="#FF8C00"
                    fillRule="evenodd"
                />
            </g>
        </svg>
    );
}

export default FilterListActive;
