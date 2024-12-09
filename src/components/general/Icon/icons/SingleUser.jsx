import React from 'react';

function SingleUser({ color = '#335B70', ...props }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" id="AndWeb/Social/ic_person" {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 12.0001C14.21 12.0001 16 10.2101 16 8.00009C16 5.79009 14.21 4.00009 12 4.00009C9.79 4.00009 8 5.79009 8 8.00009C8 10.2101 9.79 12.0001 12 12.0001ZM12 14.0001C9.33 14.0001 4 15.3401 4 18.0001V20.0001H20V18.0001C20 15.3401 14.67 14.0001 12 14.0001Z"
                fill={color}
            />
        </svg>
    );
}

export default SingleUser;
