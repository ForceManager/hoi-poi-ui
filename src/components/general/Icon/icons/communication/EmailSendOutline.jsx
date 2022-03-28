import React from 'react';

function EmailSendOutline({ color = '#788590', secondaryColor = '#D4D8DC', ...props }) {
    return (
        <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <path
                d="M19.599 2.25H3.178a2.059 2.059 0 0 0-2.053 2.053v12.315c0 1.13.924 2.053 2.053 2.053h9.236v-2.053H3.178V6.355l8.21 5.132 8.21-5.132v5.132h2.053V4.303A2.059 2.059 0 0 0 19.6 2.25Zm-8.21 7.184L3.177 4.303h16.42l-8.21 5.131Z"
                fill={color}
            />
            <path
                d="M18.572 18.671v3.079l2.053-2.053 2.052-2.052-2.052-2.053-2.053-2.053v3.08h-4.105v2.052h4.105Z"
                fill={secondaryColor}
            />
        </svg>
    );
}

export default EmailSendOutline;
