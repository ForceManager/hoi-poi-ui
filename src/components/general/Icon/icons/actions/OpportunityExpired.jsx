import React from 'react';

function OpportunityExpired({ color = '#335B70', ...props }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g fill="none" fillRule="evenodd">
                <path
                    d="M7 14v2h2v-2h6v2h2v-2l1.834-.001-4.083 7L5 21c-1.06 0-1.919-.81-1.995-1.85L3 19l.01-5H7zm7-11c1.06 0 1.919.81 1.995 1.85L16 5v1h4c1.05 0 1.918.82 1.994 1.851L22 8v3c0 .913-.62 1.688-1.46 1.925L20 12l-.583 1H17v-2h-2v2H9v-2H7v2H4c-1.06 0-1.919-.81-1.995-1.85L2 11V8c0-1.05.82-1.918 1.851-1.994L4 6h3.999L8 5c0-1.06.81-1.919 1.85-1.995L10 3h4zm0 2h-4v1h4V5z"
                    fill={color}
                />
                <path
                    d="M16 22h8l-4-7-4 7zm4.364-1.105h-.728v-.737h.728v.737zm0-1.474h-.728v-1.474h.728v1.474z"
                    fill="#F04540"
                />
            </g>
        </svg>
    );
}

export default OpportunityExpired;
