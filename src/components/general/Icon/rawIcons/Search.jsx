import React from 'react';

function Search({ color = '#788590', ...props }) {
    return (
        <svg width={14} height={14} viewBox="0 0 14 14" fill="none" {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.006 8.805h-.633l-.224-.216a5.18 5.18 0 001.257-3.386 5.203 5.203 0 10-5.203 5.203 5.18 5.18 0 003.386-1.257l.216.224v.633L12.807 14 14 12.807l-3.994-4.002zm-4.803 0a3.597 3.597 0 01-3.602-3.602 3.597 3.597 0 013.602-3.602 3.597 3.597 0 013.602 3.602 3.597 3.597 0 01-3.602 3.602z"
                fill={color}
            />
        </svg>
    );
}

export default Search;
