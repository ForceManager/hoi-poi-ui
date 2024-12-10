import * as React from 'react';
import { colors } from '../../../../../utils/styles/defaultTheme';

function BumpChartColor({ color = colors.actionMinor[500], ...props }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" {...props}>
            <path
                stroke="#198E59"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M22 11.16c-2.578.598-3.385-4.32-5.642-4.56-2.257-.24-5.078 5.52-7.335 5.52-2.257 0-3.95-5.52-6.77-4.8-.081.02-.158.047-.23.08"
            />
            <path
                stroke="#7BA4FE"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M2 21c2.777-.571 6.888-5.52 9.11-4.759 2.222.762 4.888 4.569 6.666 4.188 1.777-.38 4-4.949 4-4.949"
            />
            <path
                stroke="#335B70"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M22 4.44c-.564 2.4-2.821 10.56-6.207 10.08C12.409 14.04 11.845 3 9.024 3c-4.085 0-1.763 10.46-7 10.496"
            />
        </svg>
    );
}

export default BumpChartColor;
