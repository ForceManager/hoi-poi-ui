import React from 'react';

function FlagOutline({ color = '#788590', ...props }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M503.575 120.474l24.093 120.465h315.618v361.395h-202.381l-24.093-120.465h-436.084v-361.395h322.846zM602.356 0.009h-542.093v1023.952h120.465v-421.628h337.302l24.093 120.465h421.628v-602.326h-337.302z"
                fill={color}
            />
        </svg>
    );
}

export default FlagOutline;
