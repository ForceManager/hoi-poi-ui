import React from 'react';
import { colors } from '../../../../../utils/styles/defaultTheme';

function PlusOne({ color = colors.actionMinor[500], ...props }) {
    return (
        <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 8H8v4H4v2h4v4h2v-4h4v-2h-4V8Zm4.5-1.92V7.9l2.5-.5V18h2V5l-4.5 1.08Z"
                fill={color}
            />
        </svg>
    );
}

export default PlusOne;
