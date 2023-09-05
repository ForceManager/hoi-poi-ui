import React from 'react';

function ArrowRight({ color = '#788590', ...props }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
            <path
                fill={color}
                fillRule="evenodd"
                d="M3 9l1.058-1.058 4.192 4.185V3h1.5v9.127l4.193-4.185L15 9l-6 6z"
                transform="rotate(-90) translate(-18, 0)"
            />
        </svg>
    );
}

export default React.memo(ArrowRight);
