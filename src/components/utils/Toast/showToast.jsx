import React from 'react';
import { toast } from 'react-toastify';
import ToastMessage from './ToastMessage';
import CustomCloseButton from './CustomCloseButton';
import Icon from '../../general/Icon';

const handleCloseToast = (closeToast) => {
    return (e) => {
        e.preventDefault();
        e.stopPropagation();
        closeToast();
    };
};

const renderDefaultCloseButton = ({ closeToast }) => {
    return <Icon name="close" size="large" onClick={handleCloseToast(closeToast)} />;
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
        useDefaultCloseButton,
        ...newProps
    } = props;

    if (content) {
        const properties = {
            closeButton: closeButton || false,
            closeButtonClassName,
            useDefaultCloseButton,
        };

        return toast(content, {
            containerId: containerId || 'hoi-poi-ui',
            closeButton: <CustomCloseButton properties={properties} />,
            ...newProps,
        });
    }

    const messageProps = {
        title,
        text,
        type,
    };

    const defaultCloseButton = useDefaultCloseButton ? renderDefaultCloseButton : null;

    return toast(<ToastMessage {...messageProps} />, {
        type,
        containerId: containerId || 'hoi-poi-ui',
        closeButton: defaultCloseButton || closeButton || false,
        ...newProps,
    });
};

export default showToast;
