import React from 'react';

function UnPin({ color = '#788590', ...props }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.538 8.654L2 4.104 4.15 2 22 19.895 19.85 22l-4.331-4.343c-.211 1.905-.9 3.415-2.52 2.523l-.834-.833h-.001v-.001c-.567-.565-1.154-1.15-1.97-1.971a90.241 90.241 0 01-3.81 2.197c-.962.53-1.674.922-2.29 1.359-.574.408-1.241-.305-.843-.843.404-.57.76-1.243 1.225-2.116a61.33 61.33 0 012.3-4.03L5.648 12.82c-.611-.607-1.11-1.101-1.683-1.675-.893-1.599.651-2.28 2.573-2.492zm6.449-1.8l4.299 4.31 1.07-1.07c2.039.739 4.441-.045 3.646-1.648L15.7 2.143c-1.604-.678-2.387 1.608-1.649 3.647l-1.064 1.064z"
                fill={color}
            />
        </svg>
    );
}

export default UnPin;