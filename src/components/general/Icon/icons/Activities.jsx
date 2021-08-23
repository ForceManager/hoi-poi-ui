import * as React from 'react';

function Activities({ color = '#A9B1B9', ...props }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 37 36" {...props}>
            <path
                fill={color}
                fillRule="evenodd"
                d="M15.023 13.296L16.991 31.5H20l3.524-15.099 1.134 2.27L26 19.5h7.5v-3h-6.573l-2.585-5.17H21.5l-2.464 11.175L17 3h-3.032l-2.685 13.5H3.5v3h9l1.468-1.191 1.055-5.013z"
                clipRule="evenodd"
            />
        </svg>
    );
}

export default Activities;
