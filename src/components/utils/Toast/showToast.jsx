import React from 'react';
import { toast } from 'react-toastify';
import ToastMessage from './ToastMessage';

const TOAST_TYPES = {
    success: toast.TYPE.SUCCESS,
    info: toast.TYPE.INFO,
    error: toast.TYPE.ERROR,
};

const CustomCloseButton = ({ customCloseButton, closeToast }) => {
    if (!customCloseButton) return null;
    return <div onClick={closeToast}>{customCloseButton}</div>;
};

const showToast = (props) => {
    const { type = 'info', text = '', title = '', containerId, content, closeButton, ...newProps } = props;

    if (content) {
        return toast(content, {
            closeButton: <CustomCloseButton customCloseButton={closeButton} />,
            ...newProps,
        });
    }
    const toastType = TOAST_TYPES[type];
    const messageProps = {
        title,
        text,
        type,
    };

    return toast(<ToastMessage {...messageProps} />, {
        type: toastType,
        containerId: containerId || 'hoi-poi-ui',
        ...newProps,
    });
};

export default showToast;
