import React from 'react';

function Duplicate({ color, ...props }) {
    return (
        <svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <path
                    d="M8.968 0C9.638 0 10 .361 10 1.032V6.19c0 .671-.361 1.032-1.032 1.032H3.81c-.671 0-1.032-.36-1.032-1.032V1.032C2.778.362 3.138 0 3.81 0h5.158zm-.08 6.111v-5h-5v5h5zM2.223 3.333h-1.11V8.89h5.555V7.778h1.11v1.358a.867.867 0 0 1-.863.864H.864A.867.867 0 0 1 0 9.136v-6.05c0-.475.389-.864.864-.864h1.358v1.111z"
                    id="a"
                />
            </defs>
            <g fill="none" fillRule="evenodd">
                <mask id="b" fill={color}>
                    <use xlinkHref="#a" />
                </mask>
                <use fill="#8C949C" fillRule="nonzero" xlinkHref="#a" />
                <g>
                    <path d="M0 0h10v10H0z" />
                </g>
            </g>
        </svg>
    );
}

export default React.memo(Duplicate);
