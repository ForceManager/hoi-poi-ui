import React from 'react';

function AttachFile({ color = '#788590', ...props }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18" {...props}>
            <path
                fill={color}
                fillRule="evenodd"
                d="M13.875 12H5.25a3 3 0 110-6h9.375a1.876 1.876 0 010 3.75H6.75C6.338 9.75 6 9.412 6 9s.338-.75.75-.75h7.125V7.125H6.75a1.876 1.876 0 000 3.75h7.875a3 3 0 100-6H5.25A4.123 4.123 0 001.125 9a4.123 4.123 0 004.125 4.125h8.625V12z"
                clipRule="evenodd"
            />
        </svg>
    );
}

export default AttachFile;
