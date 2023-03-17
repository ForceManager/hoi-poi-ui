import React from 'react';

function PlayTutorial({ ...props }) {
    return (
        <svg width={18} height={18} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <g clipPath="url(#a)">
                <g filter="url(#b)">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9 1.5C4.86 1.5 1.5 4.86 1.5 9c0 4.14 3.36 7.5 7.5 7.5 4.14 0 7.5-3.36 7.5-7.5 0-4.14-3.36-7.5-7.5-7.5Z"
                        fill="#fff"
                    />
                </g>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.5 12.375v-6.75L12 9l-4.5 3.375Z"
                    fill="#7D8A96"
                />
            </g>
            <defs>
                <clipPath id="a">
                    <path fill="#fff" d="M0 0h18v18H0z" />
                </clipPath>
                <filter
                    id="b"
                    x={-1.5}
                    y={-0.5}
                    width={21}
                    height={21}
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feColorMatrix
                        in="SourceAlpha"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset dy={1} />
                    <feGaussianBlur stdDeviation={1.5} />
                    <feColorMatrix values="0 0 0 0 0.152941 0 0 0 0 0.235294 0 0 0 0 0.313726 0 0 0 0.2 0" />
                    <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_4033_26640" />
                    <feColorMatrix
                        in="SourceAlpha"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset dy={2} />
                    <feGaussianBlur stdDeviation={1} />
                    <feColorMatrix values="0 0 0 0 0.152941 0 0 0 0 0.235294 0 0 0 0 0.313726 0 0 0 0.12 0" />
                    <feBlend
                        in2="effect1_dropShadow_4033_26640"
                        result="effect2_dropShadow_4033_26640"
                    />
                    <feColorMatrix
                        in="SourceAlpha"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation={1} />
                    <feColorMatrix values="0 0 0 0 0.152941 0 0 0 0 0.235294 0 0 0 0 0.313726 0 0 0 0.14 0" />
                    <feBlend
                        in2="effect2_dropShadow_4033_26640"
                        result="effect3_dropShadow_4033_26640"
                    />
                    <feBlend
                        in="SourceGraphic"
                        in2="effect3_dropShadow_4033_26640"
                        result="shape"
                    />
                </filter>
            </defs>
        </svg>
    );
}

export default React.memo(PlayTutorial);
