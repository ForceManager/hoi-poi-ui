import React from 'react';

function Calendar({ color = '#788590', ...props }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
            <path
                fill={color}
                fillRule="evenodd"
                d="M15 2V1a1 1 0 00-2 0v1H5V1a1 1 0 10-2 0v1H2C.89 2 .01 2.9.01 4L0 16a2 2 0 002 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2h-1zM2 16V6h14v10H2zm2-7a1 1 0 001 1h8a1 1 0 000-2H5a1 1 0 00-1 1zm0 4a1 1 0 001 1h8a1 1 0 000-2H5a1 1 0 00-1 1z"
            ></path>
        </svg>
    );
}

export default React.memo(Calendar);
