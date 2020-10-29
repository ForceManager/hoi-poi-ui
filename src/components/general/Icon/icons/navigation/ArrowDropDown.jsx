import * as React from 'react';
import { colors } from '../../../../../utils/styles/defaultTheme';

function ArrowDropDown({ color = colors.neutral700, ...props }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M7 10l5 5 5-5z" fill={color} fillRule="evenodd" />
        </svg>
    );
}

export default ArrowDropDown;
