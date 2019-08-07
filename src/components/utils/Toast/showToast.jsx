import React from 'react';
import { toast } from 'react-toastify';
import ToastMessage from './ToastMessage';

const TOAST_TYPES = {
    success: toast.TYPE.SUCCESS,
    info: toast.TYPE.INFO,
    error: toast.TYPE.ERROR,
};

const showToast = (props) => {
    const { type = 'info', text = '', title = '', containerId } = props;
    const toastType = TOAST_TYPES[type];
    const messageProps = {
        title,
        text,
        type,
    };

    return toast(<ToastMessage {...messageProps} />, {
        type: toastType,
        containerId: containerId || 'hoi-poi-ui',
    });
};

export default showToast;
