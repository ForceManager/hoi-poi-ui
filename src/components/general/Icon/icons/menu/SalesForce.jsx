import * as React from 'react';
import { colors } from '../../../../../utils/styles/defaultTheme';

function SalesForce({ color = colors.neutral700, ...props }) {
    return (
        <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21.959 3.703h-2.845a.95.95 0 0 0-.948.949v14.224a.95.95 0 0 0 .948.949h2.845a.95.95 0 0 0 .948-.949V4.651a.95.95 0 0 0-.948-.948Zm-5.69 6.639h-2.845a.95.95 0 0 0-.948.948v7.586a.95.95 0 0 0 .948.949h2.845a.95.95 0 0 0 .948-.949V11.29a.95.95 0 0 0-.948-.948Zm-5.69-2.846H7.734a.95.95 0 0 0-.948.949v10.431a.95.95 0 0 0 .948.949h2.845a.95.95 0 0 0 .948-.949V8.445a.95.95 0 0 0-.948-.949Zm-4.742 6.639v4.741a.95.95 0 0 1-.948.949H2.044a.95.95 0 0 1-.948-.949v-4.741a.95.95 0 0 1 .948-.948h2.845a.95.95 0 0 1 .948.948Z"
                fill={color}
            />
        </svg>
    );
}

export default SalesForce;
