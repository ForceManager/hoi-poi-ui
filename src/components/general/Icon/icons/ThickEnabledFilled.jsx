import React from 'react';

const ThickEnabledFilled = ({ color }) => (
    <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <path
            fill={color}
            d="M512 1007.984c-274.209 0-495.984-221.775-495.984-495.984s221.775-495.984 495.984-495.984c274.209 0 495.984 221.775 495.984 495.984s-221.775 495.984-495.984 495.984v0zM408.551 620.407l-150.921-150.921-75.108 75.108 225.32 225.32 425.131-425.13-75.108-75.108-349.315 350.731z"
        ></path>
    </svg>
);

export default React.memo(ThickEnabledFilled);
