import { useEffect, useCallback } from 'react';

export default function useOnPressEsc(handler) {
    const downHandler = useCallback(
        ({ keyCode }) => {
            if (keyCode === 27) {
                handler && handler();
            }
        },
        [handler],
    );

    useEffect(() => {
        window.addEventListener('keydown', downHandler);
        return () => {
            window.removeEventListener('keydown', downHandler);
        };
    }, [downHandler]);
}
