import React from 'react';
import { withTheme } from 'react-jss';

const UnCheckedIcon = React.memo(({ theme, ...props }) => {
    return (
        <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg" {...props}>
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <circle
                    id="Radio-Background"
                    stroke={theme.colors.greySoft}
                    fill="#FFFFFF"
                    cx="9"
                    cy="9"
                    r="7.5"
                />
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

export default withTheme(UnCheckedIcon);
