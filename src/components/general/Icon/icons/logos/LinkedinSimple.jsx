import React from 'react';
import { colors } from '../../../../../utils/styles/defaultTheme';

function LinkedinSimple({ color = colors.actionMinor[500], ...props }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" {...props}>
            <path
                fill={color}
                d="M7.2 20h-4V8h4v12ZM5.201 6.4a2 2 0 1 1 0-4.001 2 2 0 0 1 0 4.001Zm16.4 13.6h-3.846v-5.84c0-1.393-.027-3.184-2-3.184-2.002 0-2.31 1.517-2.31 3.083V20H9.6V7.991h3.691v1.641h.052c.514-.944 1.77-1.94 3.641-1.94 3.896 0 4.616 2.488 4.616 5.722V20Z"
            />
        </svg>
    );
}

export default LinkedinSimple;
