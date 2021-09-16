import * as React from 'react';
import { colors } from '../../../../../utils/styles/defaultTheme';

function AddWidgetsOutline({ color = colors.neutral700, ...props }) {
    return (
        <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20 14h-2v3h-3v2h3v3h2v-3h3v-2h-3v-3ZM19.49 7.35l-2.83-2.83-2.83 2.83 2.83 2.83 2.83-2.83ZM9 9V5H5v4h4Zm0 10v-4H5v4h4Zm2-11.66 5.66-5.65 5.66 5.65-4.86 4.86a5.954 5.954 0 0 0-1.16.44L11 7.34Zm0 0V3H3v8h8V7.34ZM3 13h8v8H3v-8Z"
                fill={color}
            />
        </svg>
    );
}

export default AddWidgetsOutline;
