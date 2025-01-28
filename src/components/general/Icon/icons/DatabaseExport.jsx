import React from 'react';

function DatabaseExport({ color = '#335B70', secondaryColor = '#D4D8DC', ...props }) {
    return (
        <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <path
                d="M9.151 3C4.924 3 1.5 4.79 1.5 7s3.424 4 7.651 4c.478 0 .956-.03 1.435-.08V9.5h2.764l-.957-1L15.75 5c-1.339-1.2-3.787-2-6.599-2ZM1.5 9v3c0 2.21 3.424 4 7.651 4 1.119 0 2.161-.15 3.108-.37l1.08-1.13h-2.753v-1.58c-.479.05-.957.08-1.435.08C4.924 13 1.5 11.21 1.5 9Zm0 5v3c0 2.21 3.424 4 7.651 4 2.812 0 5.26-.8 6.599-2l-1.817-1.9c-1.33.56-2.965.9-4.782.9C4.924 18 1.5 16.21 1.5 14Z"
                fill={color}
            />
            <path
                d="M15.507 8.907 17.073 7.5l5.427 4.875-5.427 4.875-1.566-1.407 2.758-2.477H12.75v-1.982h5.515l-2.758-2.477Z"
                fill={secondaryColor}
            />
        </svg>
    );
}

export default DatabaseExport;
