import React from 'react';

function ZoomCam({ color = '#788590', ...props }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
                d="M17 14.4v1.8c0 .996-.837 1.8-1.875 1.8H5.75C3.675 18 2 16.392 2 14.4V7.8C2 6.804 2.837 6 3.875 6h9.375C15.325 6 17 7.608 17 9.6l3.5-2.52c.613-.444 1.5-.024 1.5.72v8.4c0 .744-.887 1.164-1.5.72L17 14.4z"
                fill={color}
                fillRule="evenodd"
            />
        </svg>
    );
}

export default ZoomCam;
