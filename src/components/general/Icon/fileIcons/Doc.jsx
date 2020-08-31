import React from 'react';

function Doc({ ...props }) {
    return (
        <svg viewBox="0 0 18 18" {...props}>
            <g transform="translate(.563 .563)" fill="none" fill-rule="evenodd">
                <path fill="#2A5598" d="M0 1.876V15l9.492 1.876V0z" />
                <path
                    fill="#FFF"
                    d="M6.484 10.273l.974-4.765h1.091l-1.46 6.33H6.035L4.832 7.217l-1.23 4.621H2.546l-1.461-6.33h1.091l.982 4.756 1.209-4.756h.922z"
                />
                <path d="M.048 0v16.875h16.827V0H8.462z" />
                <path
                    d="M10.02 2.11v12.656h6.28a.564.564 0 00.575-.55V2.663a.565.565 0 00-.576-.554h-6.28z"
                    fill="#2A5598"
                />
                <path
                    fill="#FFF"
                    d="M10.02 4.219h5.273v1H10.02zM10.02 5.801h5.273v1H10.02zM10.02 7.383h5.273v1H10.02zM10.02 8.965h5.273v1H10.02zM10.02 10.547h5.273v.527H10.02zM10.02 12.129h5.273v.527H10.02z"
                />
            </g>
        </svg>
    );
}

export default React.memo(Doc);
