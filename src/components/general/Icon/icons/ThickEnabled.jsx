import React from 'react';

function ThickEnabled({ color, ...props }) {
    return (
        <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <path
                    d="M9,-1.42108547e-14 C4.03,-1.42108547e-14 0,4.03 0,9 C0,13.97 4.02,18 9,18 C13.97,18 18,13.97 18,9 C18,4.03 13.97,-1.33226763e-14 9,-1.33226763e-14 L9,-1.42108547e-14 Z M9,16 C5.13,16 2,12.87 2,9 C2,5.13 5.13,2 9,2 C12.87,2 16,5.13 16,9 C16,12.87 12.87,16 9,16 L9,16 Z M7.54,10.53 L5.41,8.4 L4.35,9.46 L7.53,12.64 L13.53,6.64 L12.47,5.58 L7.54,10.53 L7.54,10.53 Z"
                    id="icon-thick-enabled"
                />
            </defs>
            <g stroke="none" strokeWdth="1" fill="none" fillRule="evenodd">
                <mask id="mask-2" fill="white">
                    <use xlinkHref="#icon-thick-enabled" />
                </mask>
                <use id="Mask" fill={color} xlinkHref="#icon-thick-enabled" />
            </g>
        </svg>
    );
}

export default React.memo(ThickEnabled);
