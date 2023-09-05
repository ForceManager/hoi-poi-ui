import React from 'react';

function VerticalDivider({ color = '#788590', ...props }) {
    return (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <rect id="Rectangle" fill={color} x="11" y="2" width="2" height="20" rx="1"></rect>
        </svg>
    );
}

export default React.memo(VerticalDivider);
