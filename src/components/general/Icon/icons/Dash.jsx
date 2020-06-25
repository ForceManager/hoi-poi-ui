import React from 'react';

function Dash({ color = '#788590', ...props }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <path fillRule="evenodd" clipRule="evenodd" d="M19 13H5v-2h14v2z" fill={color} />
            <mask id="prefix__a" maskUnits="userSpaceOnUse" x={5} y={11} width={14} height={2}>
                <path fillRule="evenodd" clipRule="evenodd" d="M19 13H5v-2h14v2z" fill="#fff" />
            </mask>
        </svg>
    );
}

export default Dash;
