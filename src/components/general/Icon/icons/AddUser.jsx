import React from 'react';

function AddUser({ color = '#788590', ...props }) {
    return (
        <svg viewBox="0 0 22 16" fill="none" {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14 8c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zM5 6V3H3v3H0v2h3v3h2V8h3V6H5zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                fill={color}
            />
        </svg>
    );
}

export default AddUser;
