import React from 'react';

const SecurePayment = ({ color, ...props }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.5 6.25h-.75V5.5c0-1.25-1-1.75-1.75-1.75s-1.75.5-1.75 1.77v.73H5.5c-.39 0-.75.36-.75.75l.5 3.48c0 .389 2.36 2.02 2.75 2.02.39 0 2.75-1.631 2.75-2.02l.5-3.48c0-.39-.36-.75-.75-.75zM8 9.75c-.39 0-.75-.36-.75-.75s.36-.75.75-.75.75.36.75.75-.36.75-.75.75zm1-3.5H6.985v-.73c0-.605.39-1.02 1.015-1.02.625 0 1 .415 1 1.02v.73z"
                fill={color}
            />
            <circle cx="8" cy="8" r="7" stroke={color} strokeWidth="2" fill="none" />
        </svg>
    );
};

export default React.memo(SecurePayment);
