import React from 'react';

function NewWidget({ color = '#788590', ...props }) {
    return (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                fill={color}
                d="M20 14H18V17H15V19H18V22H20V19H23V17H20V14V14Z"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                fill={color}
                d="M19.49 7.35L16.66 4.52L13.83 7.35L16.66 10.18L19.49 7.35ZM9 9V5H5V9H9ZM9 19V15H5V19H9ZM11 7.34L16.66 1.69L22.32 7.34L17.4607 12.1993C17.0555 12.3065 16.6671 12.4551 16.3002 12.6403L11 7.34ZM11 7.34V3H3V11H11V7.34ZM3 13H11V21H3V13Z"
            />
        </svg>
    );
}

export default NewWidget;
