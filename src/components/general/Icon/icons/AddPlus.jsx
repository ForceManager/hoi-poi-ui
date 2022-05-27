import React from 'react';

function AddPlus({ color = '#788590', ...props }) {
    return (
        <svg viewBox="0 0 24 24" {...props}>
            <g fill="none" fillRule="evenodd">
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z" fill={color} />
            </g>
        </svg>
    );
}

export default AddPlus;
