import React from 'react';
import { useTheme } from '../../../utils/styles';

const UnCheckedIcon = React.memo(({ ...props }) => {
    const theme = useTheme();
    return (
        <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                fill={theme.colors.neutral700}
                fillRule="evenodd"
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
                clipRule="evenodd"
            />
        </svg>
    );
});

export default UnCheckedIcon;
