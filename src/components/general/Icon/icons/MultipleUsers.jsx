import React from 'react';

function MultipleUsers({ color = '#788590', ...props }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15 6c1.66 0 2.99-1.34 2.99-3S16.66 0 15 0c-1.66 0-3 1.34-3 3s1.34 3 3 3zM7 6c1.66 0 2.99-1.34 2.99-3S8.66 0 7 0C5.34 0 4 1.34 4 3s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V14h14v-2.5C14 9.17 9.33 8 7 8zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V14h6v-2.5C22 9.17 17.33 8 15 8z"
                fill={color}
            />
        </svg>
    );
}

export default MultipleUsers;
