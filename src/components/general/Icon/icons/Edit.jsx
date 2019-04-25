import React from 'react';

function Edit({ color, ...props }) {
    return (
        <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M12.01 4.85l1.414 1.415a1 1 0 0 1 0 1.414l-8.808 8.808a1 1 0 0 1-.671.293l-1.467.053a1 1 0 0 1-1.036-1.036l.053-1.467a1 1 0 0 1 .293-.671l8.808-8.808a1 1 0 0 1 1.414 0zm3.548-3.548l1.415 1.415a1 1 0 0 1 0 1.414l-1.415 1.414a1 1 0 0 1-1.414 0L12.73 4.131a1 1 0 0 1 0-1.414l1.414-1.415a1 1 0 0 1 1.414 0z"
                fill={color}
                fillRule="evenodd"
            />
        </svg>
    );
}

export default React.memo(Edit);
