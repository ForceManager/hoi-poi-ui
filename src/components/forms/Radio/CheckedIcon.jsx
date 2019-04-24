import React from 'react';
import { withTheme } from 'react-jss';

const CheckedIcon = React.memo(({ theme, ...props }) => {
    return (
        <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg" {...props}>
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <circle
                    id="Radio-Background"
                    stroke={theme.colors.secundary}
                    cx="9"
                    cy="9"
                    r="7.5"
                />
                <circle id="Radio-Circle" fill={theme.colors.secundary} cx="9" cy="9" r="4" />
                <rect
                    id="Radio-Bounds"
                    fillOpacity="0.1"
                    fill="#FF0000"
                    opacity="0"
                    x="0"
                    y="0"
                    width="18"
                    height="18"
                />
            </g>
        </svg>
    );
});

export default withTheme(CheckedIcon);
