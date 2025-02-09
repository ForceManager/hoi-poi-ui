import * as React from 'react';
import { colors } from '../../../../../utils/styles/defaultTheme';

function DashboardCustomize({ color = colors.actionMinor[500], ...props }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" fill="none" {...props}>
            <path
                fill={color}
                fillRule="evenodd"
                d="M8.25 9.75h-6v-7.5h6v7.5Zm0 6h-6v-4.5h6v4.5Zm1.5-8.625V2.25h6v4.875h-6ZM15.615 12.367c.016-.12.027-.24.027-.367s-.011-.248-.027-.367l.814-.62a.186.186 0 0 0 .046-.24l-.771-1.297a.196.196 0 0 0-.235-.082l-.96.375c-.2-.15-.417-.274-.652-.368l-.146-.993a.186.186 0 0 0-.19-.158H11.98a.186.186 0 0 0-.19.158l-.146.993a2.983 2.983 0 0 0-.651.368l-.96-.375a.19.19 0 0 0-.235.082l-.771 1.298a.181.181 0 0 0 .046.24l.813.619c-.015.12-.027.243-.027.367s.012.248.027.367l-.813.62a.186.186 0 0 0-.046.24l.77 1.297c.047.082.151.112.236.082l.96-.375c.2.15.416.274.651.368l.147.993c.011.09.092.158.189.158h1.542a.186.186 0 0 0 .189-.158l.146-.993a2.98 2.98 0 0 0 .652-.368l.96.375a.19.19 0 0 0 .235-.082l.771-1.298a.186.186 0 0 0-.046-.24l-.814-.619Zm-2.864.945c-.744 0-1.35-.588-1.35-1.312 0-.724.606-1.313 1.35-1.313.744 0 1.35.59 1.35 1.313 0 .724-.606 1.313-1.35 1.313Z"
                clipRule="evenodd"
            />
        </svg>
    );
}

export default DashboardCustomize;
