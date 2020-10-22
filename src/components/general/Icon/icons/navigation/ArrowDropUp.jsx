import React from 'react';
import { colors } from '../../../../../utils/styles/defaultTheme';
import { colors } from '../../../../../utils/styles/defaultTheme';

function ArrowDropUp({ color = colors.neutral700utral700, ...props }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <path d="M7 14l5-5 5 5z" fill={color} fillRule="evenodd" />
        </svg>
    );
}

export default ArrowDropUp;
