import React from 'react';
import { colors } from '../../../../../utils/styles/defaultTheme';

function LocationCity({ color = colors.actionMinor[500], ...props }) {
    return (
        <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15 11V5l-3-3-3 3v2H3v14h18V11h-6Zm-8 8H5v-2h2v2Zm0-4H5v-2h2v2Zm0-4H5V9h2v2Zm6 8h-2v-2h2v2Zm0-4h-2v-2h2v2Zm0-4h-2V9h2v2Zm0-4h-2V5h2v2Zm6 12h-2v-2h2v2Zm0-4h-2v-2h2v2Z"
                fill={color}
            />
        </svg>
    );
}

export default LocationCity;
