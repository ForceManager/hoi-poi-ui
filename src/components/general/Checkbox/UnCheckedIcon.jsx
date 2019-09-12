import React from 'react';
import { withTheme } from 'react-jss';

const UnCheckedIcon = React.memo(({ theme, ...props }) => {
    return (
        <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg" {...props}>
            <rect
                stroke={theme.colors.greySoft}
                x="2.5"
                y="2.5"
                width="13"
                height="13"
                rx="3"
                fill="none"
                fillRule="evenodd"
            />
        </svg>
    );
});

export default withTheme(UnCheckedIcon);
