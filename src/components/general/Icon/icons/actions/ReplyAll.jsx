import React from 'react';

function ReplyAll({ color = '#335B70', ...props }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                fill={color}
                d="m8 17-6-6 6-6 1.425 1.4-4.6 4.6 4.6 4.6L8 17Zm12 2v-4c0-.833-.292-1.542-.875-2.125A2.893 2.893 0 0 0 17 12h-6.175l3.6 3.6L13 17l-6-6 6-6 1.425 1.4-3.6 3.6H17c1.383 0 2.563.488 3.538 1.463C21.512 12.438 22 13.617 22 15v4h-2Z"
            />
        </svg>
    );
}

export default ReplyAll;
