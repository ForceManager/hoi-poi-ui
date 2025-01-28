import React from 'react';
import { colors } from '../../../../../utils/styles/defaultTheme';

function FullscreenArrows({ color = colors.actionMinor[500], ...props }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" {...props}>
            <path
                fill={color}
                d="M672.005 192.036l-79.994-79.994h319.98v319.977l-79.994-79.994-171.414 171.414-159.986-159.994 171.413-171.414z"
            ></path>
            <path
                fill={color}
                d="M351.995 831.962l79.994 79.994h-319.978v-319.973l79.994 79.994 171.414-171.414 159.986 159.994-171.413 171.413z"
            ></path>
        </svg>
    );
}

export default FullscreenArrows;
