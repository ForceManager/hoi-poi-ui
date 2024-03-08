import React from 'react';

function Merge({ color = '#788590', ...props }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <path
                fill={color}
                fillRule="evenodd"
                d="m17 20.91 1.41-1.41L15 16.09l-1.41 1.41L17 20.91ZM7.5 8.5H11v5.59L5.59 19.5 7 20.91l6-6V8.5h3.5L12 4 7.5 8.5Z"
                clipRule="evenodd"
            />
        </svg>
    );
}

export default Merge;
