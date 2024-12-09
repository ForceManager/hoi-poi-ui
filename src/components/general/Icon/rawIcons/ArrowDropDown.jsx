import React from 'react';

function ArrowDropDown({ color = '#335B70', ...props }) {
    return (
        <svg width={11} height={6} viewBox="0 0 11 6" fill="none" {...props}>
            <path fillRule="evenodd" clipRule="evenodd" d="M10.775 0l-5 6-5-6h10z" fill={color} />
        </svg>
    );
}

export default ArrowDropDown;
