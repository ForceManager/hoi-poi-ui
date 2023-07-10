import * as React from 'react';

function Hrule({ color = '#A9B1B9', ...props }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" {...props}>
            <path d="M20 11H4V13H20V11Z" fill={color} />
        </svg>
    );
}

export default Hrule;
