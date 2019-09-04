import React from 'react';
import { withTheme } from 'react-jss';

const CheckedIcon = React.memo(({ theme, ...props }) => {
    return (
        <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg" {...props}>
            <g fill="none" fillRule="evenodd">
                <rect fill={theme.colors.secondary} x="2" y="2" width="14" height="14" rx="3" />
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

export default withTheme(CheckedIcon);
