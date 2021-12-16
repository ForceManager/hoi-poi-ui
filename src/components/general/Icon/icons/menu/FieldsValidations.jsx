import * as React from 'react';
import { colors } from '../../../../../utils/styles/defaultTheme';

function FieldsValidations({ color = colors.neutral700, ...props }) {
    return (
        <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.54 11L13 7.45999L14.41 6.04999L16.53 8.16999L20.77 3.92999L22.18 5.33999L16.54 11ZM11 6.99999H2V8.99999H11V6.99999ZM21 13.41L19.59 12L17 14.59L14.41 12L13 13.41L15.59 16L13 18.59L14.41 20L17 17.41L19.59 20L21 18.59L18.41 16L21 13.41ZM11 15H2V17H11V15Z"
                fill={color}
            />
        </svg>
    );
}

export default FieldsValidations;
