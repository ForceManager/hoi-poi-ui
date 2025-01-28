import React from 'react';

function FileDownload({ color = '#335B70', ...props }) {
    return (
        <svg viewBox="0 0 24 24" {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"
                fill={color}
            />
        </svg>
    );
}

export default React.memo(FileDownload);
