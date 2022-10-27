import React from 'react';
import { colors } from '../../../../../utils/styles/defaultTheme';

const Bold = ({ color = colors.neutral700, ...props }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
        <path
            d="M22.22 15.595c1.871-1.292 3.182-3.414 3.182-5.381 0-4.359-3.375-7.714-7.714-7.714h-12.054v27h13.577c4.031 0 7.155-3.279 7.155-7.309 0-2.931-1.659-5.439-4.146-6.596zM11.419 7.321h5.786c1.601 0 2.893 1.292 2.893 2.893s-1.292 2.893-2.893 2.893h-5.786v-5.786zM18.169 24.679h-6.75v-5.786h6.75c1.601 0 2.893 1.292 2.893 2.893s-1.292 2.893-2.893 2.893z"
            fill={color}
        />
    </svg>
);

export default React.memo(Bold);
