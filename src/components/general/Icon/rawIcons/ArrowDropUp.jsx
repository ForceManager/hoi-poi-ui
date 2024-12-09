import React from 'react';

function ArrowDropUp({ color = '#335B70', ...props }) {
    return (
        <svg width={11} height={6} viewBox="0 0 11 6" fill="none" {...props}>
            <path fillRule="evenodd" clipRule="evenodd" d="M.775 6l5-6 5 6h-10z" fill={color} />
        </svg>
    );
}

export default ArrowDropUp;
