import React, { memo } from 'react';

function Switch({ color = '#7D8A96', ...props }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8 6a6 6 0 100 12h8a6 6 0 000-12H8zm0 10a4 4 0 100-8 4 4 0 000 8z"
                fill={color}
            />
        </svg>
    );
}

export default memo(Switch);
