import React from 'react';

function PhonecallOut({ color = '#A9B1B9', ...props }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" {...props}>
            <path
                fill={color}
                fillRule="evenodd"
                d="M4 3a1 1 0 00-1 1c0 9.389 7.611 17 17 17a.997.997 0 001-1v-3.5a1 1 0 00-1-1c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 00-1.02.24l-2.2 2.2a15.045 15.045 0 01-6.59-6.59l2.2-2.21a.96.96 0 00.25-1A11.36 11.36 0 018.5 4a1 1 0 00-1-1H4z"
                clipRule="evenodd"
            />
            <path
                fill="#FF8C00"
                fillRule="evenodd"
                d="M15 3v1.5h3.5L13 10l1 1 5.5-5.5V9H21V3h-6z"
                clipRule="evenodd"
            />
        </svg>
    );
}

export default PhonecallOut;
