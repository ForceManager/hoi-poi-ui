import React, { memo } from 'react';

function CheckboxGroup({ color = '#335B70', ...props }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8 5v11h11V5H8zm-2-.125C6 3.839 6.84 3 7.875 3h11.25C20.161 3 21 3.84 21 4.875v11.25C21 17.161 20.16 18 19.125 18H7.875A1.875 1.875 0 016 16.125V4.875zM3 18V6h2v12a1 1 0 001 1h12v2H6a3 3 0 01-3-3zm10.747-4.836l4-4.5-1.494-1.328-3.357 3.776-2.256-1.88-1.28 1.536 3 2.5.744.62.643-.724z"
                fill={color}
            />
        </svg>
    );
}

export default memo(CheckboxGroup);
