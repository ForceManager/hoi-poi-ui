import React from 'react';

function Ppt({ ...props }) {
    return (
        <svg viewBox="0 0 18 18" {...props}>
            <g fill="none" fill-rule="evenodd">
                <path
                    d="M14.06 6.736h-1.5v-2.19a2.805 2.805 0 012.251 2.19h-.75zm2.508-3.537h-5.986v2.579a2.12 2.12 0 011.45-.573v2.07h2.11c0 1.143-.945 2.07-2.11 2.07a2.12 2.12 0 01-1.45-.573v1.824H15.9v.733h-5.318v1.035h5.295v.734h-5.295V14.8h5.986a.47.47 0 00.474-.465V3.664a.47.47 0 00-.474-.465zM.563 2.439V15.56l9.492 1.877V.563z"
                    fill="#D04727"
                />
                <path
                    d="M4.024 9.701v2.49H2.859V5.49h2.564c.749 0 1.343.194 1.784.584.44.39.66.905.66 1.547 0 .656-.215 1.167-.646 1.532-.432.366-1.035.548-1.812.548H4.024zm0-.934h1.4c.413 0 .73-.098.947-.292.218-.195.327-.477.327-.845 0-.362-.11-.651-.331-.868-.221-.216-.525-.327-.912-.333H4.024v2.338z"
                    fill="#FFF"
                />
            </g>
        </svg>
    );
}

export default React.memo(Ppt);