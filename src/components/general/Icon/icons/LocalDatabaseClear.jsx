import React from 'react';

const LocalDatabaseClear = ({ color = '#7D8A96', color2 = '#FF8C00' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
        <path
            fill={color}
            d="M12 3c4.42 0 8 1.79 8 4s-3.58 4-8 4-8-1.79-8-4 3.58-4 8-4ZM4 9c0 2.21 3.58 4 8 4s8-1.79 8-4v3.08L19 12c-2.59 0-4.8 1.64-5.64 3.94L12 16c-4.42 0-8-1.79-8-4V9Zm0 5c0 2.21 3.58 4 8 4h1c0 1.05.27 2.04.75 2.9L12 21c-4.42 0-8-1.79-8-4v-3Z"
        />
        <path
            fill={color2}
            d="m19.06 18.52 2.322-2.31-.583-.584-1.739 1.739-.87-.87-.572.573 1.442 1.452ZM15 21.364v-.819h9v.819h-9Zm1.227-1.228a.788.788 0 0 1-.578-.24.788.788 0 0 1-.24-.578v-4.5c0-.225.08-.417.24-.578.16-.16.353-.24.578-.24h6.546c.225 0 .417.08.578.24.16.16.24.353.24.578v4.5c0 .225-.08.418-.24.578a.788.788 0 0 1-.578.24h-6.546Zm0-.818h6.546v-4.5h-6.546v4.5Z"
        />
    </svg>
);
export default LocalDatabaseClear;