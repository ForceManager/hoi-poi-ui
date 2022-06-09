import React from 'react';

function EmailReceive({ color = '#788590', color2 = '#FF8C00', ...props }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <g fill="none" fillRule="evenodd">
                <path
                    d="M20 3H4a2 2 0 00-2 2v12a2 2 0 002 2h7.35a5.8 5.8 0 01-.35-2 6 6 0 0111-3.31V5a2 2 0 00-2-2m0 4l-8 5-8-5V5l8 5 8-5v2z"
                    fill={color}
                />
                <path fill={color2} d="M22 19h-4v3l-5-4.5 5-4.5v3h4v3" />
            </g>
        </svg>
    );
}

export default EmailReceive;
