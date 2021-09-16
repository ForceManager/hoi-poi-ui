import * as React from 'react';
import { colors } from '../../../../../utils/styles/defaultTheme';

function Imports({ color = colors.neutral700, ...props }) {
    return (
        <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.333 21.333h21.334a1.333 1.333 0 0 1 0 2.667H1.333a1.333 1.333 0 0 1 0-2.667ZM5.333 0c.737 0 1.334.597 1.334 1.333l-.002 12.772 1.716-1.715a1.333 1.333 0 1 1 1.885 1.886l-3.77 3.771-.096.087a1.332 1.332 0 0 1-2.117.02l-.121-.107-3.771-3.77a1.333 1.333 0 1 1 1.885-1.886L4 14.112 4 1.333C4 .597 4.597 0 5.333 0Zm13.334 18.667c.736 0 1.333-.597 1.333-1.334l-.001-12.772 1.715 1.715A1.333 1.333 0 0 0 23.6 4.391L19.828.619l-.095-.086a1.331 1.331 0 0 0-2.117-.02l-.12.106-3.772 3.772a1.333 1.333 0 0 0 1.886 1.885l1.722-1.723.001 12.78c0 .737.597 1.334 1.334 1.334Z"
                fill={color}
            />
        </svg>
    );
}

export default Imports;
