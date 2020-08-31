import React from 'react';

function Dash({ color = '#788590', ...props }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <path fillRule="evenodd" clipRule="evenodd" d="M19 13H5v-2h14v2z" fill={color} />
        </svg>
    );
}

export default Dash;
