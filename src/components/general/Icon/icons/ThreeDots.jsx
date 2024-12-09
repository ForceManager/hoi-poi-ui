import React from 'react';

function ThreeDots({ color = '#335B70', ...props }) {
    return (
        <svg viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <g
                id="Svg-Icons/18px-(All-icons)/UI/dots"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
            >
                <rect
                    id="Bounds"
                    fillOpacity="0.1"
                    fill={color}
                    opacity="0"
                    x="0"
                    y="0"
                    width="18"
                    height="18"
                ></rect>
                <path
                    d="M9,4 C7.89543049,4 7,3.1045695 7,2 C7,0.895430498 7.89543049,0 9,0 C10.1045695,0 11,0.895430498 11,2 C11,3.1045695 10.1045695,4 9,4 Z M9,18 C7.89543049,18 7,17.1045695 7,16 C7,14.8954305 7.89543049,14 9,14 C10.1045695,14 11,14.8954305 11,16 C11,17.1045695 10.1045695,18 9,18 Z M9,11 C7.89543049,11 7,10.1045695 7,9 C7,7.89543049 7.89543049,7 9,7 C10.1045695,7 11,7.89543049 11,9 C11,10.1045695 10.1045695,11 9,11 Z"
                    id="Combined-Shape"
                    fill={color}
                ></path>
            </g>
        </svg>
    );
}

export default React.memo(ThreeDots);
