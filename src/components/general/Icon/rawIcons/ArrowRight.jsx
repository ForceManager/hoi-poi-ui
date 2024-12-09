import React from 'react';

function ArrowRight({ color = '#335B70', ...props }) {
    return (
        <svg width={7} height={10} viewBox="0 0 7 10" fill="none" {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.775 0L.388 1.388 3.992 5 .388 8.612 1.775 10l5-5-5-5zM4.27 5L.666 1.388 4.27 5zM.666 8.612l1.11 1.11-1.11-1.11z"
                fill={color}
            />
        </svg>
    );
}

export default ArrowRight;
