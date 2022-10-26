import React from 'react';
import { colors } from '../../../../../utils/styles/defaultTheme';

const OrderedList = ({ color = colors.neutral700, ...props }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
        <path
            d="M0.594 24.109v-1.622h4.865v6.487h-4.865v-1.622h3.243v-0.811h-1.622v-1.622h1.622v-0.811h-3.243zM2.215 9.513v-4.865h-1.622v-1.622h3.243v6.487h-1.622zM0.594 14.378v-1.622h4.865v1.46l-2.919 3.406h2.919v1.622h-4.865v-1.46l2.919-3.406h-2.919zM8.702 4.648h22.704v3.243h-22.704v-3.243zM8.702 27.352v-3.243h22.704v3.243h-22.704zM8.702 17.622v-3.243h22.704v3.243h-22.704z"
            fill={color}
        />
    </svg>
);

export default React.memo(OrderedList);
