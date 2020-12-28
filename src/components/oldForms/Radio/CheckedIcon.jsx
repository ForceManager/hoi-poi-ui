import React from 'react';
import { useTheme } from '../../../utils/styles';

const CheckedIcon = React.memo(({ ...props }) => {
    const theme = useTheme();
    return (
        <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg" {...props}>
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <circle stroke={theme.colors.secondary} cx="9" cy="9" r="7.5" />
                <circle id="Radio-Circle" fill={theme.colors.secondary} cx="9" cy="9" r="4" />
                <rect
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

export default CheckedIcon;
