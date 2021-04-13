import React, { memo } from 'react';

function ValueList({ color = '#7D8A96', ...props }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7 7V5h14v2H7zm0 4V9h14v2H7zm0 2v2h14v-2H7zm0 6v-2h14v2H7zM5 9v2H3V9h2zm0-2V5H3v2h2zm0 6v2H3v-2h2zm0 6v-2H3v2h2z"
                fill={color}
            />
        </svg>
    );
}

export default memo(ValueList);
