import React from 'react';

function Crop({ color = '#335B70', ...props }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" id="ic_crop" {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.045 14.727h1.819V7.455c0-1-.819-1.819-1.819-1.819H9.773v1.819h7.272v7.272zm-9.09 1.819V2H6.136v3.636H2.5v1.819h3.636v9.09c0 1 .819 1.819 1.819 1.819h9.09V22h1.819v-3.636H22.5v-1.819H7.955z"
                fill={color}
            />
        </svg>
    );
}

export default Crop;
