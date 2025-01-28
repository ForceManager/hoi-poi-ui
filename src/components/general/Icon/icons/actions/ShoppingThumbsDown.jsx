import React from 'react';

function ShoppingThumbsDown({ color = '#335B70', ...props }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g fill="none" fillRule="evenodd">
                <path
                    d="M8 18c1.1 0 2 .9 2 2s-.9 2-2 2-1.99-.9-1.99-2S6.9 18 8 18zM5.27 2l.94 2H21a1.003 1.003 0 01.88 1.48l-2.562 4.644A7.044 7.044 0 0018 10a6.99 6.99 0 00-5.746 3H9.1l-.9 1.63-.03.12c0 .14.11.25.25.25h2.87a7.007 7.007 0 00-.29 2H8c-1.1 0-2-.9-2-2 0-.35.09-.68.25-.96l1.35-2.45L4 4H2V2h3.27z"
                    fill={color}
                    fillRule="evenodd"
                />
                <path
                    d="M13 14h2v6h-2v-6zm11 5.5c0 .55-.45 1-1 1h-3.155l.475 2.285.015.16a.753.753 0 01-.22.53l-.53.525-3.29-3.295A.978.978 0 0116 20v-5c0-.55.45-1 1-1h4.5c.415 0 .77.25.92.61l1.51 3.525c.045.115.07.235.07.365v.955l-.005.005.005.04z"
                    fill={color}
                    fillRule="evenodd"
                />
            </g>
        </svg>
    );
}

export default ShoppingThumbsDown;
