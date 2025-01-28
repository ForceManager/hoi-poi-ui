import React from 'react';
import { colors } from '../../../../../utils/styles/defaultTheme';

function TimerOff({ color = colors.actionMinor[500], ...props }) {
    return (
        <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 24" {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="m19.54 4.55-1.42 1.42a9.012 9.012 0 0 0-10.57-.49l1.46 1.46C10.03 6.35 11.23 6 12.5 6c3.87 0 7 3.13 7 7 0 1.27-.35 2.47-.94 3.49l1.45 1.45A8.878 8.878 0 0 0 21.5 13c0-2.12-.74-4.07-1.97-5.61l1.42-1.42-1.41-1.42ZM15.5 1h-6v2h6V1Zm-4 8.44 2 2V8h-2v1.44ZM3.52 4 2.25 5.27 5 8.03A8.905 8.905 0 0 0 3.5 13c0 4.97 4.02 9 9 9 1.84 0 3.55-.55 4.98-1.5l2.5 2.5 1.27-1.27-7.71-7.71L3.52 4Zm8.98 16c-3.87 0-7-3.13-7-7 0-1.28.35-2.48.95-3.52l9.56 9.56c-1.03.61-2.23.96-3.51.96Z"
                fill={color}
            />
        </svg>
    );
}

export default TimerOff;
