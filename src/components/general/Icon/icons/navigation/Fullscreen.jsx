import React from 'react';
import { colors } from '../../../../../utils/styles/defaultTheme';

function Fullscreen({ color = colors.actionMinor[500], ...props }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <path
                d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"
                fill={color}
                fillRule="evenodd"
            />
        </svg>
    );
}

export default Fullscreen;
