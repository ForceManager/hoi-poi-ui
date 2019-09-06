import { toast } from 'react-toastify';

const dismissToast = (id) => {
    if (!id) return toast.dismiss();
    return toast.dismiss(id);
};

export default dismissToast;
