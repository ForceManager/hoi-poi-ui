import React from 'react';

const Columns = ({ color = '#335B70', ...props }) => (
    <svg {...props} viewBox="0 0 32 32">
        <path
            fill={color}
            d="M0.001 3.765v24.47h32v-24.47h-32zM18.824 7.529v16.941h-5.647v-16.941h5.647zM3.765 7.529h5.647v16.941h-5.647v-16.941zM28.236 24.471h-5.647v-16.941h5.647v16.941z"
        />
    </svg>
);

export default Columns;
