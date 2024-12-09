import * as React from 'react';
import { colors } from '../../../../../utils/styles/defaultTheme';

function AnalyticsPro({ color = colors.actionMinor[500], ...props }) {
    return (
        <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <path
                d="M14.06 10.94 12 10l2.06-.94L15 7l.94 2.06L18 10l-2.06.94L15 13l-.94-2.06ZM4 15l.94-2.06L7 12l-2.06-.94L4 9l-.94 2.06L1 12l2.06.94L4 15Zm4.5-5 1.09-2.41L12 6.5 9.59 5.41 8.5 3 7.41 5.41 5 6.5l2.41 1.09L8.5 10Zm-4 11.5 6-6.01 4 4L23 9.93l-1.41-1.41-7.09 7.97-4-4L3 20l1.5 1.5Z"
                fill={color}
            />
        </svg>
    );
}

export default AnalyticsPro;
