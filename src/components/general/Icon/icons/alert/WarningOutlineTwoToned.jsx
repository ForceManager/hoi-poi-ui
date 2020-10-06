import React from 'react';

function WarningOutlineTwoToned({ color = '#788590', ...props }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g fill="none" fillRule="evenodd">
                <path fill="#788590" d="M12 2L1 21h22" />
                <path d="M12 6l7.53 13H4.47L12 6zm1 10h-2v2h2v-2zm0-6h-2v4h2v-4z" fill="#CED4D9" />
            </g>
        </svg>
    );
}

export default WarningOutlineTwoToned;
