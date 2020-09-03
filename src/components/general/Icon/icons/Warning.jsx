import React from 'react';

function Warning({ color }) {
    return (
        <svg viewBox="0 0 18 18">
            <path
                fill={color}
                fillRule="evenodd"
                d="M.75 15.75h16.5L9 1.5.75 15.75zm9-2.25h-1.5V12h1.5v1.5zm0-3h-1.5v-3h1.5v3z"
                clipRule="evenodd"
            />
        </svg>
    );
}

export default React.memo(Warning);
