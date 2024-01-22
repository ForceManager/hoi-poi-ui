import React from 'react';

function FontSize({ color = '#788590', ...props }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.75 3V5.25H10.5V14.25H12.75V5.25H16.5V3H6.75ZM2.25 9H4.5V14.25H6.75V9H9V6.75H2.25V9Z"
                fill={color}
            />
        </svg>
    );
}

export default FontSize;
