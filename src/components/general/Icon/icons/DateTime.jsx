import React, { memo } from 'react';

function DateTime({ color = '#335B70', ...props }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                d="M12.756 10a7.536 7.536 0 00-2.257 2H6v7h3.427a7.48 7.48 0 001.072 2H5.524C4.678 21 4 20.291 4 19.425V6.5c0-.866.67-1.575 1.516-1.575h1.476L7 3h2l-.008 1.925h6L15 3h2l-.008 1.925h1.477c.838 0 1.523.709 1.523 1.575l.002 3.362A7.448 7.448 0 0018 9.15V8H6v2h6.756zM11 16.5c0-3.036 2.464-5.5 5.5-5.5s5.5 2.464 5.5 5.5-2.464 5.5-5.5 5.5a5.502 5.502 0 01-5.5-5.5zm4.95.22l2.365 2.365.77-.781-2.035-2.035V13.2h-1.1v3.52z"
                fill={color}
            />
        </svg>
    );
}

export default memo(DateTime);
