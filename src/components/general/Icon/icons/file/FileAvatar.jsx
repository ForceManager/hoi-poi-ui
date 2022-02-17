import React from 'react';
import { colors } from '../../../../../utils/styles/defaultTheme';

function FileAvatar({ color = colors.neutral700, ...props }) {
    return (
        <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" {...props}>
            <path
                d="M0 4a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v28a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4Z"
                fill="#E9ECEE"
            />
            <path
                d="M19.35 9h-7.2c-.99 0-1.79.81-1.79 1.8l-.01 14.4c0 .99.801 1.8 1.791 1.8h10.81c.99 0 1.8-.81 1.8-1.8V14.4L19.35 9Zm-7.2 16.2V10.8h6.3v4.5h4.5v9.9h-10.8Z"
                fill="#7D8A96"
            />
        </svg>
    );
}

export default FileAvatar;
