import React from 'react';

function ThickDisabled({ color = '#788590', ...props }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
            <path
                fill={color}
                fillRule="evenodd"
                d="M9 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm1.168-7L13 6.168 11.832 5 9 7.832 6.168 5 5 6.168 7.832 9 5 11.832 6.168 13 9 10.168 11.832 13 13 11.832 10.168 9z"
            />
        </svg>
    );
}

export default React.memo(ThickDisabled);
