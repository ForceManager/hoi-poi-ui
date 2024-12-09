import React from 'react';

function TaskCheckedOutline({ color = '#335B70', ...props }) {
    return (
        <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 4.143c-4.317 0-7.857 3.54-7.857 7.857s3.54 7.857 7.857 7.857 7.857-3.54 7.857-7.857c0-.739-.104-1.455-.297-2.134l1.691-1.653A9.908 9.908 0 0122 12c0 5.5-4.5 10-10 10S2 17.5 2 12 6.5 2 12 2c2.318 0 4.458.8 6.159 2.136l-1.55 1.514A7.8 7.8 0 0012 4.143zm-1.054 9.039l6.74-6.587 1.533-1.498.246-.24 1.583 1.558-10.102 9.87-5.613-5.483 1.583-1.547 4.03 3.927z"
                fill={color}
            />
        </svg>
    );
}

export default TaskCheckedOutline;
