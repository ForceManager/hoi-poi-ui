import React from 'react';
import { colors } from '../../../../../utils/styles/defaultTheme';

function Timer({ color = colors.actionMinor[500], ...props }) {
    return (
        <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 24" {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.5 1h-6v2h6V1Zm-4 13h2V8h-2v6Zm8.03-6.61 1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42A8.962 8.962 0 0 0 12.5 4a9 9 0 0 0-9 9c0 4.97 4.02 9 9 9a8.994 8.994 0 0 0 7.03-14.61ZM12.5 20c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7Z"
                fill={color}
            />
        </svg>
    );
}

export default Timer;
