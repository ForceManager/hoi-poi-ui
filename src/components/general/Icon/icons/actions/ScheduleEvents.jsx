import React from 'react';

function ScheduleEvents({ color = '#335B70', ...props }) {
    return (
        <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <path 
                fill={color} 
                d="M5 22c-.55 0-1.02-.196-1.413-.587A1.926 1.926 0 0 1 3 20V6c0-.55.196-1.02.587-1.412A1.926 1.926 0 0 1 5 4h1V2h2v2h8V2h2v2h1c.55 0 1.02.196 1.413.588.391.391.587.862.587 1.412v5.675a6.922 6.922 0 0 0-2-.6V10H5v10h6.3c.117.367.254.717.412 1.05.159.333.346.65.563.95H5Zm13 1c-1.383 0-2.563-.488-3.537-1.462C13.488 20.562 13 19.383 13 18s.488-2.563 1.463-3.537C15.438 13.488 16.617 13 18 13s2.563.488 3.538 1.463C22.512 15.438 23 16.617 23 18s-.488 2.563-1.462 3.538C20.562 22.512 19.383 23 18 23Zm1.675-2.625.7-.7L18.5 17.8V15h-1v3.2l2.175 2.175Z"
            />
        </svg>
    );
}


export default ScheduleEvents;
