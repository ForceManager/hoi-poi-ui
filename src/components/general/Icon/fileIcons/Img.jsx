import React from 'react';

function Img({ ...props }) {
    return (
        <svg viewBox="0 0 18 18" {...props}>
            <path
                d="M2.733.5c.011.003.017.02.017.104v16.467h12.728l.005-12.466c-.393-.414-.84-.86-2.098-2.1l-.03-.03A87.825 87.825 0 0111.391.5h-8.66zm12.745 16.753v.004-.004zM2.733.5h-.016.016z"
                stroke="#A8D1EC"
                fill="#A8D1EC"
            />
            <path
                d="M15.51 18H2.718c-.258 0-.467-.238-.467-.532v-5.655h13.728v5.655c0 .294-.21.532-.467.532z"
                fill="#5FB35F"
            />
            <path
                d="M5.995 16.567h-.554v-3.2h.554v3.2zm1.517-3.2l.923 2.453.92-2.452h.719v3.199H9.52v-1.055l.055-1.41-.945 2.465h-.398l-.942-2.463.055 1.408v1.055H6.79v-3.2h.72zm5.783 2.785c-.115.15-.276.265-.48.342a1.963 1.963 0 01-.7.117c-.268 0-.505-.06-.711-.182a1.215 1.215 0 01-.478-.522 1.826 1.826 0 01-.175-.792v-.25c0-.484.116-.862.347-1.134.232-.271.555-.407.97-.407.355 0 .638.088.847.263.21.176.336.43.378.76h-.545c-.061-.385-.285-.577-.67-.577-.249 0-.438.09-.568.269-.13.18-.197.443-.201.79v.246c0 .346.073.614.219.805a.72.72 0 00.607.287c.284 0 .487-.064.607-.193v-.627h-.66v-.421h1.213v1.226z"
                fill="#FFF"
            />
            <path
                d="M7.741 4.667a1.373 1.373 0 11-2.746 0 1.373 1.373 0 012.746 0z"
                fill="#FFDE5A"
            />
            <path
                fill="#5FB35F"
                d="M2.25 11.813h13.728V8.838L12.785 6.04 9.434 9.43 7.683 7.813z"
            />
        </svg>
    );
}

export default React.memo(Img);
