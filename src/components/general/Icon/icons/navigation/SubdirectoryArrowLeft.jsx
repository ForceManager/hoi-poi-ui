import React from 'react';

function SubdirectoryArrowLeft({ color = '#788590', ...props }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <path
                d="M11 9l1.42 1.42L8.83 14H18V4h2v12H8.83l3.59 3.58L11 21l-6-6z"
                fill={color}
                fillRule="evenodd"
            />
        </svg>
    );
}

export default SubdirectoryArrowLeft;
