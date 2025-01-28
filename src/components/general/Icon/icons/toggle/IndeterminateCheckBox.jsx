import React from 'react';
import { colors } from '../../../../../utils/styles/defaultTheme';

function IndeterminateCheckBox({ color = colors.actionMinor[500], ...props }) {
    return (
        <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16 0H2C.9 0 0 .9 0 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zm-2 10H4V8h10v2z"
                fill={color}
            />
        </svg>
    );
}

export default IndeterminateCheckBox;
