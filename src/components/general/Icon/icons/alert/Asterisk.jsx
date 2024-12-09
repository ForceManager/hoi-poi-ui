import React from 'react';

function Asterisk({ color = '#335B70', ...props }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
                d="M16.5 4.206a2 2 0 01.802 2.6l-.07.132-1.768 3.061L19 10a2 2 0 01.15 3.995L19 14h-3.536l1.768 3.062a2 2 0 01-3.385 2.127l-.08-.127L12 16l-1.767 3.062a2 2 0 01-3.534-1.868l.07-.132L8.535 14 5 14a2 2 0 01-.15-3.995L5 10h3.535L6.768 6.937a2 2 0 013.385-2.127l.08.127L12 7.998l1.768-3.06a2 2 0 012.732-.732z"
                fill={color}
                fillRule="evenodd"
            />
        </svg>
    );
}

export default Asterisk;
