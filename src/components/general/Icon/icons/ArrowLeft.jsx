import React from 'react';

function ArrowLeft({ color = '#335B70', ...props }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
            <path
                fill={color}
                fillRule="evenodd"
                d="M3 9l1.058-1.058 4.192 4.185V3h1.5v9.127l4.193-4.185L15 9l-6 6z"
                transform="rotate(90) translate(0, -18)"
            />
        </svg>
    );
}

export default React.memo(ArrowLeft);
