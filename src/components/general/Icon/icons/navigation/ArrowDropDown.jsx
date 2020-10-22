import React from 'react';
import { colors } from '../../../../../utils/styles/defaultTheme';

function ArrowDropDown({ color = colors.neutral700, ...props }) {
    return (
        <svg viewBox="0 0 10 6" fill="none" {...props}>
            <path fillRule="evenodd" clipRule="evenodd" d="M0 .5l5 5 5-5H0z" fill={color} />
        </svg>
    );
}

export default ArrowDropDown;
