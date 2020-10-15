import React from 'react';

function InfoOutlined({ color = '#7D8A96', ...props }) {
    return (
        <svg viewBox="0 0 16 16" fill="none" {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.75 5.75h-1.5v-1.5h1.5v1.5zm0 6h-1.5v-4.5h1.5v4.5zm-.742 3.75c4.14 0 7.492-3.36 7.492-7.5 0-4.14-3.352-7.5-7.492-7.5C3.86.5.5 3.86.5 8c0 4.14 3.36 7.5 7.508 7.5zM8 2c3.315 0 6 2.685 6 6s-2.685 6-6 6-6-2.685-6-6 2.685-6 6-6z"
                fill={color}
            />
        </svg>
    );
}

export default InfoOutlined;
