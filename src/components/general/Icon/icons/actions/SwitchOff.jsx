import React from 'react';

function SwitchOff({ color = '#335B70', ...props }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g fill="none" fillRule="evenodd">
                <rect fill="#B5BDC5" x="8" y="8" width="14" height="8" rx="4" />
                <circle fill="#F0F3F5" cx="8" cy="12" r="6" />
            </g>
        </svg>
    );
}

export default SwitchOff;
