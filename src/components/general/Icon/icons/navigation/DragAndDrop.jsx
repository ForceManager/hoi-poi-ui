import React from 'react';
import { colors } from '../../../../../utils/styles/defaultTheme';

function DragAndDrop({ color = colors.neutral700, ...props }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <path
                d="M0 18c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm4-6c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm0-6c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm1 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm4-6c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm0-6c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z"
                fill={color}
                fillRule="evenodd"
            />
        </svg>
    );
}

export default DragAndDrop;
