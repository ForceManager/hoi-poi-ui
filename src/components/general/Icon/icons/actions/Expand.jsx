import React from 'react';

function Expand({ color = '#335B70', ...props }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g fill="none" fillRule="evenodd">
                <path d="M18 6v12H6V6h12zM8 11v5h5l-5-5zm8-3h-5l5 5V8z" fill={color} />
                <rect stroke={color} strokeWidth="2" x="4" y="4" width="16" height="16" rx="2" />
            </g>
        </svg>
    );
}

export default Expand;
