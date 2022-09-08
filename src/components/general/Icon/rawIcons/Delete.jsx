import React from 'react';

const Delete = ({ color = '#788590', ...props }) => (
    <svg viewBox="0 0 1024 1024" {...props}>
        <path
            fill={color}
            d="M170.667 910.223c0 62.577 51.2 113.777 113.777 113.777h455.111c62.577 0 113.777-51.2 113.777-113.777v-682.667h-682.667v682.667zM910.223 56.889h-199.111l-56.889-56.889h-284.444l-56.889 56.889h-199.111v113.777h796.444v-113.777z"
        ></path>
    </svg>
);

export default Delete;
