import React from 'react';

function ValueListAdd({ color = '#335B70', ...props }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2 4.5h3.333v3.333H2V4.5zm5.833 0H22v3.333H7.833V4.5zM22 10.333H7.833v3.334h4.67A6.987 6.987 0 0118 11c1.487 0 2.866.464 4 1.255v-1.922zm-10.758 5.834a7.01 7.01 0 00-.08 3.333H7.832v-3.333h3.41zM2 10.333h3.333v3.334H2v-3.334zm0 5.834h3.333V19.5H2v-3.333z"
                fill={color}
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18 13c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm2.5 5.5h-2v2h-1v-2h-2v-1h2v-2h1v2h2v1z"
                fill={color}
            />
        </svg>
    );
}

export default ValueListAdd;
