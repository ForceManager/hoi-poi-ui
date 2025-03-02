import React from 'react';

function TimeZone({ color = '#335B70', ...props }) {
    return (
        <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1 11C1 5.48 5.47 1 10.99 1 16.52 1 21 5.48 21 11c0 .225-.007.448-.022.67A6.931 6.931 0 0019 11.071V11c0-.69-.1-1.36-.26-2h-3.38c.08.66.14 1.32.14 2 0 .157-.003.313-.01.468a7.03 7.03 0 00-2.118 1.291c.074-.58.128-1.162.128-1.759 0-.68-.07-1.35-.16-2H8.66c-.09.65-.16 1.32-.16 2 0 .68.07 1.34.16 2h4.453a7.06 7.06 0 00-1.433 2H9.09c.43 1.43 1.08 2.76 1.91 3.96l.055-.08c.094.74.305 1.446.614 2.097-.225.015-.45.023-.679.023C5.47 21 1 16.52 1 11zm13.97-4h2.95a8.03 8.03 0 00-4.33-3.56c.6 1.11 1.06 2.31 1.38 3.56zm-2.06 0c-.43-1.43-1.08-2.76-1.91-3.96-.83 1.2-1.48 2.53-1.91 3.96h3.82zM3 11c0 .69.1 1.36.26 2h3.38c-.08-.66-.14-1.32-.14-2 0-.68.06-1.34.14-2H3.26C3.1 9.64 3 10.31 3 11zm4.03 4H4.08a7.987 7.987 0 004.33 3.56A15.65 15.65 0 017.03 15zM4.08 7h2.95c.32-1.25.78-2.45 1.38-3.56-1.84.63-3.37 1.9-4.33 3.56z"
                fill={color}
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18 13c-2.75 0-5 2.25-5 5s2.25 5 5 5 5-2.25 5-5-2.25-5-5-5zm2.1 7.1l-2.6-1.6v-3h.75v2.6l2.25 1.35-.4.65z"
                fill={color}
            />
        </svg>
    );
}

export default TimeZone;
