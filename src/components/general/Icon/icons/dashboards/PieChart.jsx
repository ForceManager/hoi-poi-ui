import * as React from 'react';
import { colors } from '../../../../../utils/styles/defaultTheme';

function PieChart({ color = colors.actionMinor[500], ...props }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" {...props}>
            <path
                stroke="#335B70"
                strokeWidth="1.5"
                d="M2.75 12.714a8.537 8.537 0 0 1 7.786-8.503v7.753a1.5 1.5 0 0 0 1.5 1.5h7.753a8.543 8.543 0 0 1-5.549 7.261c-.92.34-1.914.525-2.954.525a8.494 8.494 0 0 1-4.942-1.575 8.524 8.524 0 0 1-3.594-6.96Z"
            />
            <path
                stroke="#A9B1B9"
                strokeWidth="1.5"
                d="M13.464 2.782a8.538 8.538 0 0 1 7.754 7.754h-7.754V2.782Z"
            />
        </svg>
    );
}

export default PieChart;
