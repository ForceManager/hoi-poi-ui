import { v4 as uuid } from 'uuid';
import { CLEAR_TOAST, publish, SHOW_TOAST } from '../../../../utils/eventBuser';

const showToast = (props) => {
    if (!props) return;
    const id = uuid();
    publish(SHOW_TOAST, { ...props, id });
    return id;
};

const clearToast = (id) => {
    publish(CLEAR_TOAST, { id });
};

export { showToast, clearToast };
