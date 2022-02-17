import React from 'react';
import { colors } from '../../../../../utils/styles/defaultTheme';

function ZipAvatar({ color = colors.neutral700, ...props }) {
    return (
        <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" {...props}>
            <path
                d="M0 4a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v28a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4Z"
                fill="#FDF6CB"
            />
            <path
                d="M24.75 12.6h-7.2l-1.8-1.8h-5.4c-.99 0-1.8.81-1.8 1.8v10.8c0 .99.81 1.8 1.8 1.8h14.4c.99 0 1.8-.81 1.8-1.8v-9c0-.99-.81-1.8-1.8-1.8Zm0 10.8h-3.6v-1.8h-1.8v1.8h-9v-9h9v1.8h1.8v-1.8h3.6v9Zm-3.6-5.4v-1.8h1.8V18h-1.8Zm-1.8 0h1.8v1.8h-1.8V18Zm3.6 3.6h-1.8v-1.8h1.8v1.8Z"
                fill="#E9B200"
            />
        </svg>
    );
}

export default ZipAvatar;
