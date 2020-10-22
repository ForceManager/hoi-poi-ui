import React from 'react';
import { colors } from '../../../../../utils/styles/defaultTheme';

function Check({ color = colors.neutral700, ...props }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <path
                d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
                fill={color}
                fillRule="evenodd"
            />
        </svg>
    );
}

export default Check;
