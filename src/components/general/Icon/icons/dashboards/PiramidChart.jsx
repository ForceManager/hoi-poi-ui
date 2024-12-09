import * as React from 'react';
import { colors } from '../../../../../utils/styles/defaultTheme';

function PiramidChart({ color = colors.actionMinor[500], ...props }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" {...props}>
            <path
                stroke="#335B70"
                strokeWidth="1.5"
                d="m18.844 16.864 1.881 3.386H3.275l1.847-3.325 2.534-4.56L12 4.544l4.344 7.82 2.5 4.5Z"
            />
            <path
                stroke="#A9B1B9"
                strokeWidth="1.6"
                d="M7.912 11.968h8.16l2.543 4.602H5.382l2.53-4.602Z"
            />
        </svg>
    );
}

export default PiramidChart;
