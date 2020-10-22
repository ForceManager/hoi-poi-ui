import React from 'react';
import { colors } from '../../../../../utils/styles/defaultTheme';

function ArrowDownward({ color = colors.neutral700, ...props }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <path
                d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8z"
                fill={color}
                fillRule="evenodd"
            />
        </svg>
    );
}

export default ArrowDownward;
