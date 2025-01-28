import React from 'react';

function ArrowUp({ color = '#335B70', ...props }) {
    return (
        <svg width={11} height={8} viewBox="0 0 11 8" fill="none" {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M.775 5.806l1.388 1.388 3.612-3.605 3.613 3.605 1.387-1.388-5-5-5 5zm5-2.495L2.163 6.916 5.775 3.31zm3.613 3.605l1.11-1.11-1.11 1.11z"
                fill={color}
            />
        </svg>
    );
}

export default ArrowUp;
