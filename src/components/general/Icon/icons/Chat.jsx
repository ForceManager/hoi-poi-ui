import React from 'react';

function Chat({ color = '#335B70', ...props }) {
    return (
        <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 15.625v2.617l4.337-2.617H18a2 2 0 002-2V7a2 2 0 00-2-2H6a2 2 0 00-2 2v6.625a2 2 0 002 2h4zm-2 6.16v-4.16H6a4 4 0 01-4-4V7a4 4 0 014-4h12a4 4 0 014 4v6.625a4 4 0 01-4 4h-3.106L8 21.785z"
                fill={color}
            />
        </svg>
    );
}

export default React.memo(Chat);
