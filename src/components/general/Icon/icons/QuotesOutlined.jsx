import React from 'react';

function QuotesOutlined({ color = '#335B70', secondaryColor = '#D4D8DC', ...props }) {
    return (
        <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12Zm1.837 0A8.166 8.166 0 0 1 12 3.837 8.166 8.166 0 0 1 20.163 12 8.166 8.166 0 0 1 12 20.163 8.166 8.166 0 0 1 3.837 12Z"
                fill={color}
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.122 16.847v1.52h-2.125v-1.536c-1.361-.286-2.516-1.162-2.603-2.706h1.56c.08.836.653 1.489 2.11 1.489 1.56 0 1.91-.78 1.91-1.266 0-.66-.35-1.281-2.126-1.703-1.974-.478-3.327-1.29-3.327-2.921 0-1.37 1.107-2.26 2.476-2.555V5.633h2.125v1.552c1.48.358 2.22 1.48 2.268 2.698h-1.56c-.04-.884-.51-1.488-1.767-1.488-1.194 0-1.91.54-1.91 1.305 0 .668.517 1.106 2.125 1.52 1.608.414 3.327 1.106 3.327 3.112-.008 1.457-1.098 2.253-2.483 2.515Z"
                fill={secondaryColor}
            />
        </svg>
    );
}

export default QuotesOutlined;
