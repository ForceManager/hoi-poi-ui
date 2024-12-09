import * as React from 'react';
import { colors } from '../../../../../utils/styles/defaultTheme';

function Support({ color = colors.actionMinor[500], ...props }) {
    return (
        <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 3c4.74 0 9 3.73 9 9.22.59.31 1 .92 1 1.62v2.3c0 .72-.41 1.33-1 1.64V19c0 1.1-.9 2-2 2h-8v-2h8v-7.1c0-3.87-3.13-7-7-7s-7 3.13-7 7V18H4c-1.1 0-2-.9-2-2v-2c0-.74.4-1.38 1-1.72C3 6.65 7.31 3 12 3Zm-2 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm5 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-2.95-8A6.04 6.04 0 0 1 18 11.03c-3.12-.03-5.81-1.84-7.12-4.47a8.075 8.075 0 0 1-4.86 5.89C5.76 8.51 9.02 6 12.05 6Z"
                fill={color}
            />
        </svg>
    );
}

export default Support;
