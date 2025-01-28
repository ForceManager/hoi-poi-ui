import React from 'react';
import { colors } from '../../../../../utils/styles/defaultTheme';

const Underline = ({ color = colors.actionMinor[500], ...props }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
        <path
            d="M16 23.5c-4.965 0-9-4.035-9-9v-12h3.75v12c0 2.895 2.355 5.25 5.25 5.25s5.25-2.355 5.25-5.25v-12h3.75v12c0 4.965-4.035 9-9 9zM5.5 26.5h21v3h-21v-3z"
            fill={color}
        />
    </svg>
);

export default React.memo(Underline);
