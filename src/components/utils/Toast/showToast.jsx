import React from 'react';
import { toast } from 'react-toastify';
import ToastMessage from './ToastMessage';

const showToast = (props) => {
    const { type = 'info', text = '', title = '' } = props;

    const options = {};
    switch (type) {
        case 'success':
            options.type = toast.TYPE.SUCCESS;
            break;

        case 'error':
            options.type = toast.TYPE.ERROR;
            break;
        case 'info':
        default:
            options.type = toast.TYPE.INFO;
    }

    const messageProps = {
        title,
        text,
        type,
    };

    return toast(<ToastMessage {...messageProps} />, options);
};

export default showToast;
