import * as React from 'react';
import { colors } from '../../../../../utils/styles/defaultTheme';

function LinesChart({ color = colors.neutral700, ...props }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" {...props}>
            <path
                stroke="#7D8A96"
                strokeLinecap="round"
                strokeWidth="1.5"
                d="M2 20 9 4l7 13.778L22 5.37"
            />
            <path
                stroke="#A9B1B9"
                strokeLinecap="round"
                strokeWidth="1.5"
                d="M2 9.545 9 15l7-6 6 5.454"
            />
        </svg>
    );
}

export default LinesChart;
