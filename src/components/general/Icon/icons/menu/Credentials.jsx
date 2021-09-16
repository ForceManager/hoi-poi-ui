import * as React from 'react';
import { colors } from '../../../../../utils/styles/defaultTheme';

function Credentials({ color = colors.neutral700, ...props }) {
    return (
        <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.333 19.333a7.333 7.333 0 1 1 7.058-9.332L22.667 10a1.333 1.333 0 0 1 0 2.667h-1.334v4.666a1.333 1.333 0 1 1-2.666 0v-4.666h-4.03a7.334 7.334 0 0 1-7.304 6.666Zm0-12a4.667 4.667 0 1 0 0 9.334 4.667 4.667 0 0 0 0-9.334Z"
                fill={color}
            />
        </svg>
    );
}

export default Credentials;
