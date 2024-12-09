import React from 'react';

const SyncEmail = ({ color = '#335B70', ...props }) => (
    <svg {...props} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
            d="M3 4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h10.5a6.5 6.5 0 0 1-.5-2H3V8l8 5 8-5v3c.167-.006.333-.006.5 0a6.5 6.5 0 0 1 1.5.18V6c0-1.1-.9-2-2-2H3Zm0 2h16l-8 5-8-5Zm16 6-2.25 2.25L19 16.5V15a2.5 2.5 0 0 1 2.5 2.5c0 .4-.09.78-.26 1.12l1.09 1.09c.42-.63.67-1.39.67-2.21 0-2.21-1.79-4-4-4V12Zm-3.33 3.29c-.42.63-.67 1.39-.67 2.21 0 2.21 1.79 4 4 4V23l2.25-2.25L19 18.5V20a2.5 2.5 0 0 1-2.5-2.5c0-.4.09-.78.26-1.12l-1.09-1.09Z"
            fill={color}
        />
        <circle cx={20} cy={5} r={4} fill="#FF8C00" />
    </svg>
);

export default SyncEmail;
