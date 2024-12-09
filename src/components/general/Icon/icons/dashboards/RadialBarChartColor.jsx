import * as React from 'react';
import { colors } from '../../../../../utils/styles/defaultTheme';

function RadialBarChartColor({ color = colors.actionMinor[500], ...props }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" {...props}>
            <path
                stroke="#335B70"
                strokeLinecap="round"
                strokeWidth="1.5"
                d="M12 2.75a9.25 9.25 0 1 1-7.208 3.452"
            />
            <path
                stroke="#FFB13F"
                strokeLinecap="round"
                strokeWidth="1.5"
                d="M12 6.95a5.05 5.05 0 1 1-5.024 5.565"
            />
        </svg>
    );
}

export default RadialBarChartColor;
