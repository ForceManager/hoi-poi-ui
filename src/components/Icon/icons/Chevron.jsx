import React from 'react';

function Chevron({ color, ...props }) {
    return (
        <svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M5 5.836l3.67-3.212a.5.5 0 0 1 .66.752L5.334 6.872a.499.499 0 0 1-.67 0L.671 3.376a.5.5 0 0 1 .658-.752L5 5.836z"
                fill={color}
                fillRule="evenodd"
            />
        </svg>
    );
}

export default React.memo(Chevron);
