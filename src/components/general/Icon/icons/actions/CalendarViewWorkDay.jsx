import React from 'react';

function CalendarViewWorkDay({ color = '#335B70', ...props }) {
    return (
        <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18 4h1c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h1V2h2v2h8V2h2v2zM5 20h14v-9H5v9zM5 9h14V6H5v3zm1 3h12v4H6v-4zm1 1h10v2H7v-2z"
                fill={color}
            />
        </svg>
    );
}

export default CalendarViewWorkDay;
