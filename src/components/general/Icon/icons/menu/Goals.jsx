import * as React from 'react';
import { colors } from '../../../../../utils/styles/defaultTheme';

function Goals({ color = colors.actionMinor[500], ...props }) {
    return (
        <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.2 2H18c-.9 0-2 1-2 2H8c0-1-1.1-2-2-2H2v9c0 1 1 2 2 2h2.2c.4 2 1.7 3.7 4.8 4v2.1c-2.2.2-3 1.3-3 2.6v.3h8v-.3c0-1.3-.8-2.4-3-2.6V17c3.1-.3 4.4-2 4.8-4H20c1 0 2-1 2-2V2h-1.8ZM4 11V4h2v7H4Zm16 0h-2V4h2v7Z"
                fill={color}
            />
        </svg>
    );
}

export default Goals;
