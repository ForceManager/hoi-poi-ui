import React from 'react';

const EmailError = ({ color = '#335B70', color2, ...props }) => (
    <svg {...props} viewBox="0 0 24 24">
        <path
            fill={color}
            d="M12 13 4 8v10h8c0 .35.025.688.075 1.012.05.325.125.655.225.988H4c-.55 0-1.02-.196-1.413-.587A1.926 1.926 0 0 1 2 18V6c0-.55.196-1.02.587-1.412A1.926 1.926 0 0 1 4 4h16c.55 0 1.02.196 1.413.588.391.391.587.862.587 1.412v5.7c-.3-.15-.62-.275-.962-.375A7.43 7.43 0 0 0 20 11.1V8l-8 5Zm0-2 8-5H4l8 5Z"
        />
        <path
            fill={color2 || color}
            d="m17.929 18.329 2.8 2.8 1.414-1.414-2.8-2.8 2.785-2.786-1.414-1.414L17.93 15.5l-2.786-2.785-1.414 1.414 2.786 2.785-2.8 2.8 1.414 1.415 2.8-2.8Z"
        />
    </svg>
);

export default EmailError;
