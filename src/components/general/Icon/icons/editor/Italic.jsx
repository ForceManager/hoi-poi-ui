import React from 'react';
import { colors } from '../../../../../utils/styles/defaultTheme';

const Italic = ({ color = colors.actionMinor[500], ...props }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" {...props}>
        <path
            d="M402.277 128.020v164.563h121.268l-187.603 438.833h-153.085v164.563h438.833v-164.563h-121.268l187.677-438.833h153.005v-164.563h-438.833z"
            fill={color}
        />
    </svg>
);

export default React.memo(Italic);
