import React from 'react';

const SVG = ({
    style = {},
    fill = '#000',
    width = '100%',
    className = '',
    viewBox = '0 0 32 32',
}) => (
    <svg
        width={width}
        style={style}
        height={width}
        viewBox={viewBox}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
    >
        <path fill={fill} d="./close-10px.svg" />
    </svg>
);

export default SVG;
