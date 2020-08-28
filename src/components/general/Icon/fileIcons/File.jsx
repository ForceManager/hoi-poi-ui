import React from 'react';

function Document({ color, ...props }) {
    return (
        <svg viewBox="0 0 24 24" {...props}>
            <path
                d="M14 2.00009H6C4.9 2.00009 4.01 2.90009 4.01 4.00009L4 20.0001C4 21.1001 4.89 22.0001 5.99 22.0001H18C19.1 22.0001 20 21.1001 20 20.0001V8.00009L14 2.00009ZM16 18.0001H8V16.0001H16V18.0001ZM16 14.0001H8V12.0001H16V14.0001ZM13 9.00009V3.50009L18.5 9.00009H13Z"
                fill={color}
            />
        </svg>
    );
}

export default React.memo(Document);
