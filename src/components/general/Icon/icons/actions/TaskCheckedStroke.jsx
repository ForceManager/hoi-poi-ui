import React from 'react';

function TaskCheckedStroke({ ...props }) {
    return (
        <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 2c-4.416 0-8 3.584-8 8s3.584 8 8 8 8-3.584 8-8-3.584-8-8-8z"
                fill="#198E59"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.333 16.167L6.166 12l1.175-1.175 2.992 2.983 6.325-6.325 1.175 1.184-7.5 7.5zM12 4c-4.416 0-8 3.584-8 8s3.584 8 8 8 8-3.584 8-8-3.584-8-8-8z"
                fill="#007E45"
            />
        </svg>
    );
}

export default TaskCheckedStroke;
