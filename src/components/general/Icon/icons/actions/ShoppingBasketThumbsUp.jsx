import React from 'react';

function ShoppingBasketThumbsUp({ color = '#788590', ...props }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g fill="none" fillRule="evenodd">
                <path
                    d="M12 3c.29 0 .582.125.755.376l3.981 5.876h4.355c.5 0 .909.403.909.896l-.027.241-.677 2.433A6.972 6.972 0 0018 12c-1.71 0-3.277.613-4.493 1.63A1.82 1.82 0 0012 12.836c-1 0-1.818.806-1.818 1.79 0 .822.568 1.519 1.336 1.728A6.967 6.967 0 0011 19c0 .34.024.674.07 1H6.09a1.804 1.804 0 01-1.745-1.308L2.036 10.39A.744.744 0 012 10.148c0-.493.41-.896.91-.896h4.354l3.981-5.867A.893.893 0 0112 3zm0 2.31L9.273 9.253h5.454L12 5.31z"
                    fill={color}
                    fillRule="evenodd"
                />
                <path
                    d="M13 23h2v-6h-2v6zm11-5.5c0-.55-.45-1-1-1h-3.155l.475-2.285.015-.16a.753.753 0 00-.22-.53l-.53-.525-3.29 3.295A.978.978 0 0016 17v5c0 .55.45 1 1 1h4.5c.415 0 .77-.25.92-.61l1.51-3.525A.988.988 0 0024 18.5v-.955l-.005-.005.005-.04z"
                    fill={color}
                    fillRule="evenodd"
                />
            </g>
        </svg>
    );
}

export default ShoppingBasketThumbsUp;