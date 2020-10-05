import React from 'react';

function Xsn({ ...props }) {
    return (
        <svg viewBox="0 0 18 18" {...props}>
            <g fill="none" fillRule="evenodd">
                <path fill="#693885" d="M.563 2.439V15.56l9.492 1.877V.563z" />
                <path fill="#FFF" d="M5.72 11.819H4.687V5.86H5.72z" />
                <path
                    fill="#693885"
                    d="M15.285 4.605h-1.16l1.637-1.718 1.665 1.727h-1.104v7.742h-4.187v-.88h3.137z"
                />
                <path
                    fill="#693885"
                    d="M14.797 5.783v1.013h-3.153v6.838h1.197l-1.621 1.705-.579-.487V5.771z"
                />
            </g>
        </svg>
    );
}

export default React.memo(Xsn);
