import React from 'react';
import { colors } from '../../../../../utils/styles/defaultTheme';

function OpenInFull({ color = colors.neutral700, ...props }) {
    return (
        <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <path d="M21 11V3h-8l3.29 3.29-10 10L3 13v8h8l-3.29-3.29 10-10L21 11Z" fill={color} />
        </svg>
    );
}

export default OpenInFull;
