import React from 'react';

function Cloud({ color = '#788590', ...props }) {
    return (
        <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M15.88 8.432A5.992 5.992 0 0 0 10 3.6a5.997 5.997 0 0 0-5.32 3.232A4.795 4.795 0 0 0 .4 11.6c0 2.648 2.152 4.8 4.8 4.8h10.4c2.208 0 4-1.792 4-4a3.98 3.98 0 0 0-3.72-3.968z"
                fill={color}
                fillRule="evenodd"
            />
        </svg>
    );
}

export default React.memo(Cloud);
