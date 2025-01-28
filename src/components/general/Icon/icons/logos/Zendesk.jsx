import React from 'react';

const Zendesk = ({ color = '#335B70', ...props }) => (
    <svg {...props} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
            d="M11.238 8.002v11.154H2l9.238-11.154Zm0-4.002A4.62 4.62 0 0 1 2 4h9.238Zm1.522 15.157a4.619 4.619 0 0 1 9.238 0H12.76Zm0-4.003V4H22l-9.24 11.153v.001Z"
            fill={color}
        />
    </svg>
);

export default Zendesk;
