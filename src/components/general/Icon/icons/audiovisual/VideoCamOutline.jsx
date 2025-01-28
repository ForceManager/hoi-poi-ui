import React from 'react';

function VideoCamOutline({ color = '#335B70', ...props }) {
    return (
        <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 6h12a1 1 0 0 1 1 1v3.5l4-4v11l-4-4V17a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Zm11 10V8H5v8h10Z"
                fill={color}
            />
        </svg>
    );
}

export default VideoCamOutline;
