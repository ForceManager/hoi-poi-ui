import React from 'react';

function DraggableSort({ color = '#788590', ...props }) {
    return (
        <svg viewBox="0 0 24 24" {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2l3 3H9l3-3zM2 15v2h20v-2H2zm0-4v2h20v-2H2zm0-4v2h20V7H2zm7 12l3 3 3-3H9z"
                fill={color}
            />
        </svg>
    );
}

export default React.memo(DraggableSort);
