import React from 'react';

import { useTheme } from '../../../utils/styles';

const IndeterminateIcon = React.memo(({ color, ...props }) => {
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
                    d="M4.89 9.01h8.136"
                    stroke="#FFF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>
        </svg>
    );
});

export default IndeterminateIcon;
