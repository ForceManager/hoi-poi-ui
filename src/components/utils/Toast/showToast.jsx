import React from 'react';
import { toast } from 'react-toastify';
import ToastMessage from './ToastMessage';
import CustomCloseButton from './CustomCloseButton';

const TOAST_TYPES = {
    success: toast.TYPE.SUCCESS,
    info: toast.TYPE.INFO,
    error: toast.TYPE.ERROR,
};

const showToast = (props) => {
    const {
        type = 'info',
        text = '',
        title = '',
        containerId,
        content,
        closeButton,
        closeButtonClassName,
        ...newProps
    } = props;

    if (content) {
        const properties = {
            closeButton,
            closeButtonClassName,
        };

        return toast(content, {
            containerId: containerId || 'hoi-poi-ui',
            closeButton: <CustomCloseButton properties={properties} />,
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
