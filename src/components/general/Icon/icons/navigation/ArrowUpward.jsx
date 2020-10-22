import React from 'react';
import { colors } from '../../../../../utils/styles/defaultTheme';

function ArrowUpward({ color = colors.neutral700, ...props }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <path
                d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8z"
                fill={color}
                fillRule="evenodd"
            />
        </svg>
    );
}

export default ArrowUpward;
