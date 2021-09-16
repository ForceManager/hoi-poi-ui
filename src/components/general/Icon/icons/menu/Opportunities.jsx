import * as React from 'react';
import { colors } from '../../../../../utils/styles/defaultTheme';

function Opportunities({ color = colors.neutral700, ...props }) {
    return (
        <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 5h4V4c0-1.11.89-2 2-2h4c1.11 0 2 .89 2 2v1h4c1.1 0 2 .9 2 2v3c0 1.1-.9 2-2 2h-3v-2h-2v2H9v-2H7v2H4c-1.11 0-2-.89-2-2V7c0-1.1.9-2 2-2Zm3 10v-2H3.01L3 18c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2v-5h-4v2h-2v-2H9v2H7Zm3-11v1h4V4h-4Z"
                fill={color}
            />
        </svg>
    );
}

export default Opportunities;
