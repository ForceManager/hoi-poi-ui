import React from 'react';

function Trash({ color, ...props }) {
    return (
        <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M12.5 5h-1v11h1V5zm2 0v12a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1V5h-1a1 1 0 1 1 0-2h3V1a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v2h3a1 1 0 0 1 0 2h-1zm-5 0h-1v11h1V5zm-3 0h-1v11h1V5zm1-3v1h3V2h-3z"
                fill={color}
                fillRule="evenodd"
            />
        </svg>
    );
}

export default React.memo(Trash);
