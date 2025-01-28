import React from 'react';

function Webinar({ color = '#335B70', ...props }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
                d="M3 3H21C22.1 3 23 3.89 23 5L22.99 17C22.99 18.1 22.1 19 21 19H16V21H8V19H3C1.89 19 1 18.1 1 17V5C1 3.89 1.89 3 3 3ZM3 5V17H21V5H3ZM12 7C13.1067 7 14 7.89333 14 9C14 10.1067 13.1067 11 12 11C10.8933 11 10 10.1067 10 9C10 7.89333 10.8933 7 12 7ZM8 15V14.3333C8 13 10.6667 12.2667 12 12.2667C13.3333 12.2667 16 13 16 14.3333V15H8Z"
                fill={color}
                fillRule="evenodd"
            />
        </svg>
    );
}

export default Webinar;
