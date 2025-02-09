import React from 'react';

function WarningOutline({ color = '#335B70', ...props }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
                d="M12 2L1 21h22M12 6l7.53 13H4.47M11 10v4h2v-4m-2 6v2h2v-2"
                fill={color}
                fillRule="evenodd"
            />
        </svg>
    );
}

export default WarningOutline;
