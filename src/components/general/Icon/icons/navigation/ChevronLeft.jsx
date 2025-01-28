import React from 'react';
import { colors } from '../../../../../utils/styles/defaultTheme';

function ChevronLeft({ color = colors.actionMinor[500], ...props }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <path
                d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"
                fill={color}
                fillRule="evenodd"
            />
        </svg>
    );
}

export default ChevronLeft;
