import * as React from 'react';
import { colors } from '../../../../../utils/styles/defaultTheme';

function Chart({ color = colors.actionMinor[500], ...props }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" {...props}>
            <g clipPath="url(#a)">
                <path
                    fill="#335B70"
                    d="M10.389 3.405V13.61h10.206A9.32 9.32 0 1 1 10.39 3.405ZM12.253 2c5.176.445 9.302 4.571 9.747 9.747h-9.747V2Z"
                />
            </g>
            <defs>
                <clipPath id="a">
                    <path fill="#fff" d="M0 0h24v24H0z" />
                </clipPath>
            </defs>
        </svg>
    );
}

export default Chart;
