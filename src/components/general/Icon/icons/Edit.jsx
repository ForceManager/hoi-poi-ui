import React from 'react';

function Edit({ color = '#335B70', ...props }) {
    return (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M3 17.75v3.75h3.75l11.06-11.06-3.75-3.75L3 17.75ZM20.71 7.54a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83Z"
                fill={color}
                fillRule="evenodd"
            />
        </svg>
    );
}

export default React.memo(Edit);
