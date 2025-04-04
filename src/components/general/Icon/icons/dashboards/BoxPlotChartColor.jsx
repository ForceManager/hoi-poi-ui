import * as React from 'react';
import { colors } from '../../../../../utils/styles/defaultTheme';

function BoxPlotChartColor({ color = colors.actionMinor[500], ...props }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" {...props}>
            <path
                stroke="#7BA4FE"
                strokeLinecap="round"
                strokeWidth="1.5"
                d="M4.629 11.799H3.045a.045.045 0 0 0-.045.045v7.093c0 .024.02.044.045.044h1.584m0-7.183h1.583c.025 0 .045.02.045.046v7.093c0 .024-.02.044-.045.044H4.63m0-7.183V8.78m0 13.22v-3.019"
            />
            <path
                stroke={color}
                strokeLinecap="round"
                strokeWidth="1.5"
                d="M19.371 11.799h-1.583a.045.045 0 0 0-.045.045v7.093c0 .024.02.044.045.044h1.583m0-7.183h1.584c.025 0 .045.02.045.046v7.093c0 .024-.02.044-.045.044h-1.584m0-7.183V8.78m0 13.22v-3.019"
            />
            <path
                stroke="#198E59"
                strokeLinecap="round"
                strokeWidth="1.5"
                d="M12 5.058h-1.584a.045.045 0 0 0-.045.045v7.184c0 .025.02.045.045.045H12m0-7.275h1.584c.024 0 .045.02.045.045v7.185c0 .025-.02.045-.045.045H12m0-7.275V2m0 13.39v-3.058"
            />
        </svg>
    );
}

export default BoxPlotChartColor;
