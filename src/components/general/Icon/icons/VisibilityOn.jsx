import React from 'react';

function VisibilityOn({ color, ...props }) {
    return (
        <svg width="10" height="10" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fill-rule="evenodd">
                <path d="M0 0h10v10H0z" />
                <path
                    d="M5 1.5C2.727 1.5.786 2.951 0 5c.786 2.049 2.727 3.5 5 3.5S9.214 7.049 10 5c-.786-2.049-2.727-3.5-5-3.5zm0 5.833C3.745 7.333 2.727 6.288 2.727 5c0-1.288 1.018-2.333 2.273-2.333 1.255 0 2.273 1.045 2.273 2.333 0 1.288-1.018 2.333-2.273 2.333zM5 3.6c-.755 0-1.364.625-1.364 1.4 0 .775.61 1.4 1.364 1.4.755 0 1.364-.625 1.364-1.4 0-.775-.61-1.4-1.364-1.4z"
                    fill={color}
                />
            </g>
        </svg>
    );
}

export default React.memo(VisibilityOn);
