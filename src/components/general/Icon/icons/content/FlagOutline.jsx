import React from 'react';

function FlagOutline({ color = '#788590', ...props }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="m12.36 6 .4 2H18v6h-3.36l-.4-2H7V6h5.36ZM14 4H5v17h2v-7h5.6l.4 2h7V6h-5.6"
                fill={color}
            />
        </svg>
    );
}

export default FlagOutline;
