import React from 'react';

function Tick({ color, ...props }) {
    return (
        <svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M.912 4.496l-.86.704 3.276 4.004L9.949 1.32 9.1.606l-5.76 6.857z"
                fill={color}
                fillRule="nonzero"
            />
        </svg>
    );
}

export default React.memo(Tick);
