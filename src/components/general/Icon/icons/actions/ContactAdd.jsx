import React from 'react';

function ContactAdd({ color = '#788590', ...props }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18 13c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm2.5 5.5h-2v2h-1v-2h-2v-1h2v-2h1v2h2v1z"
                fill={color}
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10c0 .085-.001.169-.003.252A6.968 6.968 0 0018 11c-1.9 0-3.625.758-4.886 1.987A8.081 8.081 0 0012 12.9c-2 0-5.97 1.09-6 3.08a7.209 7.209 0 005.093 3.163 6.96 6.96 0 001.16 2.854c-.084.002-.169.003-.253.003-5.52 0-10-4.48-10-10zm13-4c0-1.66-1.34-3-3-3S9 6.34 9 8s1.34 3 3 3 3-1.34 3-3z"
                fill={color}
            />
        </svg>
    );
}

export default ContactAdd;
