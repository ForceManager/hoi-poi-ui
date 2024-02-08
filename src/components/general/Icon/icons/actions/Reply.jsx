import React from 'react';

function Reply({ color = '#788590', ...props }) {
    return (
        <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.5 6.75V3.75L2.25 9L7.5 14.25V11.175C11.25 11.175 13.875 12.375 15.75 15C15 11.25 12.75 7.5 7.5 6.75Z"
                fill={color}
            />
        </svg>
    );
}

export default Reply;
