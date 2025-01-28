import React from 'react';

function OpportunityEdit({ color = '#335B70', ...props }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8 6H4c-1.1 0-2 .9-2 2v3c0 1.11.89 2 2 2h3v-2h2v2h6v-2h2v.784l1.718-1.718.062.063.97-.97A2.694 2.694 0 0122 8.39V8c0-1.1-.9-2-2-2h-4V5c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v1zm8.124 15h-4.756v-.756L15.613 16H17v-1.388l.613-.612h2.21L21 15.177v.947L16.124 21zM22 10.457V11c0 .85-.538 1.581-1.29 1.869l-.92-.92 1.374-1.375a.699.699 0 01.836-.116zM18.823 13h-.21l.105-.105.105.105zm-4.039 1l-5.416 5.416V21H5c-1.11 0-2-.89-2-2l.01-5H7v2h2v-2h5.784zM10 6V5h4v1h-4z"
                fill={color}
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21.474 15.65l-2.756-2.755-7.35 7.349V23h2.756l7.35-7.35zm2.32-2.446a.699.699 0 000-.989l-1.64-1.641a.699.699 0 00-.99 0l-1.375 1.374 2.63 2.63 1.376-1.374z"
                fill={color}
            />
        </svg>
    );
}

export default OpportunityEdit;
