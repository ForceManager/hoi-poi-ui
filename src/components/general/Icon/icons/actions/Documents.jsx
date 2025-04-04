import React from 'react';

function Documents({ color = '#335B70', ...props }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
                d="M10.412 7.263l4.235 4.21v9.053c0 .763-.59 1.395-1.34 1.467l-.142.007h-8.69a1.477 1.477 0 01-1.468-1.332L3 20.526l.007-11.79c0-.762.585-1.394 1.333-1.466l.142-.007h5.93zM16.762 2L21 6.21v9.053c0 .763-.591 1.395-1.34 1.467l-.143.007-3.602-.001v-5.488l-5.07-5.037-1.492-.001.002-2.736c0-.763.584-1.395 1.333-1.467L10.83 2h5.933zm-7.41 6.316v4.21h4.236l-4.235-4.21zm6.351-5.263v4.21h4.238l-4.238-4.21z"
                fill={color}
                fillRule="evenodd"
            />
        </svg>
    );
}

export default Documents;
