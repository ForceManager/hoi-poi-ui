import React from 'react';

function Close({ color = '#788590', ...props }) {
    return (
        <svg width={9} height={8} viewBox="0 0 9 8" fill="none" {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.69 5.33l2.548 2.546L8.543 6.57 5.997 4.024 8.51 1.51 7.204.204 4.691 2.718 2.177.204.871 1.51l2.514 2.514L.838 6.57l1.306 1.306L4.691 5.33z"
                fill={color}
            />
        </svg>
    );
}

export default Close;
