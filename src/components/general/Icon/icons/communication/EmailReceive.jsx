import React from 'react';

function EmailReceive({ color = '#A9B1B9', color2 = '#00A8BE', ...props }) {
    return (
        <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <path
                d="M12.0224 6H4C2.9 6 2.01 6.9 2.01 8L2 20C2 21.1 2.9 22 4 22H20C21.1 22 22 21.1 22 20V9.66308C21.0046 11.0766 19.3602 12 17.5 12C17.2832 12 17.0694 11.9875 16.8591 11.9631L12 15L4 10V8L12 13L14.7642 11.2724C13.1124 10.3234 12 8.54163 12 6.5C12 6.33146 12.0076 6.16468 12.0224 6Z"
                fill={color}
            />
            <path
                d="M20.25 9V7.6875H17.1875L22 2.875L21.125 2L16.3125 6.8125V3.75H15V9H20.25Z"
                fill={color2}
            />
        </svg>
    );
}

export default EmailReceive;
