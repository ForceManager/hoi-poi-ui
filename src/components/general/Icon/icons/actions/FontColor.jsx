import React from 'react';

function FontColor({ color = '#788590', ...props }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 15H18V18H0V15ZM8.25 2.25L4.125 12.75H5.8125L6.6525 10.5H11.34L12.18 12.75H13.8675L9.75 2.25H8.25ZM7.215 9L9 4.2525L10.785 9H7.215Z"
                fill={color}
            />
        </svg>
    );
}

export default FontColor;
