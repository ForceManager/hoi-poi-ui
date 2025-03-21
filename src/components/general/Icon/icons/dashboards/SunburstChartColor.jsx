import * as React from 'react';
import { colors } from '../../../../../utils/styles/defaultTheme';

function SunburstChartColor({ color = colors.actionMinor[500], ...props }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" {...props}>
            <path
                stroke={color}
                strokeWidth="1.5"
                d="M3 12a7.82 7.82 0 0 0 7.07 7.784c.413.04.75-.3.75-.714v-1.748c0-.415-.338-.744-.747-.811a4.573 4.573 0 0 1 0-9.022c.409-.067.747-.396.747-.81V4.93c0-.414-.337-.753-.75-.714A7.82 7.82 0 0 0 3 12Z"
            />
            <path
                stroke="#198E59"
                strokeWidth="1.5"
                d="M13.93 3.035c-.413-.039-.75.3-.75.715v1.748c0 .414.338.744.747.81a4.56 4.56 0 0 1 2.47 1.263 4.56 4.56 0 0 1 1.294 2.502c.067.409.397.747.81.747h1.749c.414 0 .754-.337.715-.75a7.798 7.798 0 0 0-2.371-4.893 7.793 7.793 0 0 0-4.665-2.142Z"
            />
            <path
                stroke="#7BA4FE"
                strokeWidth="1.5"
                d="M13.18 20.25c0 .414.337.754.75.715a7.822 7.822 0 0 0 7.035-7.035c.039-.413-.3-.75-.715-.75h-1.748c-.414 0-.744.339-.81.747a4.575 4.575 0 0 1-3.765 3.764c-.409.067-.747.397-.747.81v1.749Z"
            />
        </svg>
    );
}

export default SunburstChartColor;
