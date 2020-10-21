import React from 'react';

function CloseSmall({ color = '#788590', ...props }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <path
                d="M11.9289 13.3288L14.7292 16.1291L16.1434 14.7148L13.3431 11.9146L16.1286 9.12906L14.7144 7.71484L11.9289 10.5003L9.14337 7.71484L7.72915 9.12906L10.5146 11.9146L7.71436 14.7148L9.12857 16.1291L11.9289 13.3288Z"
                fill={color}
                fillRule="evenodd"
                clipRule="evenodd"
            />
        </svg>
    );
}

export default CloseSmall;
