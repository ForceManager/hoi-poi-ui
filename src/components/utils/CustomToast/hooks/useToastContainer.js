import { useState, useEffect, useCallback } from 'react';
import { v4 as uuid } from 'uuid';
import { subscribe, SHOW_TOAST, CLEAR_TOAST } from '../../../../utils/eventBuser';

export const useToastContainer = ({ position, newestOnTop }) => {
    const [loaded, setLoaded] = useState(false);
    const [portalId] = useState(`toast-portal-${uuid()}`);
    const [toasts, setToasts] = useState([]);

    const removeToast = useCallback(
        (id) => {
            // setToasts(toasts.filter((t) => t.id !== id));
            const newToasts = toasts.map((current) => {
                if (current.id === id) current.isActive = false;
                return current;
            });
            setToasts(newToasts);
        },
        [toasts],
    );

    const removeAllToast = useCallback(() => {
        // setToasts([]);
        const newToasts = toasts.map((current) => {
            current.isActive = false;
            return current;
        });
        setToasts(newToasts);
    }, [toasts]);

    const clearDeletedToast = useCallback(
        (id) => {
            setToasts(toasts.filter((t) => t.id !== id));
        },
        [toasts],
    );

    useEffect(() => {
        return subscribe(SHOW_TOAST, (toast) => {
            if (!toast) return;

            toast.isActive = true;
            let newToasts = [...toasts];

            if (!isNaN(toast.order)) {
                let index = toast.order - 1;
                newToasts.splice(index, 0, toast);
            } else if (newestOnTop) {
                newToasts.push(toast);
            } else newToasts.unshift(toast);

            setToasts(newToasts);
        });
    }, [toasts, position, newestOnTop]);

    useEffect(() => {
        return subscribe(CLEAR_TOAST, (props) => {
            if (!props?.id) return removeAllToast();
            removeToast(props.id);
        });
    });

    useEffect(() => {
        const div = document.createElement('div');
        div.id = portalId;
        div.style = 'position: fixed; top: 10px; right: 10px';
        document.getElementsByTagName('body')[0].prepend(div);

        setLoaded(true);

        return () => document.getElementsByTagName('body')[0].removeChild(div);
    }, [portalId]);

    return { loaded, portalId, toasts, setToasts, clearDeletedToast };
};
