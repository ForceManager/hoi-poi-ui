import React from 'react';
import { colors } from '../../../../../utils/styles/defaultTheme';

function CloseFullscreen({ color = colors.neutral700, ...props }) {
    return (
        <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <path
                d="M22 3.41 16.71 8.7 20 12h-8V4l3.29 3.29L20.59 2 22 3.41ZM3.41 22l5.29-5.29L12 20v-8H4l3.29 3.29L2 20.59 3.41 22Z"
                fill={color}
            />
        </svg>
    );
}

export default CloseFullscreen;
