import React from 'react';

function Monthly({ color = '#335B70', ...props }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <path
                d="M9 11v2H7v-2h2zm4 0v2h-2v-2h2zm4 0v2h-2v-2h2zm2-7a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2h1V2h2v2h8V2h2v2h1zm0 16V9H5v11h14zM9 15v2H7v-2h2zm4 0v2h-2v-2h2zm4 0v2h-2v-2h2z"
                fill={color}
            />
        </svg>
    );
}

export default Monthly;
