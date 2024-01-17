import React from 'react';

function TrackingLink({ color = '#788590', ...props }) {
    return (
        <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" {...props}>
            <path
                d="M1.5 9V7.5H3.75V9H1.5ZM4.05 13.1625L3 12.075L4.575 10.5L5.6625 11.55L4.05 13.1625ZM4.575 6L3 4.425L4.05 3.3375L5.6625 4.95L4.575 6ZM13.5 15L9.9375 11.4375L9 14.25L6.75 6.75L14.25 9L11.475 9.975L15 13.5L13.5 15ZM7.5 4.5V2.25H9V4.5H7.5ZM11.925 6L10.8375 4.95L12.45 3.3375L13.5 4.3875L11.925 6Z"
                fill={color}
            />
        </svg>
    );
}

export default TrackingLink;
