import React from 'react';

function OpportunityLink({ color = '#788590', ...props }) {
    return (
        <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8 5H4c-1.1 0-2 .9-2 2v3c0 1.11.89 2 2 2h3v-2h2v2h3.254A6.99 6.99 0 0 1 18 9a6.97 6.97 0 0 1 3.985 1.243c.01-.08.015-.16.015-.243V7c0-1.1-.9-2-2-2h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v1Zm3.673 8A6.976 6.976 0 0 0 11 16a6.97 6.97 0 0 0 1.254 4H5c-1.11 0-2-.89-2-2l.01-5H7v2h2v-2h2.673ZM10 5V4h4v1h-4Z"
                fill={color}
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18 21c-2.762 0-5-2.238-5-5s2.238-5 5-5 5 2.238 5 5-2.238 5-5 5Z"
                fill={color}
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.138 18.07a1.128 1.128 0 0 1 0-1.594l1.028-1.029-.488-.488-1.029 1.028a1.819 1.819 0 0 0 2.572 2.571l1.028-1.028-.488-.489-1.029 1.029c-.44.44-1.154.44-1.594 0Zm1.311-.797 2.057-2.057-.514-.515-2.057 2.058.514.514Zm.772-3.857-1.029 1.028.489.489 1.028-1.029a1.128 1.128 0 0 1 1.594 1.595l-1.028 1.028.489.489 1.028-1.029a1.819 1.819 0 0 0-2.571-2.571Z"
                fill="#fff"
            />
        </svg>
    );
}

export default OpportunityLink;
