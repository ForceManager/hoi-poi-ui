import { useEffect, useState } from 'react';

export const useToastAutoClose = ({ toasts, setToasts, lastToast, autoCloseTime }) => {
    const [removing, setRemoving] = useState('');

    useEffect(() => {
        if (removing) {
            const newToasts = Object.entries(toasts).reduce((obj, [key, value]) => {
                obj[key] = value.map((current) => {
                    if (current.id === removing) current.isActive = false;
                    return current;
                });
                return obj;
            }, {});
            setToasts(newToasts);
            setRemoving('');
        }
    }, [removing, setToasts, toasts]);

    useEffect(() => {
        if (lastToast?.autoClose) {
            const id = lastToast.id;
            setTimeout(() => setRemoving(id), autoCloseTime);
        }
    }, [toasts, lastToast, autoCloseTime, removing]);
};
