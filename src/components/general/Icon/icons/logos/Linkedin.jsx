import React from 'react';

const LinkedinIcon = ({ color = '#788590', ...props }) => (
    <svg {...props} viewBox="0 0 24 24">
        <path fill={color} fillRule="evenodd" d="M22 4.222A2.222 2.222 0 0 0 19.778 2H4.222A2.222 2.222 0 0 0 2 4.222v15.556C2 21.005 2.995 22 4.222 22h15.556A2.222 2.222 0 0 0 22 19.778V4.222Zm-2.778 9.111v5.89h-3.1v-5.479c0-.859-.696-1.555-1.555-1.555-.856 0-1.545.7-1.545 1.555v5.478h-3.1v-9.3h3.1v1.234c.534-.867 1.634-1.445 2.578-1.445 2 0 3.622 1.622 3.622 3.622ZM6.312 8.178a1.873 1.873 0 0 0 0-3.744c-1.038 0-1.879.84-1.879 1.877 0 1.033.845 1.867 1.878 1.867Zm1.544 1.744v9.3H4.778v-9.3h3.078Z" clipRule="evenodd"/>
    </svg>
);

export default LinkedinIcon;