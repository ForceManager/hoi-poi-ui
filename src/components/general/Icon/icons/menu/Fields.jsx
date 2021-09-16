import * as React from 'react';
import { colors } from '../../../../../utils/styles/defaultTheme';

function Fields({ color = colors.neutral700, ...props }) {
    return (
        <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.619 11.524h-1.428v-3.81a1.904 1.904 0 0 0-1.905-1.904h-3.81V4.38a2.381 2.381 0 0 0-4.762 0V5.81h-3.81A1.905 1.905 0 0 0 2 7.714v3.62h1.429A2.56 2.56 0 0 1 6 13.903a2.56 2.56 0 0 1-2.571 2.572H2v3.62C2 21.146 2.853 22 3.905 22h3.619v-1.429A2.56 2.56 0 0 1 10.095 18a2.56 2.56 0 0 1 2.572 2.571V22h3.619a1.905 1.905 0 0 0 1.904-1.905v-3.81h1.429a2.381 2.381 0 1 0 0-4.761Z"
                fill={color}
            />
        </svg>
    );
}

export default Fields;
