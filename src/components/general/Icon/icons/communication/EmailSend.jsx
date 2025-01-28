import React from 'react';

function EmailSend({ color = '#A9B1B9', color2 = '#007E45', ...props }) {
    return (
        <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <path
                d="M12.0224 6H4C2.9 6 2.01 6.9 2.01 8L2 20C2 21.1 2.9 22 4 22H20C21.1 22 22 21.1 22 20V8.66308C21.1996 9.79974 19.9794 10.6195 18.5648 10.897L12 15L4 10V8L12 13L15.6885 10.6947C13.6915 9.99838 12.2192 8.18311 12.0224 6Z"
                fill={color}
            />
            <path
                d="M16.75 2V3.3125H19.8125L15 8.125L15.875 9L20.6875 4.1875V7.25H22V2H16.75Z"
                fill={color2}
            />
        </svg>
    );
}

export default EmailSend;
