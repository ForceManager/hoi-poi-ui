import React from 'react';

const EmailPending = ({ color = '#788590', color2, ...props }) => (
    <svg {...props} viewBox="0 0 24 24">
        <path
            fill={color}
            d="M12 13 4 8v10h8c0 .35.025.688.075 1.012.05.325.125.655.225.988H4c-.55 0-1.02-.196-1.413-.587A1.926 1.926 0 0 1 2 18V6c0-.55.196-1.02.587-1.412A1.926 1.926 0 0 1 4 4h16c.55 0 1.02.196 1.413.588.391.391.587.862.587 1.412v5.7c-.3-.15-.62-.275-.962-.375A7.43 7.43 0 0 0 20 11.1V8l-8 5Zm0-2 8-5H4l8 5Z"
        />
        <path
            fill={color2 || color}
            d="M13 17c0 2.76 2.235 5 4.995 5A5.003 5.003 0 0 0 23 17c0-2.76-2.24-5-5.005-5A4.998 4.998 0 0 0 13 17Zm5 4c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4Zm0-7.333h-.833v3.825l2.916 2.008.417-.784-2.5-1.702v-3.347Z"
        />
    </svg>
);

export default EmailPending;