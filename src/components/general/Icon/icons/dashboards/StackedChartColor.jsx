import * as React from 'react';
import { colors } from '../../../../../utils/styles/defaultTheme';

function StackedChartColor({ color = colors.neutral700, ...props }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" {...props}>
            <path
                fill="#7D8A96"
                d="M3 21v-3.375h4.5V21H3Zm0-4.5V12h4.5v4.5H3Zm0-5.625V3h4.5v7.875H3ZM9.75 21v-7.875h4.5V21h-4.5Zm0-9V7.5h4.5V12h-4.5Zm0-5.625V3h4.5v3.375h-4.5ZM16.5 21v-2.25H21V21h-4.5Zm0-3.375v-4.5H21v4.5h-4.5Zm0-5.625V3H21v9h-4.5Z"
            />
            <path
                fill="#FFB13F"
                d="M9.75 13.125V21h4.5v-7.875h-4.5ZM9.75 7.5V12h4.5V7.5h-4.5ZM9.75 3v3.375h4.5V3h-4.5Z"
            />
            <path
                fill="#7BA4FE"
                d="M16.5 18.75V21H21v-2.25h-4.5ZM16.5 13.125v4.5H21v-4.5h-4.5ZM16.5 3v9H21V3h-4.5Z"
            />
        </svg>
    );
}

export default StackedChartColor;