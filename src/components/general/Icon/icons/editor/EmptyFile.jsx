import React from 'react';
import { colors } from '../../../../../utils/styles/defaultTheme';

const Bold = ({ color = colors.neutral700, ...props }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" {...props}>
        <path
            fill={color}
            d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6ZM6 20V4h7v5h5v11H6Z"
        />
    </svg>
);

export default React.memo(Bold);
