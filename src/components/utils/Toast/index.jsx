import { toast } from 'react-toastify';
import Toast from './Toast';
import showToast from './showToast';

const dismiss = toast.dismiss;
export { Toast, showToast as toast, dismiss };
