import * as React from 'react';
import { colors } from '../../../../../utils/styles/defaultTheme';

function MapChart({ color = colors.actionMinor[500], ...props }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" {...props}>
            <path
                fill={color}
                fillRule="evenodd"
                d="m20.5 3-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5ZM15 19l-6-2.11V5l6 2.11V19Z"
                clipRule="evenodd"
            />
            <path fill="#A9B1B9" d="M8 5 4.5 6.3V19L8 17.5V5Z" />
        </svg>
    );
}

export default MapChart;
