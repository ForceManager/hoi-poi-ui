import React from 'react';

function VideoCheckin({ color = '#A9B1B9', ...props }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" {...props}>
            <path
                fill={color}
                d="M16.882 4c.55 0 1 .45 1 1v3.5l4-4v11l-4-4V15c0 .55-.45 1-1 1h-5.94l.091-.191c.495-1.096.792-2.133.841-3.122l.008-.296C11.882 8.85 8.965 6 5.382 6c-.517 0-1.02.06-1.502.171L3.882 5c0-.55.45-1 1-1h12z"
            />
            <path
                fill="#FF8C00"
                fillRule="evenodd"
                d="M1 12.55C1 10.034 3.012 8 5.5 8s4.5 2.034 4.5 4.55C10 15.962 5.5 21 5.5 21S1 15.963 1 12.55zm3-.062c0 .769.605 1.393 1.35 1.393.745 0 1.35-.624 1.35-1.393s-.605-1.393-1.35-1.393c-.745 0-1.35.624-1.35 1.393z"
                clipRule="evenodd"
            />
        </svg>
    );
}

export default VideoCheckin;
