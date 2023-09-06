import React from 'react';

function Tick({ color = '#788590', ...props }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10">
            <path
                d="M3.475 6.61l-2.32-2.415L0 5.397 3.464 9 10 2.201 8.845 1l-5.37 5.61z"
                fill={color}
                fillRule="evenodd"
            />
        </svg>
    );
}

export default React.memo(Tick);
