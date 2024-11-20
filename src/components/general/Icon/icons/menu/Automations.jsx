import * as React from 'react';
import { colors } from '../../../../../utils/styles/defaultTheme';

function Automations({ color = colors.neutral700, ...props }) {
    return (
        <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <path fill={color} d="m8 22 1-7H4l9-13h2l-1 8h6L10 22H8Z" />
        </svg>
    );
}

export default Automations;
