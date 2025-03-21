import * as React from 'react';
import { colors } from '../../../../../utils/styles/defaultTheme';

function VerticalBarChartColor({ color = colors.actionMinor[500], ...props }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" {...props}>
            <path
                fill="#198E59"
                fillRule="evenodd"
                d="M7.556 22h3.333V9.778H7.556V22Z"
                clipRule="evenodd"
            />
            <path
                fill={color}
                fillRule="evenodd"
                d="M18.333 22h3.334v-4.445h-3.334V22Z"
                clipRule="evenodd"
            />
            <path
                fill="#B3CFE5"
                fillRule="evenodd"
                d="M13.111 22h3.333v-8.889h-3.333V22Z"
                clipRule="evenodd"
            />
            <path fill={color} fillRule="evenodd" d="M2 22h3.333V2H2v20Z" clipRule="evenodd" />
        </svg>
    );
}

export default VerticalBarChartColor;
