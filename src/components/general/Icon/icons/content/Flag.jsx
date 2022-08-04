import React from 'react';

function Flag({ color = '#788590', ...props }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M626.446 120.465l-24.094-120.468h-542.112v1023.989h120.468v-421.644h337.314l24.094 120.468h421.644v-602.347h-337.314z"
                fill={color}
            />
        </svg>
    );
}

export default Flag;
