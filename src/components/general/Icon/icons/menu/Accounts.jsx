import * as React from 'react';
import { colors } from '../../../../../utils/styles/defaultTheme';

function Accounts({ color = colors.neutral700, ...props }) {
    return (
        <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20 20.26c0 .96-.797 1.74-1.778 1.74h-2.689a.44.44 0 0 1-.444-.435v-3.68a.88.88 0 0 0-.89-.87H9.823a.88.88 0 0 0-.889.87v3.68a.44.44 0 0 1-.444.435H5.778C4.798 22 4 21.22 4 20.26V3.74C4 2.78 4.797 2 5.778 2h12.444C19.202 2 20 2.78 20 3.74v16.52Zm-9.846-2.01h3.692V22h-3.692v-3.75ZM17.538 4.5h-2.461V7h2.461V4.5Zm0 4.375h-2.461v2.5h2.461v-2.5Zm0 4.375h-2.461v2.5h2.461v-2.5Zm-6.769 0h2.462v2.5h-2.462v-2.5Zm2.462-4.375h-2.462v2.5h2.462v-2.5ZM6.46 13.25h2.462v2.5H6.462v-2.5ZM10.77 4.5h2.462V7h-2.462V4.5Zm-1.846 0H6.462V7h2.461V4.5ZM6.462 8.875h2.461v2.5H6.462v-2.5Z"
                fill={color}
            />
        </svg>
    );
}

export default Accounts;
