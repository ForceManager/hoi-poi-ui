import React from 'react';

function AddButton({ color = '#788590', ...props }) {
    return (
        <svg viewBox="0 0 18 18" {...props}>
            <g fill="none" fillRule="evenodd">
                <rect stroke="#CED4D9" x={0.5} y={0.5} width={17} height={17} rx={2} />
                <path
                    d="M9 4a1 1 0 011 1v3h3a1 1 0 01.993.883L14 9a1 1 0 01-1 1h-3v3a1 1 0 01-.883.993L9 14a1 1 0 01-1-1v-3H5a1 1 0 01-.993-.883L4 9a1 1 0 011-1h3V5a1 1 0 01.883-.993z"
                    fill={color}
                />
            </g>
        </svg>
    );
}

export default AddButton;
