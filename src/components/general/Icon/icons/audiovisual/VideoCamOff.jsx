import React from 'react';

function VideoCamOff({ color = '#335B70', ...props }) {
    return (
        <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="m21 6.5-4 4V7c0-.55-.45-1-1-1H9.82L21 17.18V6.5ZM3.27 2 2 3.27 4.73 6H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.21 0 .39-.08.54-.18L19.73 21 21 19.73 3.27 2Z"
                fill={color}
            />
        </svg>
    );
}

export default VideoCamOff;
