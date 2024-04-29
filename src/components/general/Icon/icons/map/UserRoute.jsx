import React from 'react';

function UserRoute({ color = '#788590', ...props }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" {...props}>
            <path
                fill={color}
                fillRule="evenodd"
                d="M16 8c0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4 4 1.79 4 4ZM4 18c0-2.66 5.33-4 8-4 .621 0 1.387.073 2.196.217A4.603 4.603 0 0 0 14 15.55c0 1.365.72 2.991 1.585 4.45H4v-2ZM15 15.5c0-1.935 1.565-3.5 3.5-3.5s3.5 1.565 3.5 3.5c0 2.625-3.5 6.5-3.5 6.5S15 18.125 15 15.5Zm2.25 0a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 0 0-2.5 0Z"
                clipRule="evenodd"
            />
        </svg>
    );
}

export default UserRoute;
