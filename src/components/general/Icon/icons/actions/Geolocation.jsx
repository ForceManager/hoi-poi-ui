import React from 'react';

function Geolocation({ color = '#788590', ...props }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" {...props}>
            <path
                d="M10 2a5.606 5.606 0 0 0-5.6 5.6C4.4 11.8 10 18 10 18s5.6-6.2 5.6-10.4C15.6 4.512 13.088 2 10 2zm3.2 6.4h-2.4v2.4H9.2V8.4H6.8V6.8h2.4V4.4h1.6v2.4h2.4v1.6z"
                fill={color}
                fillRule="evenodd"
            />
        </svg>
    );
}

export default Geolocation;
