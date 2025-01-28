import React from 'react';

function ScanCard({ color = '#335B70', ...props }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <path
                d="M7.25 4.7H4.7V7.25H3V3H7.25V4.7ZM20 7.25V3H15.75V4.7H18.3V7.25H20ZM7.25 20H4.7V17.45H3V21.7H7.25V20ZM18.3 17.45V20H15.75V21.7H20V17.45H18.3ZM15.75 7.25H7.25V17.45H15.75V7.25ZM17.45 17.45C17.45 18.385 16.685 19.15 15.75 19.15H7.25C6.315 19.15 5.55 18.385 5.55 17.45V7.25C5.55 6.315 6.315 5.55 7.25 5.55H15.75C16.685 5.55 17.45 6.315 17.45 7.25V17.45ZM14.05 8.95H8.95V10.65H14.05V8.95ZM14.05 11.5H8.95V13.2H14.05V11.5ZM14.05 14.05H8.95V15.75H14.05V14.05Z"
                fill={color}
                fillRule="evenodd"
            />
        </svg>
    );
}

export default ScanCard;
