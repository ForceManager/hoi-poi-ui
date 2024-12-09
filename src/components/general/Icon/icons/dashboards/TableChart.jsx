import * as React from 'react';
import { colors } from '../../../../../utils/styles/defaultTheme';

function TableChart({ color = colors.actionMinor[500], ...props }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" {...props}>
            <path fill="#A9B1B9" d="M5 5h14v3H5z" />
            <path
                fill="#335B70"
                d="M19 21H5c-.55 0-1.02-.196-1.413-.587A1.926 1.926 0 0 1 3 19V5c0-.55.196-1.02.587-1.413A1.926 1.926 0 0 1 5 3h14c.55 0 1.02.196 1.413.587C20.803 3.98 21 4.45 21 5v14c0 .55-.196 1.02-.587 1.413A1.926 1.926 0 0 1 19 21ZM5 8h14V5H5v3Zm2.5 2H5v9h2.5v-9Zm9 0v9H19v-9h-2.5Zm-2 0h-5v9h5v-9Z"
            />
        </svg>
    );
}

export default TableChart;
