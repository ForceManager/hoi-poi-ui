import React from 'react';

function Reply({ color = '#788590', ...props }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                fill={color}
                d="M19 19v-4c0-.833-.292-1.542-.875-2.125A2.893 2.893 0 0 0 16 12H6.825l3.6 3.6L9 17l-6-6 6-6 1.425 1.4-3.6 3.6H16c1.383 0 2.563.488 3.538 1.463C20.512 12.438 21 13.617 21 15v4h-2Z"
            />
        </svg>
    );
}

export default Reply;
