import React from 'react';
import { colors } from '../../../../../utils/styles/defaultTheme';

function Menu({ color = colors.neutral700, ...props }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <path
                d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
                fill={color}
                fillRule="evenodd"
            />
        </svg>
    );
}

export default Menu;
