import React from 'react';

function CheckBoxOutlineBlank({ color = '#788590', ...props }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <path
                d="M19 5v14H5V5h14zm0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
                fill={color}
                fillRule="evenodd"
            />
        </svg>
    );
}

export default CheckBoxOutlineBlank;
