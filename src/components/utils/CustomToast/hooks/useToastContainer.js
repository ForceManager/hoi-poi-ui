import { useState, useEffect, useCallback, useRef } from 'react';
import { subscribe, SHOW_TOAST, CLEAR_TOAST } from '../../../../utils/eventBuser';
import { POSITION } from '../constants';

const getDefaultToasts = () => {
    return Object.entries(POSITION).reduce((obj, [key, value]) => {
        obj[value] = [];
        return obj;
    }, {});
};

export const useToastContainer = ({
    position,
    transition,
    autoClose,
    newestOnTop,
    useDefaultCloseButton,
    closeOnClick,
}) => {
    const [toasts, setToasts] = useState(getDefaultToasts());
    const toastNumberRef = useRef(1);

    const removeToast = useCallback(
        (id) => {
            const newToasts = Object.entries(toasts).reduce((obj, [key, value]) => {
                obj[key] = value.map((current) => {
                    if (current.id === id) current.isActive = false;
                    return current;
                });
                return obj;
            }, {});
            setToasts(newToasts);
        },
        [toasts],
    );

    const removeAllToast = useCallback(() => {
        const newToasts = Object.entries(toasts).reduce((obj, [key, value]) => {
            obj[key] = value.map((current) => {
                current.isActive = false;
                return current;
            });
            return obj;
        }, {});
        setToasts(newToasts);
    }, [toasts]);

    const clearDeletedToast = useCallback(
        (id) => {
            const newToasts = Object.entries(toasts).reduce((obj, [key, value]) => {
                obj[key] = value.filter((t) => t.id !== id);
                return obj;
            }, {});
            setToasts(newToasts);
        },
        [toasts],
    );

    useEffect(() => {
        return subscribe(SHOW_TOAST, (toast) => {
            if (!toast) return;

            toast.isActive = true;
            if (!toast.transition) toast.transition = transition;
            if (!toast.position) toast.position = position;
            if (toast?.autoClose === undefined || toast?.autoClose === null) {
                toast.autoClose = autoClose;
            }
            if (
                toast?.useDefaultCloseButton === undefined ||
                toast?.useDefaultCloseButton === null
            ) {
                toast.useDefaultCloseButton = useDefaultCloseButton;
            }
            if (toast?.closeOnClick === undefined || toast?.closeOnClick === null) {
                toast.closeOnClick = closeOnClick;
            }
            toast.number = toastNumberRef.current;
            toastNumberRef.current++;

            const toastPosition = POSITION?.[toast.position] || null;
            if (!toastPosition) return;

            let toastsByPosition = [...toasts[toastPosition]];

            if (newestOnTop) {
                toastsByPosition.push(toast);
            } else {
                toastsByPosition.unshift(toast);
            }
            let newToasts = { ...toasts, [toastPosition]: toastsByPosition };

            setToasts(newToasts);
        });
    }, [toasts, position, newestOnTop, transition, autoClose, useDefaultCloseButton, closeOnClick]);

    useEffect(() => {
        return subscribe(CLEAR_TOAST, (props) => {
            if (!props?.id) return removeAllToast();
            removeToast(props.id);
        });
    });

    return { toasts, setToasts, clearDeletedToast, removeToast };
};
