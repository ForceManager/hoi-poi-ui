import React from 'react';

function RelationFields({ color = '#788590', ...props }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path
                fill={color}
                fillRule="evenodd"
                d="M9.484 6.523c.987 1.705 2.79 1.82 3.588 1.378l2.266 3.914s-1.31-.441-1.42-.348c-.109.093-.155.59.011.806.167.217 2.221.766 2.655.516.434-.25 1.113-2.332 1.113-2.685 0-.149-.48-.506-.771-.368-.292.138-.505 1.455-.505 1.455l-2.266-3.913c.926-.728 1.291-2.453.538-3.754-.84-1.45-2.684-1.954-4.124-1.125-1.44.83-1.925 2.673-1.085 4.124ZM6.59 16.371c.853.325 1.923 1.777 1.248 3.627-.575 1.574-2.303 2.389-3.866 1.822-1.562-.567-2.361-2.3-1.787-3.873.515-1.412 2.076-2.241 3.23-2.002l1.55-4.247s-1.148.684-1.442.55c-.294-.134-.328-.73-.213-.826.27-.226 2.306-1.046 2.777-.875.471.17 1.37 2.093 1.31 2.359-.058.266-.47.55-.612.526-.142-.024-.645-1.307-.645-1.307L6.59 16.37Zm9.38 2.034c.014-.91 1.016-2.41 2.99-2.41 1.68 0 3.039 1.341 3.039 3 0 1.657-1.359 2.998-3.039 2.998-1.506 0-2.821-1.178-2.99-2.341h-4.533s1.038.842 1.012 1.163c-.026.322-.576.557-.705.482-.307-.175-1.776-1.803-1.776-2.303s1.504-1.999 1.776-2.035c.27-.035.679.253.705.395.026.14-1.012 1.051-1.012 1.051h4.532Z"
                clipRule="evenodd"
            />
        </svg>
    );
}

export default RelationFields;