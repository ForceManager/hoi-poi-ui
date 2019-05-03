import { useEffect } from 'react';

export default function useOnPressEsc(handler) {
    function downHandler({ keyCode }) {
        if (keyCode === 27) {
            handler && handler();
        }
    }

    useEffect(() => {
        window.addEventListener('keydown', downHandler);
        return () => {
            window.removeEventListener('keydown', downHandler);
        };
    }, []);
}
