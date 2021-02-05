import React from 'react';

function ValueListEdit({ color = '#788590', ...props }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2 4.5h3.333v3.333H2V4.5zm5.833 0H22v3.333H7.833V4.5zm10.618 5.833H7.833v3.334h7.284l3.334-3.334zm-.827 9.167h-5.512l3.334-3.333h5.512L17.624 19.5zM22 10.457v3.21h-.492l-1.718-1.719 1.374-1.374a.699.699 0 01.836-.116zm-2.51 3.21h-1.544l.772-.772.772.772zm-6.873 2.5l-3.249 3.249v.084H7.833v-3.333h4.784zM2 10.333h3.333v3.334H2v-3.334zm0 5.834h3.333V19.5H2v-3.333z"
                fill={color}
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21.474 15.65l-2.756-2.755-7.35 7.349V23h2.756l7.35-7.35zm2.32-2.446a.699.699 0 000-.989l-1.64-1.641a.699.699 0 00-.99 0l-1.375 1.374 2.63 2.63 1.376-1.374z"
                fill={color}
            />
        </svg>
    );
}

export default ValueListEdit;
