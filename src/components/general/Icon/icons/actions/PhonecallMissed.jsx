import React from 'react';

function PhonecallMissed({ color = '#7D8A96', ...props }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" {...props}>
            <path
                fill="#FF8C00"
                fillRule="evenodd"
                d="M6.24 5.5l5.28 5.5 6.72-7-.96-1-5.76 6L7.2 4.5h3.36V3H4.8v6h1.44V5.5z"
                clipRule="evenodd"
            />
            <path
                fill={color}
                fillRule="evenodd"
                d="M22.762 16.67C19.834 13.78 15.878 12 11.52 12 7.162 12 3.206 13.78.278 16.67c-.172.18-.278.43-.278.71 0 .28.106.53.278.71l2.381 2.48c.173.18.413.29.682.29.259 0 .499-.11.672-.28.758-.74 1.622-1.36 2.553-1.85a1 1 0 00.538-.9v-3.1c1.392-.48 2.88-.73 4.416-.73 1.536 0 3.024.25 4.416.72v3.1c0 .39.22.74.538.9.94.49 1.795 1.12 2.563 1.85.173.18.413.28.672.28.269 0 .509-.11.681-.29l2.381-2.48a1.018 1.018 0 00-.009-1.41z"
                clipRule="evenodd"
            />
        </svg>
    );
}

export default PhonecallMissed;
