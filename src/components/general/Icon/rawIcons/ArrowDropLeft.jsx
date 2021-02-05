import React from 'react';

function ArrowDropLeft({ color = '#788590', ...props }) {
    return (
        <svg width={7} height={10} viewBox="0 0 7 10" fill="none" {...props}>
            <path fillRule="evenodd" clipRule="evenodd" d="M6.775 10l-6-5 6-5v10z" fill={color} />
        </svg>
    );
}

export default ArrowDropLeft;
