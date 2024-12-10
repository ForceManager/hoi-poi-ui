import * as React from 'react';
import { colors } from '../../../../../utils/styles/defaultTheme';

function AreaChartColor({ color = colors.actionMinor[500], ...props }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" {...props}>
            <path fill="#B3CFE5" d="M13.5 16 2 20.5v.5h20v-6l-8.5 1Z" />
            <path fill="#335B70" d="M22 8V3L9.428 8.5 2 18v.5l8.5-7L22 8Z" />
            <path fill="#198E59" d="M22 14V9l-10.858 3L2 19.1v.9l11.428-5L22 14Z" />
        </svg>
    );
}

export default AreaChartColor;
