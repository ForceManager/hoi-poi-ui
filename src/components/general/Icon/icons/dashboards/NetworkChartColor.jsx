import * as React from 'react';
import { colors } from '../../../../../utils/styles/defaultTheme';

function NetworkChartColor({ color = colors.actionMinor[500], ...props }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" {...props}>
            <path
                stroke="#335B70"
                d="M12.068 5.581v3.716M12.068 18.419v-3.716M18.351 11.932h-3.716M5.649 11.932h3.716"
            />
            <circle cx="12.068" cy="4.23" r="1.73" stroke="#FFB13F" />
            <circle
                cx="2.23"
                cy="2.23"
                r="1.73"
                stroke="#FFB13F"
                transform="matrix(1 0 0 -1 9.838 22)"
            />
            <circle
                cx="19.77"
                cy="11.932"
                r="1.73"
                stroke="#FFB13F"
                transform="rotate(90 19.77 11.932)"
            />
            <circle
                cx="4.23"
                cy="11.932"
                r="1.73"
                stroke="#FFB13F"
                transform="rotate(-90 4.23 11.932)"
            />
            <circle
                cx="6.553"
                cy="6.458"
                r="1.73"
                stroke="#335B70"
                transform="rotate(-45 6.553 6.458)"
            />
            <circle
                cx="2.23"
                cy="2.23"
                r="1.73"
                stroke="#335B70"
                transform="scale(1 -1) rotate(45 33.637 10.875)"
            />
            <circle
                cx="17.447"
                cy="6.458"
                r="1.73"
                stroke="#335B70"
                transform="rotate(45 17.447 6.458)"
            />
            <circle
                cx="6.458"
                cy="17.447"
                r="1.73"
                stroke="#335B70"
                transform="rotate(-135 6.458 17.447)"
            />
            <path
                stroke="#335B70"
                d="m7.509 7.413 2.628 2.628M16.587 16.491l-2.628-2.628M16.443 7.461l-2.627 2.628M7.461 16.443l2.628-2.627"
            />
            <path
                stroke="#7BA4FE"
                strokeWidth="1.5"
                d="M14.764 11.932a2.696 2.696 0 1 1-5.392 0 2.696 2.696 0 0 1 5.392 0Z"
            />
        </svg>
    );
}

export default NetworkChartColor;
