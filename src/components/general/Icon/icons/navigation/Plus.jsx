import React from 'react';
import { colors } from '../../../../../utils/styles/defaultTheme';

function Plus({ color = colors.actionMinor[500], ...props }) {
    return (
        <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.94 12.919v3.96h2v-3.96h3.939v-2h-3.94v-3.94h-2v3.94H6.98v2h3.96z"
                fill={color}
            />
        </svg>
    );
}

export default Plus;
