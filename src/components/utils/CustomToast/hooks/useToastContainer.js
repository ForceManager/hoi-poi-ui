import { useState, useEffect, useCallback } from 'react';
import { v4 as uuid } from 'uuid';
import { subscribe, SHOW_TOAST, CLEAR_TOAST } from '../../../../utils/eventBuser';
import { POSITIONS_TOP } from '../constants';

export const useToastContainer = ({ position, newestOnTop }) => {
    const [loaded, setLoaded] = useState(false);
    const [portalId] = useState(`toast-portal-${uuid()}`);
    const [toasts, setToasts] = useState([]);

    const removeToast = useCallback(
        (id) => {
            setToasts(toasts.filter((t) => t.id !== id));
        },
        [toasts],
    );

    useEffect(() => {
        return subscribe(SHOW_TOAST, (toast) => {
            if (!toast) return;
            const id = uuid();
            let newToasts = [...toasts];
            if (!isNaN(toast.order)) {
                let index = toast.order - 1;
                newToasts.splice(index, 0, {
                    ...toast,
                    id,
                });
            } else if (newestOnTop) {
                if (POSITIONS_TOP.includes(position)) {
                    newToasts.unshift({ ...toast, id });
                } else newToasts.push({ ...toast, id });
            } else newToasts.push({ ...toast, id });

            setToasts(newToasts);
            return id;
        });
    }, [toasts, position, newestOnTop]);

    useEffect(() => {
        return subscribe(CLEAR_TOAST, (props) => {
            if (!props?.id) return;
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

    return { loaded, portalId, toasts, setToasts };
};
