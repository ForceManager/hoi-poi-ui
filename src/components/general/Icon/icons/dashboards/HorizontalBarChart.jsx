import * as React from 'react';
import { colors } from '../../../../../utils/styles/defaultTheme';

function HorizontalBarChart({ color = colors.neutral700, ...props }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" {...props}>
            <path
                fill="#7D8A96"
                fillRule="evenodd"
                d="M2 10.889V7.556h14.222v3.333H2ZM2 22v-3.333h4.444V22H2Z"
                clipRule="evenodd"
            />
            <path
                fill="#A9B1B9"
                fillRule="evenodd"
                d="M2 16.222V12.89h8.889v3.333H2ZM2 5.333V2h20v3.333H2Z"
                clipRule="evenodd"
            />
        </svg>
    );
}

export default HorizontalBarChart;
