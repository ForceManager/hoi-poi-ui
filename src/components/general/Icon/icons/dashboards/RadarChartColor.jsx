import * as React from 'react';
import { colors } from '../../../../../utils/styles/defaultTheme';

function RadarChartColor({ color = colors.actionMinor[500], ...props }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" {...props}>
            <path
                stroke="#335B70"
                strokeWidth="1.5"
                d="M2.871 9.918 12 2.944l9.129 6.974-3.502 11.332H6.373L2.87 9.918Zm18.341.063Zm-.052-.163Z"
            />
            <path
                stroke="#7BA4FE"
                strokeWidth="1.5"
                d="m6.778 11.412 5.208-3.01 4.693 2.92-3.017 4.37-4.613.855-2.271-5.135Zm2.155 5.157Z"
            />
        </svg>
    );
}

export default RadarChartColor;
