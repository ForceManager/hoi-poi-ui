import React from 'react';

function ArrowDropUp({ color = '#788590', ...props }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <path d="M7 14l5-5 5 5z" fill={color} fillRule="evenodd" />
        </svg>
    );
}

export default ArrowDropUp;
