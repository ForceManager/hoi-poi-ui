import React from 'react';
import { colors } from '../../../../../utils/styles/defaultTheme';

function PenGeneric({ color = colors.neutral700, ...props }) {
    return (
        <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.71 7.043c-.34.34-.67.67-.68 1-.03.32.31.65.63.96.48.5.95.95.93 1.44-.02.49-.53 1-1.04 1.5l-4.13 4.14-1.42-1.42 4.25-4.24-.96-.96-1.42 1.41-3.75-3.75 3.84-3.83c.39-.39 1.04-.39 1.41 0l2.34 2.34c.39.37.39 1.02 0 1.41ZM3 17.253l9.56-9.57 3.75 3.75-9.56 9.57H3v-3.75Z"
                fill={color}
            />
        </svg>
    );
}

export default PenGeneric;
