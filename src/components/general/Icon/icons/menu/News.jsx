import * as React from 'react';
import { colors } from '../../../../../utils/styles/defaultTheme';

function News({ color = colors.neutral700, ...props }) {
    return (
        <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.256 8H4.051C2.918 8 2 8.895 2 10v4c0 1.105.918 2 2.051 2h1.026v4c0 .552.46 1 1.026 1h2.05c.567 0 1.026-.448 1.026-1v-4h3.077l5.129 4V4l-5.129 4ZM22 12c0 1.71-.985 3.26-2.564 4V8c1.57.75 2.564 2.3 2.564 4Z"
                fill={color}
            />
        </svg>
    );
}

export default News;
