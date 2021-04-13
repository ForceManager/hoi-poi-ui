import React, { memo } from 'react';

function Date({ color = '#7D8A96', ...props }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                d="M18 19H6V8h12v11zm.469-14.075h-1.477L17 3h-2l-.008 1.925h-6L9 3H7l-.008 1.925H5.516C4.67 4.925 4 5.634 4 6.5v12.925C4 20.291 4.678 21 5.524 21h12.952c.838 0 1.524-.709 1.524-1.575L19.992 6.5c0-.866-.685-1.575-1.523-1.575zM18 10H6v2h12v-2z"
                fill={color}
            />
        </svg>
    );
}

export default memo(Date);
