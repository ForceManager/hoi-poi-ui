import React from 'react';

function FastCheckin({ color = '#788590', ...props }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
                d="M9.17 7.382a6.645 6.645 0 019.04-2.593 6.645 6.645 0 012.592 9.04c-2.418 4.363-11.804 7.578-11.804 7.578s-2.247-9.663.171-14.025zm-2.78 4.62c-.037.66-.05 1.33-.044 2H2v-2h4.39zm8.42-3.474a2.322 2.322 0 10.083 4.644 2.322 2.322 0 00-.083-4.644zM7.027 8c-.187.63-.33 1.302-.435 2.001L2 10.002v-2L7.027 8zm2.472-4a8.44 8.44 0 00-1.625 2.002H2v-2l7.5-.001z"
                fill={color}
                fillRule="evenodd"
            />
        </svg>
    );
}

export default FastCheckin;
