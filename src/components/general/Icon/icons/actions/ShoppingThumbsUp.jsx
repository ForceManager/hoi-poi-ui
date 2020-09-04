import React from 'react';

function ShoppingThumbsUp({ color = '#788590', ...props }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g fill="none" fillRule="evenodd">
                <path
                    d="M8 18c1.1 0 2 .9 2 2s-.9 2-2 2-1.99-.9-1.99-2S6.9 18 8 18zM5.27 2l.94 2H21a1.003 1.003 0 01.88 1.48l-3.047 5.522A6.976 6.976 0 0014.1 13h-5l-.9 1.63-.03.12c0 .14.11.25.25.25h4.253a6.952 6.952 0 00-.602 2H8c-1.1 0-2-.9-2-2 0-.35.09-.68.25-.96l1.35-2.45L4 4H2V2h3.27z"
                    fill={color}
                    fillRule="evenodd"
                />
                <path
                    d="M13 22h2v-6h-2v6zm11-5.5c0-.55-.45-1-1-1h-3.155l.475-2.285.015-.16a.753.753 0 00-.22-.53l-.53-.525-3.29 3.295A.978.978 0 0016 16v5c0 .55.45 1 1 1h4.5c.415 0 .77-.25.92-.61l1.51-3.525A.988.988 0 0024 17.5v-.955l-.005-.005.005-.04z"
                    fill={color}
                    fillRule="evenodd"
                />
            </g>
        </svg>
    );
}

export default ShoppingThumbsUp;
