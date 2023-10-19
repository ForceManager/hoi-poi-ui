import ReactDOM from 'react-dom';
import React, { useCallback, forwardRef, useImperativeHandle } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Toast from './Toast';
import { useClasses } from '../../../utils/overrides';
import { createUseStyles } from '../../../utils/styles';
import { useToastContainer, useToastAutoClose } from './hooks';
import { POSITION } from './constants';
import { CLEAR_TOAST, publish, SHOW_TOAST } from '../../../utils/eventBuser';
import styles from './styles';
import { TransitionGroup } from './transitions';
const useStyles = createUseStyles(styles, 'ToastContainer');

/**
 * The parent of this component should not have
 * to worry about maintaining a list of message
 * objects. That would require the parent to
 * also manage the deletion of toasts, etc.
 *
 * To accommodate this, we are using a combination
 * of useImperativeHandle and forwardRef to give
 * the parent access to this component's addMessage
 * functionality.
 */

const DEFAULT_CLOSE_TIME = 4000;

const ToastContainer = forwardRef(
    (
        {
            classes: classesProp,
            className: classNameProp,
            autoClose = false,
            position,
            transition,
            newestOnTop,
            preComponent,
            postComponent,
        },
        ref,
    ) => {
        const { loaded, portalId, toasts, setToasts, clearDeletedToast } = useToastContainer({
            position,
            newestOnTop,
        });

        const classes = useClasses(useStyles, classesProp);
        const rootClassName = classnames(
            classes.root,
            {
                [classes.topLeft]: position === 'top-left',
                [classes.topCenter]: position === 'top-center',
                [classes.topRight]: position === 'top-right',
                [classes.bottomLeft]: position === 'bottom-left',
                [classes.bottomCenter]: position === 'bottom-center',
                [classes.bottomRight]: position === 'bottom-right',
            },
            classNameProp,
        );

        useToastAutoClose({
            toasts,
            setToasts,
            autoClose,
            autoCloseTime:
                autoClose && typeof autoClose !== 'boolean' && !isNaN(autoClose)
                    ? autoClose
                    : DEFAULT_CLOSE_TIME,
        });

        const removeToast = useCallback((id) => {
            publish(CLEAR_TOAST, { id });
        }, []);

        useImperativeHandle(ref, () => ({
            toast(toast) {
                publish(SHOW_TOAST, { toast });
            },
            dismissToast(id) {
                removeToast(id);
            },
        }));

        return loaded ? (
            ReactDOM.createPortal(
                <div className={rootClassName}>
                    {preComponent && preComponent}
                    <TransitionGroup>
                        {toasts.map((t) => (
                            <Toast
                                key={t.id}
                                id={t.id}
                                type={t.type}
                                title={t.title || ''}
                                text={t.text || ''}
                                content={t.content || null}
                                isActive={t.isActive}
                                onClose={() => removeToast(t.id)}
                                position={POSITION[position]}
                                transition={transition}
                                useDefaultCloseButton={t.useDefaultCloseButton}
                                clearDeletedToast={clearDeletedToast}
                            />
                        ))}
                    </TransitionGroup>

                    {postComponent && postComponent}
                </div>,

                document.getElementById(portalId),
            )
        ) : (
            <></>
        );
    },
);

ToastContainer.defaultProps = {
    className: '',
    autoClose: 4000,
    newestOnTop: true,
    closeOnClick: false,
};

ToastContainer.propTypes = {
    className: PropTypes.string,
    overrides: PropTypes.object,
    containerId: PropTypes.any,
    content: PropTypes.element,
    closeButton: PropTypes.element,
    closeButtonClassName: PropTypes.string,
    closeOnClick: PropTypes.bool,
    newestOnTop: PropTypes.bool,
    position: PropTypes.oneOf([
        'top-left',
        'top-center',
        'top-right',
        'bottom-left',
        'bottom-center',
        'bottom-right',
    ]),
    autoClose: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
};

export default ToastContainer;
