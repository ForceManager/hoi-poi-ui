import { useEffect, useState, useMemo, useRef } from 'react';

export const useToastAutoClose = ({ toasts, setToasts, autoCloseTime }) => {
    const [removing, setRemoving] = useState('');
    const lastNumberRef = useRef(0);
    const lastToastIdRef = useRef('');

    useEffect(() => {
        if (removing) {
            const newToasts = Object.entries(toasts).reduce((obj, [key, value]) => {
                obj[key] = value.map((current) => {
                    if (current.id === removing) {
                        current.isActive = false;
                    }
                    return current;
                });
                return obj;
            }, {});
            setToasts(newToasts);
            setRemoving('');
        }
    }, [removing, setToasts, toasts]);

    const lastToast = useMemo(() => {
        let lastToast = null;
        for (let key in toasts) {
            const last = toasts[key].filter((current) => current.number > lastNumberRef.current);
            if (last[0]) lastToast = last[0];
        }
        return lastToast;
    }, [toasts]);

    useEffect(() => {
        if (lastToast) lastNumberRef.current = lastToast.number;
        if (lastToast?.autoClose && lastToast?.id !== lastToastIdRef.current) {
            const id = lastToast.id;
            lastToastIdRef.current = id;
            setTimeout(() => setRemoving(id), autoCloseTime);
        }
    }, [autoCloseTime, removing, lastToast]);
};
