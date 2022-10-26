import React from 'react';
import { colors } from '../../../../../utils/styles/defaultTheme';

const Italic = ({ color = colors.neutral700, ...props }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
        <path
            d="M12.143 2.5v5.786h4.262l-6.596 15.429h-5.381v5.786h15.429v-5.786h-4.262l6.596-15.429h5.381v-5.786h-15.429z"
            fill={color}
        />
    </svg>
);

export default React.memo(Italic);
