import React from 'react';

function PhoneOutgoing({ color = '#788590', ...props }) {
    return (
        <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <g fillRule="evenodd" clipRule="evenodd" fill={color}>
                <path d="M4 3a1 1 0 0 0-1 1c0 9.389 7.611 17 17 17a1 1 0 0 0 1-1v-3.5a1 1 0 0 0-1-1c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 0 0-1.02.24l-2.2 2.2a15.045 15.045 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1A11.36 11.36 0 0 1 8.5 4a1 1 0 0 0-1-1H4Z" />
                <path d="M15 3v1.5h3.5L13 10l1 1 5.5-5.5V9H21V3h-6Z" />
            </g>
        </svg>
    );
}

export default PhoneOutgoing;
