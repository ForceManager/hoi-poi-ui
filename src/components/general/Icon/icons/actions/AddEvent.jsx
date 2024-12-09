import React from 'react';

function AddEvent({ color = '#335B70', ...props }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
                d="M16.375 10.75a5.625 5.625 0 110 11.25 5.625 5.625 0 010-11.25zM8 1v2h8V1h2v2h1c1.05 0 1.918.82 1.994 1.851L21 5l.001 5.5a7.48 7.48 0 00-2-1.073L19 8H5v11h4.427a7.48 7.48 0 001.072 2.001L5 21a2 2 0 01-1.995-1.851L3 19l.01-14c0-1.05.802-1.918 1.84-1.994L5 3h1V1h2zm9 12.25h-1.25v2.499l-2.5.001V17l2.5-.001V19.5H17V17h2.5v-1.25H17v-2.5zM7 14h2.426a7.47 7.47 0 00-.41 2H7v-2zm5.755-4a7.533 7.533 0 00-2.256 2H7v-2h5.755z"
                fill={color}
                fillRule="evenodd"
            />
        </svg>
    );
}

export default AddEvent;
