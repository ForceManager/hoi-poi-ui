import React from 'react';

function ErrorOutlineTwoToned({ color = '#335B70', ...props }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g fill="none" fillRule="evenodd">
                <path
                    d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2z"
                    fill="#788590"
                />
                <path
                    d="M12 4c4.42 0 8 3.58 8 8s-3.58 8-8 8-8-3.58-8-8 3.58-8 8-8zm1 11h-2v2h2v-2zm0-8h-2v6h2V7z"
                    fill="#CED4D9"
                />
            </g>
        </svg>
    );
}

export default ErrorOutlineTwoToned;
