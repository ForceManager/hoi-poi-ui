import * as React from 'react';
import { colors } from '../../../../../utils/styles/defaultTheme';

function XAxisColor({ color = colors.neutral700, ...props }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" {...props}>
            <path
                fill="#5A89FD"
                d="M5.19 22h15.62c.638 0 1.19-.458 1.19-1.005 0-.546-.552-.995-1.19-.995H5.19c-.627 0-1.19.45-1.19.995C4 21.543 4.563 22 5.19 22Z"
            />
            <path
                fill="#7D8A96"
                d="M4 18.81V3.19C4 2.553 3.542 2 2.996 2 2.449 2 2 2.552 2 3.19v15.62c0 .627.45 1.19.996 1.19S4 19.437 4 18.81Z"
            />
            <path
                fill="#5A89FD"
                d="M9.146 17c.502 0 .78-.17 1.171-.72l2.617-3.667h.068l2.604 3.666c.38.547.665.721 1.172.721.693 0 1.19-.442 1.19-1.083 0-.301-.097-.537-.315-.812l-3.118-4.108 3.14-4.124c.229-.285.325-.53.325-.82C18 5.455 17.493 5 16.832 5c-.495 0-.802.187-1.147.712L13.17 9.377h-.09l-2.586-3.675C10.126 5.18 9.838 5 9.312 5c-.67 0-1.19.487-1.19 1.095 0 .321.1.546.34.876l2.992 3.973-3.15 4.204c-.218.287-.304.512-.304.812 0 .598.485 1.04 1.146 1.04Z"
            />
        </svg>
    );
}

export default XAxisColor;