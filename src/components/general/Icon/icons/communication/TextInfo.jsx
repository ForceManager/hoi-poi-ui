import React from 'react';

function TextInfo({ color = '#788590', ...props }) {
    return (
        <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <path
                d="M20 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2ZM4 6v12h16V6H4Zm2 3h12v2H6V9Zm0 4h10v2H6v-2Z"
                fill={color}
            />
        </svg>
    );
}

export default TextInfo;
