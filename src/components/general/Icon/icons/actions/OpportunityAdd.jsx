import React from 'react';

function OpportunityAdd({ color = '#335B70', ...props }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8 6H4c-1.1 0-2 .9-2 2v3c0 1.11.89 2 2 2h3v-2h2v2h4.101A7.016 7.016 0 0115 11.674V11h2v.07c.327-.046.66-.07 1-.07 1.357 0 2.624.386 3.697 1.055.192-.307.303-.669.303-1.055V8c0-1.1-.9-2-2-2h-4V5c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v1zm4.255 8A6.968 6.968 0 0011 18c0 1.074.242 2.09.674 3H5c-1.11 0-2-.89-2-2l.01-5H7v2h2v-2h3.255zM10 6V5h4v1h-4zM18 13c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm2.5 5.5h-2v2h-1v-2h-2v-1h2v-2h1v2h2v1z"
                fill={color}
            />
        </svg>
    );
}

export default OpportunityAdd;
