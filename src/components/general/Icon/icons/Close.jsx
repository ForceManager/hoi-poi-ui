import React from 'react';

function Close({ color, ...props }) {
    return (
        <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M9 7.409l7.08-7.08a1.125 1.125 0 1 1 1.59 1.591L10.591 9l7.08 7.08a1.125 1.125 0 1 1-1.591 1.59L9 10.591l-7.08 7.08A1.125 1.125 0 1 1 .33 16.08L7.409 9 .329 1.92A1.125 1.125 0 0 1 1.92.33L9 7.409z"
                fill={color}
                fillRule="nonzero"
            />
        </svg>
    );
}

export default React.memo(Close);
