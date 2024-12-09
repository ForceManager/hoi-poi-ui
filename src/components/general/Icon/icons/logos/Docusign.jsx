import React from 'react';

const DocusignIcon = ({ color = '#335B70', ...props }) => (
    <svg {...props} viewBox="0 0 24 24">
        <path fill={color} fillRule="evenodd" d="M3.667 2H22V22H2V2h1.667Zm16.666 18.333V3.667H3.667v16.666h16.666Z" clipRule="evenodd"/>
        <path fill={color} d="M18.094 16.533H5.993v1.637h12.101v-1.637ZM12.046 15.596l1.152-1.155 3.502-3.523-1.165-1.17-2.675 2.692V5.772h-1.63l.001 6.668-2.677-2.691-1.163 1.169 3.502 3.523 1.152 1.155Z"/>
    </svg>
);

export default DocusignIcon;
