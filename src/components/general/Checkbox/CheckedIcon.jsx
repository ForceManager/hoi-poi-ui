import React from 'react';
import { useTheme } from '../../../utils/styles';

const CheckedIcon = React.memo(({ color, ...props }) => {
    const theme = useTheme();
    return (
        <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg" {...props}>
            <g fill="none" fillRule="evenodd">
                <rect
                    fill={color || theme.colors.secondary}
                    x="2"
                    y="2"
                    width="14"
                    height="14"
                    rx="3"
                />
                <path
                    stroke="#FFF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5.01 9.01l2.033 3.006 5.951-6.01"
                />
            </g>
        </svg>
    );
});

export default CheckedIcon;
