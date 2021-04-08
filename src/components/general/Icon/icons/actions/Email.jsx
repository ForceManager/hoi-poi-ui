import React from 'react';

const Email = ({ color = '#788590', ...props }) => (
    <svg {...props} viewBox="0 0 32 32">
        <path
            fill={color}
            d="M28.799 3.2h-25.599c-1.76 0-3.184 1.44-3.184 3.2l-0.016 19.199c0 1.76 1.44 3.2 3.2 3.2h25.599c1.76 0 3.2-1.44 3.2-3.2v-19.199c0-1.76-1.44-3.2-3.2-3.2zM28.799 9.6l-12.8 8-12.8-8v-3.2l12.8 8 12.8-8v3.2z"
        />
    </svg>
);

export default Email;
