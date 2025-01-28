import React from 'react';

function Storage({ color = '#335B70', ...props }) {
    return (
        <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M15.3 2H8.9L4.118 6.8 4.1 16.4c0 .88.72 1.6 1.6 1.6h9.6c.88 0 1.6-.72 1.6-1.6V3.6c0-.88-.72-1.6-1.6-1.6zm-4.8 4.8H8.9V3.6h1.6v3.2zm2.4 0h-1.6V3.6h1.6v3.2zm2.4 0h-1.6V3.6h1.6v3.2z"
                fill={color}
                fillRule="evenodd"
            />
        </svg>
    );
}

export default React.memo(Storage);
