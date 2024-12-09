import * as React from 'react';
import { colors } from '../../../../../utils/styles/defaultTheme';

function YAxisColor({ color = colors.actionMinor[500], ...props }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" {...props}>
            <path
                fill="#335B70"
                d="M5.19 22h15.62c.638 0 1.19-.458 1.19-1.005 0-.546-.552-.995-1.19-.995H5.19c-.627 0-1.19.45-1.19.995C4 21.543 4.563 22 5.19 22Z"
            />
            <path
                fill="#5A89FD"
                d="M4 18.81V3.19C4 2.553 3.542 2 2.996 2 2.449 2 2 2.552 2 3.19v15.62c0 .627.45 1.19.996 1.19S4 19.437 4 18.81ZM12.999 17c.819 0 1.279-.526 1.279-1.406V12.67l3.524-5.887A1.29 1.29 0 0 0 18 6.107C18 5.474 17.522 5 16.855 5c-.549 0-.844.21-1.162.816l-2.629 4.589h-.098l-2.63-4.589C10.022 5.2 9.725 5 9.154 5 8.497 5 8 5.484 8 6.086c0 .23.06.454.195.697l3.546 5.908v2.903c0 .86.452 1.406 1.258 1.406Z"
            />
        </svg>
    );
}

export default YAxisColor;
