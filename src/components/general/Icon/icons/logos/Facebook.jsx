import React from 'react';

const FacebookIcon = ({ color = '#788590', ...props }) => (
    <svg {...props} viewBox="0 0 24 24">
        <path fill={color} d="M10.35 21.9C5.6 21.05 2 16.95 2 12 2 6.5 6.5 2 12 2s10 4.5 10 10c0 4.95-3.6 9.05-8.35 9.9l-.55-.45h-2.2l-.55.45Z"/>
        <path fill="#fff" d="m15.9 14.8.45-2.8H13.7v-1.95c0-.8.3-1.4 1.5-1.4h1.3V6.1c-.7-.1-1.5-.2-2.2-.2-2.3 0-3.9 1.4-3.9 3.9V12H7.9v2.8h2.5v7.05a9.206 9.206 0 0 0 3.3 0V14.8h2.2Z"/>
    </svg>
);

export default FacebookIcon;
