import React from 'react';

function Workflow({ color = '#335B70', ...props }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g fill="none" fillRule="evenodd">
                <path
                    d="M21 14a1 1 0 011 1v6a1 1 0 01-1 1h-6a1 1 0 01-1-1v-6a1 1 0 011-1h6zm0-12a1 1 0 011 1v6a1 1 0 01-1 1h-6a1 1 0 01-1-1V3a1 1 0 011-1h6z"
                    fill={color}
                />
                <path
                    d="M8.512 14.862a.714.714 0 01.812.14l2.436 2.436c.31.31.31.814 0 1.124L9.324 21a.695.695 0 01-.99.013l.082.069.072.084-.153-.153.081.068-.055-.091a.704.704 0 01.056-.716l.073-.087 1.682-1.686H3.667c-.89 0-1.593-.753-1.662-1.685L2 16.667V7.333c0-.949.659-1.75 1.528-1.827l.139-.006H9.5a.5.5 0 01.09.992L9.5 6.5H3.667c-.323 0-.614.302-.66.717L3 7.333v9.334c0 .434.264.772.58.826l.087.007h6.505L8.49 15.814a.703.703 0 01-.075-.894l.003-.004-.083.072.153-.153-.069.081z"
                    fill="#00A8BE"
                />
            </g>
        </svg>
    );
}

export default Workflow;
