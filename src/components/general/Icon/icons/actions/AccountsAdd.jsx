import React from 'react';

function AccountsAdd({ color = '#788590', ...props }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18 13c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm2.5 5.5h-2v2h-1v-2h-2v-1h2v-2h1v2h2v1z"
                fill={color}
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.583 11.18a7.024 7.024 0 00-2.41-.132V8.69h-2.41v2.448h1.847a6.988 6.988 0 00-3.655 2.01v-.174h-2.41v2.448h.945c-.157.396-.28.81-.362 1.239h-1.51c-.48 0-.871.382-.871.851v3.604a.43.43 0 01-.435.426H5.657c-.96 0-1.74-.764-1.74-1.703V3.66c0-.939.78-1.703 1.74-1.703h12.186c.96 0 1.74.764 1.74 1.703v7.519zm-8.582 6.69L11 18c0 1.292.35 2.503.96 3.542H9.943V17.87h1.06zm3.762-13.464h2.41v2.448h-2.41V4.406zM10.545 8.69h2.41v2.448h-2.41V8.69zm-1.808 4.284h-2.41v2.448h2.41v-2.448zm4.218-8.568h-2.41v2.448h2.41V4.406zm-6.628 0h2.41v2.448h-2.41V4.406zm2.41 4.284h-2.41v2.448h2.41V8.69z"
                fill={color}
            />
        </svg>
    );
}

export default AccountsAdd;
