import { CLEAR_TOAST, publish, SHOW_TOAST } from '../../../../utils/eventBuser';

const showToast = (props) => {
    if (!props) return;
    return publish(SHOW_TOAST, { ...props });
};

const clearToast = (id) => {
    publish(CLEAR_TOAST, { id });
};

export { showToast, clearToast };
