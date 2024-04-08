import React from 'react';

const PowerBI = ({ color = '#788590', ...props }) => (
    <svg {...props} viewBox="0 0 24 24">
        <g clipPath="url(#a)">
            <path
                fill="7D8A96"
                d="M18.234 2h-4.922c-.423 0-.767.37-.767.825v18.35c0 .456.344.825.767.825h4.922c.423 0 .766-.37.766-.825V2.825C19 2.37 18.657 2 18.234 2Z"
            />
            <g filter="url(#b)">
                <path
                    fill="#A9B1B9"
                    d="M15.198 21.175V22H9.509c-.423 0-.766-.37-.766-.825V7.81c0-.456.343-.826.766-.826h4.923c.423 0 .766.37.766.826v13.365Z"
                />
            </g>
            <path
                fill="#A9B1B9"
                d="M15.198 21.175V22H9.509c-.423 0-.766-.37-.766-.825V7.81c0-.456.343-.826.766-.826h4.923c.423 0 .766.37.766.826v13.365Z"
            />
            <path
                fill="#D4D8DC"
                fillRule="evenodd"
                d="M11.455 21.175V22H5.766C5.343 22 5 21.63 5 21.175v-8.35c0-.455.343-.825.766-.825h4.922c.424 0 .767.37.767.825v8.35Z"
                clipRule="evenodd"
            />
        </g>
        <defs>
            <clipPath id="a">
                <path fill="#fff" d="M0 0h24v24H0z" />
            </clipPath>
            <filter
                id="b"
                width="46.455"
                height="55.016"
                x="8.743"
                y="-3.016"
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
            >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dx="20" dy="10" />
                <feGaussianBlur stdDeviation="10" />
                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0530212 0" />
                <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_4461_347928" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_4461_347928" result="shape" />
            </filter>
        </defs>
    </svg>
);

export default PowerBI;
