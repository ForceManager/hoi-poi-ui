import React from 'react';

function Resend({ color = '#788590', ...props }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                fill={color}
                d="M5 19v-4c0-.833.292-1.542.875-2.125A2.893 2.893 0 0 1 8 12h9.175l-3.6 3.6L15 17l6-6-6-6-1.425 1.4 3.6 3.6H8c-1.383 0-2.563.488-3.537 1.463C3.487 12.438 3 13.617 3 15v4h2Z"
            />
        </svg>
    );
}

export default Resend;
