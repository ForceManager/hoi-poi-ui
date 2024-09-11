import React from 'react';

function Location({ color = '#788590', ...props }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
                fill={color}
                fillRule="evenodd"
                d="M4 8.7C4 4.443 7.577 1 12 1s8 3.443 8 7.7c0 5.775-8 14.3-8 14.3S4 14.475 4 8.7Zm5.143 0c0 1.518 1.28 2.75 2.857 2.75 1.577 0 2.857-1.232 2.857-2.75S13.577 5.95 12 5.95c-1.577 0-2.857 1.232-2.857 2.75Z"
                clipRule="evenodd"
            />
        </svg>
    );
}

export default React.memo(Location);
