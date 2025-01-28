import * as React from 'react';
import { colors } from '../../../../../utils/styles/defaultTheme';

function Dashboard({ color = colors.actionMinor[500], ...props }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" {...props}>
            <path
                fill={color}
                fillRule="evenodd"
                d="M3 13h8V3H3v10Zm0 8h8v-6H3v6Zm10 0h8V11h-8v10Zm0-18v6h8V3h-8Z"
                clipRule="evenodd"
            />
        </svg>
    );
}

export default Dashboard;
