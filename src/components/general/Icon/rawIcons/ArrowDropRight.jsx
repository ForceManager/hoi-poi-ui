import React from 'react';

function ArrowDropRight({ color = '#788590', ...props }) {
    return (
        <svg width={7} height={10} viewBox="0 0 7 10" fill="none" {...props}>
            <path fillRule="evenodd" clipRule="evenodd" d="M.775 0l6 5-6 5V0z" fill={color} />
        </svg>
    );
}

export default ArrowDropRight;
