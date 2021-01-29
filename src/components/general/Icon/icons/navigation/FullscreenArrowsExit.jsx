import React from 'react';
import { colors } from '../../../../../utils/styles/defaultTheme';

function FullscreenArrowsExit({ color = colors.neutral700, ...props }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" {...props}>
            <path
                fill={color}
                d="M834.941 350.527l80.74 80.74h-322.962v-322.957l80.745 80.74 173.007-173.009 161.483 161.478-173.011 173.009z"
            ></path>
            <path
                fill={color}
                d="M189.060 673.504l-80.74-80.74h322.96v322.956l-80.74-80.74-173.012 173.011-161.478-161.477 173.009-173.011z"
            ></path>
        </svg>
    );
}

export default FullscreenArrowsExit;
