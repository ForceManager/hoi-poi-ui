import React from 'react';

function Lock({ color = '#335B70', ...props }) {
    return (
        <svg width={11} height={14} viewBox="0 0 11 14" fill="none" {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.333 4.667h-.666V3.333a3.335 3.335 0 00-6.667 0v1.334h-.667C.6 4.667 0 5.267 0 6v6.667C0 13.4.6 14 1.333 14h8c.734 0 1.334-.6 1.334-1.333V6c0-.733-.6-1.333-1.334-1.333zm-4 6C4.6 10.667 4 10.067 4 9.333 4 8.6 4.6 8 5.333 8c.734 0 1.334.6 1.334 1.333 0 .734-.6 1.334-1.334 1.334zm2.067-6H3.267V3.333c0-1.14.926-2.066 2.066-2.066 1.14 0 2.067.926 2.067 2.066v1.334z"
                fill={color}
            />
        </svg>
    );
}

export default Lock;
