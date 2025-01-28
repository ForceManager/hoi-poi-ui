import React from 'react';

function ArrowDown({ color = '#335B70', ...props }) {
    return (
        <svg width={11} height={8} viewBox="0 0 11 8" fill="none" {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.775 2.194L9.388.806 5.775 4.411 2.163.806.775 2.194l5 5 5-5zm-5 2.495l3.613-3.605L5.775 4.69zM2.163 1.084l-1.11 1.11 1.11-1.11z"
                fill={color}
            />
        </svg>
    );
}

export default ArrowDown;
