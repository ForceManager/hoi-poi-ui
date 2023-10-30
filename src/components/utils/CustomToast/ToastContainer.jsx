import React, { memo, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ToastGroup from './ToastGroup';
import { getOverrides, useClasses } from '../../../utils/overrides';
import { createUseStyles } from '../../../utils/styles';
import { useToastContainer, useToastAutoClose } from './hooks';
import { POSITION } from './constants';
import { CLEAR_TOAST, publish } from '../../../utils/eventBuser';
import styles from './styles';
import { TransitionGroup } from './transitions';
const useStyles = createUseStyles(styles, 'ToastContainer');

const DEFAULT_CLOSE_TIME = 4000;

const ToastContainer = memo(
    ({
        classes: classesProp,
        className: classNameProp,
        overrides: overridesProp,
        autoClose = false,
        useDefaultCloseButton,
        closeOnClick,
        position,
        transition,
        newestOnTop,
        preComponent,
        postComponent,
        containerId,
    }) => {
        const { toasts, setToasts, clearDeletedToast } = useToastContainer({
            position,
            transition,
            autoClose,
            useDefaultCloseButton,
            closeOnClick,
            newestOnTop,
            containerId,
        });

        const classes = useClasses(useStyles, classesProp);

        const override = getOverrides(overridesProp, ToastContainer.overrides);
        const rootClassName = classnames(classes.root, {}, classNameProp);

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

        const rootProps = useMemo(() => {
            const props = {};
            props.id = containerId || 'hoi-poi-ui-toast-container';
            return props;
        }, [containerId]);

        return (
            <div className={rootClassName} {...rootProps} {...override.root}>
                <TransitionGroup className={classes.TransitionGroup}>
                    {Object.entries(POSITION).map(([key, value]) => {
                        const finalPreComponent = preComponent?.[key];
                        const finalPostComponent = postComponent?.[key];
                        return (
                            <ToastGroup
                                key={key}
                                position={key}
                                toasts={toasts[value] || []}
                                removeToast={removeToast}
                                clearDeletedToast={clearDeletedToast}
                                preComponent={finalPreComponent}
                                postComponent={finalPostComponent}
                                override={override}
                            />
                        );
                    })}
                </TransitionGroup>
            </div>
        );
    },
);

ToastContainer.overrides = ['root', 'ToastGroup', 'Toast', 'ToastWrapper'];

ToastContainer.defaultProps = {
    className: '',
    overrides: {},
    position: 'topRight',
    autoClose: 4000,
    newestOnTop: true,
    closeOnClick: false,
};

ToastContainer.propTypes = {
    className: PropTypes.string,
    overrides: PropTypes.object,
    content: PropTypes.element,
    closeButton: PropTypes.element,
    closeButtonClassName: PropTypes.string,
    closeOnClick: PropTypes.bool,
    newestOnTop: PropTypes.bool,
    position: PropTypes.oneOf([
        'topLeft',
        'topCenter',
        'topRight',
        'bottomLeft',
        'bottomCenter',
        'bottomRight',
    ]),
    preComponent: PropTypes.shape({
        topLeft: PropTypes.element,
        topCenter: PropTypes.element,
        topRight: PropTypes.element,
        bottomLeft: PropTypes.element,
        bottomCenter: PropTypes.element,
        bottomRight: PropTypes.element,
    }),
    postComponent: PropTypes.shape({
        topLeft: PropTypes.element,
        topCenter: PropTypes.element,
        topRight: PropTypes.element,
        bottomLeft: PropTypes.element,
        bottomCenter: PropTypes.element,
        bottomRight: PropTypes.element,
    }),
    autoClose: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
};

export default ToastContainer;
