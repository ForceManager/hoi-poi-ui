import React from 'react';

function OpportunityThumbsDown({ color = '#788590', ...props }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g fill="none" fillRule="evenodd">
                <path
                    d="M16 16h1.455v4.2H16V16zm8 3.85c0 .385-.327.7-.727.7h-2.295l.346 1.6.01.112a.517.517 0 01-.16.37L20.79 23l-2.393-2.306a.672.672 0 01-.214-.494v-3.5c0-.385.327-.7.727-.7h3.273c.302 0 .56.175.669.427l1.098 2.468c.033.08.051.164.051.255v.669l-.004.003.004.028z"
                    fill="#F04540"
                />
                <path
                    d="M7 14v2h2v-2h6v1.392A6.97 6.97 0 0014 19c0 .695.101 1.367.29 2H5c-1.11 0-2-.89-2-2l.01-5H7zm7-11c1.11 0 2 .89 2 2v1h4c1.05 0 1.918.82 1.994 1.851L22 8v3c0 .379-.107.733-.291 1.036a6.97 6.97 0 00-4.317.964H17v-2h-2v2H9v-2H7v2H4c-1.11 0-2-.89-2-2V8c0-1.1.9-2 2-2h3.999L8 5c0-1.06.81-1.919 1.85-1.995L10 3zm0 2h-4v1h4V5z"
                    fill={color}
                />
            </g>
        </svg>
    );
}

export default OpportunityThumbsDown;
