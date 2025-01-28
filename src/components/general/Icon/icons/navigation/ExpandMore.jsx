import React from 'react';
import { colors } from '../../../../../utils/styles/defaultTheme';

function ExpandMore({ color = colors.actionMinor[500], ...props }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <path
                d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
                fill={color}
                fillRule="evenodd"
            />
        </svg>
    );
}

export default ExpandMore;
