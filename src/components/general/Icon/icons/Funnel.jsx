import React from 'react';

function Funnel({ color = '#788590', ...props }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
            <path
                fill={color}
                d="M14.9 0H3.1C0 0-.9 2.4 1 4.7l6.2 7 .8.8V17c0 .5.4 1 1 1s1-.5 1-1v-4.5l.8-.8 6.2-7C18.9 2.4 18 0 14.9 0zm.6 3.3L9.6 9.9l-.6.7-.6-.7-5.9-6.6c-.9-1-.7-1.3.6-1.3H15c1.2 0 1.4.3.5 1.3z"
            />
        </svg>
    );
}

export default React.memo(Funnel);
