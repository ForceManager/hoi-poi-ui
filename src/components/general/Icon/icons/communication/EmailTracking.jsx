import React from 'react';

const EmailTracking = ({ color = '#335B70', color2, ...props }) => (
    <svg {...props} viewBox="0 0 24 24">
        <path
            d="M12 11L20 6H4L12 11ZM12 13L4 8V18H9.15L11.15 20H4C3.45 20 2.97917 19.8042 2.5875 19.4125C2.19583 19.0208 2 18.55 2 18V6C2 5.45 2.19583 4.97917 2.5875 4.5875C2.97917 4.19583 3.45 4 4 4H20C20.55 4 21.0208 4.19583 21.4125 4.5875C21.8042 4.97917 22 5.45 22 6V10.35L20 12.35V8L12 13Z"
            fill={color}
        />
        <path
            d="M16.25 21.45L12 17.2L13.4 15.8L16.25 18.65L21.9 13L23.3 14.4L16.25 21.45Z"
            fill={color2 || color}
        />
    </svg>
);

export default EmailTracking;
