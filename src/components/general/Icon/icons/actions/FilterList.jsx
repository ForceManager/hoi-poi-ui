import React from 'react';

function FilterList({ color = '#335B70', ...props }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
                d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"
                fill={color}
                fillRule="evenodd"
            />
        </svg>
    );
}

export default FilterList;
