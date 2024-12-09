import React from 'react';

const Tool = ({ color = '#335B70' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
        <path
            fill={color}
            fillRule="evenodd"
            d="m21.738 18.347-8.26-8.31c.817-2.1.363-4.567-1.362-6.302C10.301 1.91 7.577 1.544 5.4 2.548l3.903 3.927-2.723 2.74-3.994-3.927c-1.09 2.192-.635 4.931 1.18 6.758 1.725 1.735 4.176 2.192 6.263 1.37l8.26 8.31a.874.874 0 0 0 1.271 0l2.088-2.1c.454-.366.454-1.005.091-1.279Z"
            clipRule="evenodd"
        />
    </svg>
);
export default Tool;
