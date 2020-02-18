import React from 'react';

function CloudUpload({ color, ...props }) {
    return (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <path
                    d="M19.35,10.04 C18.67,6.59 15.64,4 12,4 C9.11,4 6.6,5.64 5.35,8.04 C2.34,8.36 0,10.91 0,14 C0,17.31 2.69,20 6,20 L19,20 C21.76,20 24,17.76 24,15 C24,12.36 21.95,10.22 19.35,10.04 L19.35,10.04 Z M14,13 L14,17 L10,17 L10,13 L7,13 L12,8 L17,13 L14,13 L14,13 Z"
                    id="path-1"
                ></path>
            </defs>
            <g
                id="Icons/File/ic_cloud_upload"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
            >
                <mask id="mask-2" fill="white">
                    <use href="#path-1"></use>
                </mask>
                <use id="Mask" fill={color} href="#path-1"></use>
            </g>
        </svg>
    );
}

export default React.memo(CloudUpload);
