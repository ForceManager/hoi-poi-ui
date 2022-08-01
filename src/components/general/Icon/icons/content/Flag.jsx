import React from 'react';

function Flag({ color = '#788590', ...props }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.4 6 14 4H5v17h2v-7h5.6l.4 2h7V6h-5.6Z"
                fill={color}
            />
        </svg>
    );
}

export default Flag;
