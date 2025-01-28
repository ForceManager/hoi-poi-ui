import React from 'react';

function ChatFilled({ color = '#335B70', ...props }) {
    return (
        <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6 3a4 4 0 00-4 4v6.625a4 4 0 004 4h2v4.16l6.894-4.16H18a4 4 0 004-4V7a4 4 0 00-4-4H6z"
                fill={color}
            />
        </svg>
    );
}

export default React.memo(ChatFilled);
