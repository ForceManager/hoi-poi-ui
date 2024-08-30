import * as React from 'react';
import { colors } from '../../../../../utils/styles/defaultTheme';

function FunnelChartColor({ color = colors.neutral700, ...props }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" {...props}>
            <path
                stroke="#7D8A96"
                strokeWidth="1.5"
                d="m8.762 13.066.071.096.038.113L11.2 20.25h1.6l2.33-6.975.037-.114.072-.096 4.079-5.483 1.565-3.832H3.115l1.534 3.773 4.113 5.543Z"
            />
            <path
                stroke="#7BA4FE"
                strokeWidth="1.5"
                d="M8.537 12.763h6.926l3.049-4.12H5.48l3.056 4.12Z"
            />
        </svg>
    );
}

export default FunnelChartColor;
