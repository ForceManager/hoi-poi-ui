import React from 'react';
import { colors } from '../../../../../utils/styles/defaultTheme';

const Strikethrough = ({ color = colors.neutral700, ...props }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
        <path
            d="M12.578 28.833h6.844v-5.133h-6.844v5.133zM4.022 3.167v5.133h8.555v5.133h6.844v-5.133h8.555v-5.133h-23.955zM0.6 20.278h30.799v-3.422h-30.799v3.422z"
            fill={color}
        />
    </svg>
);

export default React.memo(Strikethrough);
