import React from 'react';

function StopRecording({ color = '#788590', ...props }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" {...props}>
            <path fill={color} fillRule="evenodd" d="M8 8h8v8H8V8Z" clipRule="evenodd" />
            <rect width="23" height="23" x=".5" y=".5" stroke="#7D8A96" rx="11.5" />
        </svg>
    );
}

export default StopRecording;
