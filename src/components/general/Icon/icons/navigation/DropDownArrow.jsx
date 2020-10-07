import * as React from 'react';

function DropDownArrow({ color = '#788590', ...props }) {
    return (
        <svg viewBox="0 0 10 6" fill="none" {...props}>
            <path fillRule="evenodd" clipRule="evenodd" d="M0 .5l5 5 5-5H0z" fill={color} />
        </svg>
    );
}

export default DropDownArrow;
