import React from 'react';
import { colors } from '../../../../../utils/styles/defaultTheme';

const Bold = ({ color = colors.actionMinor[500], ...props }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" {...props}>
        <path
            fill={color}
            fillRule="evenodd"
            d="M6 2c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6H6Zm7 7V3.5L18.5 9H13Z"
            clipRule="evenodd"
        />
    </svg>
);

export default React.memo(Bold);
