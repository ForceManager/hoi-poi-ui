import * as React from 'react';
import { colors } from '../../../../../utils/styles/defaultTheme';

function ScatterPlotChartColor({ color = colors.neutral700, ...props }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" {...props}>
            <ellipse cx="3.219" cy="16.67" fill="#FFB13F" rx="1.219" ry="1.217" />
            <ellipse cx="11.946" cy="13.557" fill="#7BA4FE" rx="1.219" ry="1.217" />
            <ellipse cx="9.037" cy="13.557" fill="#7D8A96" rx="1.219" ry="1.217" />
            <ellipse cx="5.159" cy="19.783" fill="#7BA4FE" rx="1.219" ry="1.217" />
            <ellipse cx="6.128" cy="13.557" fill="#FFB13F" rx="1.219" ry="1.217" />
            <ellipse cx="9.037" cy="16.67" fill="#FFB13F" rx="1.219" ry="1.217" />
            <ellipse cx="11.946" cy="16.67" fill="#7D8A96" rx="1.219" ry="1.217" />
            <ellipse cx="6.128" cy="16.67" fill="#7D8A96" rx="1.219" ry="1.217" />
            <ellipse cx="14.855" cy="10.443" fill="#7BA4FE" rx="1.219" ry="1.217" />
            <ellipse cx="20.78" cy="10.443" fill="#7D8A96" rx="1.219" ry="1.217" />
            <ellipse cx="17.764" cy="7.33" fill="#7D8A96" rx="1.219" ry="1.217" />
            <ellipse cx="14.855" cy="13.557" fill="#FFB13F" rx="1.219" ry="1.217" />
            <ellipse cx="11.946" cy="10.443" fill="#7BA4FE" rx="1.219" ry="1.217" />
            <ellipse cx="17.764" cy="10.443" fill="#FFB13F" rx="1.219" ry="1.217" />
            <ellipse cx="20.673" cy="7.33" fill="#7BA4FE" rx="1.219" ry="1.217" />
            <ellipse cx="14.855" cy="7.33" fill="#7BA4FE" rx="1.219" ry="1.217" />
            <ellipse cx="17.764" cy="13.557" fill="#7D8A96" rx="1.219" ry="1.217" />
            <ellipse cx="11.946" cy="7.33" fill="#7D8A96" rx="1.219" ry="1.217" />
            <ellipse cx="14.855" cy="4.217" fill="#7D8A96" rx="1.219" ry="1.217" />
            <ellipse cx="20.673" cy="4.217" fill="#FFB13F" rx="1.219" ry="1.217" />
        </svg>
    );
}

export default ScatterPlotChartColor;