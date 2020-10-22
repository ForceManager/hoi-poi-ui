import React from 'react';
import { colors } from '../../../../../utils/styles/defaultTheme';

function SortArrowDownward({ color = colors.neutral700, ...props }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <path
                d="M12 19.75l-6-5.985h4.5V3.25h3v10.515H18l-6 5.985z"
                fill={color}
                fillRule="evenodd"
            />
        </svg>
    );
}

export default SortArrowDownward;
