import React from 'react';

function Vsd({ ...props }) {
    return (
        <svg viewBox="0 0 18 18" {...props}>
            <g fill="none" fill-rule="evenodd">
                <path
                    stroke="#FFF"
                    stroke-width=".931"
                    fill="#FFF"
                    d="M12.63 11.575h1.705v1H12.63z"
                />
                <path
                    d="M14.599 11.699v.465l.465-.465H14.6zm-.124 0h-.465l.465.465V11.7zm0-3.288v-.466l-.465.466h.465zm.124 0h.465l-.465-.466v.466zM11.047 6.301h1.706v1h-1.706z"
                    stroke="#FFF"
                    stroke-width=".931"
                    fill="#FFF"
                />
                <path
                    d="M13.791 4.472h1.492l-2.61 2.61V5.592l2.61 2.61H13.79l2.61-2.61v1.492l-2.61-2.61zm3.356 1.865l-2.61 2.61-2.61-2.61 2.61-2.61 2.61 2.61z"
                    fill="#FFF"
                    fill-rule="nonzero"
                />
                <path
                    fill="#38549E"
                    d="M10.582 2.672h6.855v12.656h-6.855zM.563 2.439V15.56l9.492 1.877V.563z"
                />
                <path
                    d="M12.49 13.28v.466l.465-.465h-.465zm-.124 0H11.9l.466.466v-.465zm0-3.287v-.466l-.466.466h.466zm.124 0h.465l-.465-.466v.466z"
                    stroke="#FFF"
                    stroke-width=".931"
                    fill="#FFF"
                />
                <path
                    d="M12.226 9.993h.465l-.465-.466v.466zm0 .124v.465l.465-.465h-.465zm-1.178 0h-.466l.466.465v-.465zm0-.124v-.466l-.466.466h.466zM12.226 13.157h.465l-.465-.466v.466zm0 .124v.465l.465-.465h-.465zm-1.178 0h-.466l.466.465v-.465zm0-.124v-.466l-.466.466h.466z"
                    stroke="#FFF"
                    stroke-width=".931"
                    fill="#FFF"
                />
                <path
                    fill="#FFF"
                    d="M5.198 10.522l1.514-4.66h1.137l-2.144 5.957H4.703L2.567 5.86H3.7z"
                />
            </g>
        </svg>
    );
}

export default React.memo(Vsd);
