import React from 'react';

function Cognitive({ color = '#788590', ...props }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
                d="M13.636 2c.452 0 .819.366.819.818v18.364a.818.818 0 01-1.637 0V2.818c0-.452.366-.818.818-.818zm3.273 2.5c.452 0 .818.366.818.818v13.364a.818.818 0 01-1.636 0V5.318c0-.452.366-.818.818-.818zm-6.545 1.667c.452 0 .818.366.818.818v10.03a.818.818 0 11-1.637 0V6.985c0-.452.367-.818.819-.818zM3.818 7c.452 0 .818.366.818.818v8.364a.818.818 0 01-1.636 0V7.818C3 7.366 3.366 7 3.818 7zm3.273 1.667c.452 0 .818.366.818.818v5.03a.818.818 0 11-1.636 0v-5.03c0-.452.366-.818.818-.818zm13.09.833c.453 0 .819.366.819.818v3.364a.818.818 0 01-1.636 0v-3.364c0-.452.366-.818.818-.818z"
                fill={color}
                fillRule="evenodd"
            />
        </svg>
    );
}

export default Cognitive;