import React from 'react';

function Magnifier({ color = '#788590', ...props }) {
    return (
        <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M12.208 13.338a7.5 7.5 0 1 1 1.13-1.13l.028.026 4.4 4.4a.8.8 0 1 1-1.132 1.132l-4.4-4.4a.813.813 0 0 1-.026-.028zM7.5 13a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11z"
                fill={color}
                fillRule="nonzero"
            />
        </svg>
    );
}

export default React.memo(Magnifier);
