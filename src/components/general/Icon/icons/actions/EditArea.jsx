import React from 'react';

function EditArea({ color = '#788590', ...props }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
            <path
                fill={color}
                fillRule="evenodd"
                d="M14.25 5.25h-6v4.5h6v-4.5zm1.5-3H2.25c-.825 0-1.5.675-1.5 1.5v10.5c0 .825.675 1.485 1.5 1.485h13.5c.825 0 1.5-.66 1.5-1.485V3.75c0-.825-.675-1.5-1.5-1.5zm0 12.008H2.25V3.735h13.5v10.523z"
                clipRule="evenodd"
            />
        </svg>
    );
}

export default EditArea;
