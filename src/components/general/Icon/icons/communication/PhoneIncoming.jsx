import React from 'react';

function PhoneIncoming({ color = '#A9B1B9', color2 = '#00A8BE', ...props }) {
    return (
        <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <path
                d="M4 3a1 1 0 0 0-1 1c0 9.389 7.611 17 17 17a1 1 0 0 0 1-1v-3.5a1 1 0 0 0-1-1c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 0 0-1.02.24l-2.2 2.2a15.045 15.045 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1A11.36 11.36 0 0 1 8.5 4a1 1 0 0 0-1-1H4Z"
                fill={color}
            />
            <path d="M19 11V9.5h-3.5L21 4l-1-1-5.5 5.5V5H13v6h6Z" fill={color2} />
        </svg>
    );
}

export default PhoneIncoming;
