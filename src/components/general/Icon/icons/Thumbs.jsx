import * as React from 'react';

function Thumbs({ color = '#A9B1B9', ...props }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" {...props}>
            <path
                fill={color}
                fillRule="evenodd"
                d="M12 7a.836.836 0 0 0-.833-.833H6.85l.55-2.65.017-.192a.967.967 0 0 0-.275-.667L6.483 2 2.367 6.117A1.254 1.254 0 0 0 2 7v5.417c0 .691.558 1.25 1.25 1.25h5.625c.517 0 .958-.317 1.15-.759L11.908 8.5c.059-.142.092-.3.092-.458V7Zm8.75 3.333h-5.625c-.517 0-.958.317-1.15.759L12.092 15.5c-.059.142-.092.3-.092.458V17c0 .458.375.833.833.833h4.317l-.55 2.65-.017.2c0 .259.109.492.275.667l.659.65 4.116-4.117c.225-.225.367-.541.367-.883v-5.417c0-.691-.558-1.25-1.25-1.25Z"
                clipRule="evenodd"
            />
        </svg>
    );
}

export default Thumbs;