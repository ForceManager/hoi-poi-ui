import React from 'react';

function LessButton({ color = '#788590', ...props }) {
    return (
        <svg viewBox="0 0 18 18" {...props}>
            <g fill="none" fillRule="evenodd">
                <rect stroke="#CED4D9" x={0.5} y={0.5} width={17} height={17} rx={2} />
                <path d="M5 10h8a1 1 0 000-2H5a1 1 0 100 2z" fill={color} />
            </g>
        </svg>
    );
}

export default LessButton;
