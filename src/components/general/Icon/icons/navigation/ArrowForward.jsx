import React from 'react';
import { colors } from '../../../../../utils/styles/defaultTheme';

function ArrowForward({ color = colors.neutral700, ...props }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <path
                d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
                fill={color}
                fillRule="evenodd"
            />
        </svg>
    );
}

export default ArrowForward;
