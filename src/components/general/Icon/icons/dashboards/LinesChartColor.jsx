import * as React from 'react';
import { colors } from '../../../../../utils/styles/defaultTheme';

function LinesChartColor({ color = colors.actionMinor[500], ...props }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" {...props}>
            <path
                stroke={color}
                strokeLinecap="round"
                strokeWidth="1.5"
                d="M2 20 9 4l7 13.778L22 5.37"
            />
            <path
                stroke="#198E59"
                strokeLinecap="round"
                strokeWidth="1.5"
                d="M2 9.545 9 15l7-6 6 5.454"
            />
        </svg>
    );
}

export default LinesChartColor;
