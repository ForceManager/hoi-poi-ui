import React, { useMemo, useRef, useLayoutEffect, useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import RModal from 'react-modal';

import { getOverrides, useClasses } from '../../../utils/overrides';
import Text from '../../typography/Text';
import Icon from '../../general/Icon';
import Button from '../../general/Button';

import { createUseStyles } from '../../../utils/styles';
import styles from './styles';
const useStyles = createUseStyles(styles, 'Modal');

const SIZES = {
    tiny: 320,
    small: 440,
    medium: 640,
    large: 960,
    big: 1120,
};

function Modal({
    children,
    classes: classesProp,
    overrides: overridesProp,
    className: classNameProp,
    overlayClassName,
    title,
    isOpen,
    useCornerClose,
    useHeader,
    useAutoHeight,
    size,
    width,
    cancelText,
    confirmText,
    onCancel,
    onConfirm,
    isConfirmDisabled,
    onAfterOpen,
    onRequestClose,
    shouldCloseOnEsc,
    shouldCloseOnOverlayClick,
    closeTimeoutMS,
    preComponent,
    postComponent,
    ...props
}) {
    const modalRef = useRef();
    const maxHeight = useMemo(() => {
        const base = width || SIZES[size];
        const baseReduced = base * 0.4;
        const newHeight = base + baseReduced;
        return newHeight;
    }, [width, size]);
    const [maxContentHeight, setMaxContentHeight] = useState(maxHeight);
    const maxContentHeightRef = useRef(maxHeight);
    const prevIsOpenRef = useRef(isOpen);
    const classes = useClasses(useStyles, classesProp);
    // Overrides
    const override = getOverrides(overridesProp, Modal.overrides);

    // Classes
    const rootClassName = classnames(classes.root, classNameProp);
    const overlayClassNames = classnames(classes.overlay, overlayClassName);

    const onResize = useCallback(() => {
        setTimeout(() => {
            const node = modalRef?.current.node;
            const overlay = node.querySelector('.ReactModal__Overlay');

            if (!overlay) return;

            if (overlay.clientHeight < maxHeight + 20) {
                if (maxContentHeightRef.current === overlay.clientHeight - 20) return;
                maxContentHeightRef.current = overlay.clientHeight - 20;
                setMaxContentHeight(overlay.clientHeight - 20);
            } else {
                if (maxContentHeightRef.current === maxHeight) return;
                maxContentHeightRef.current = maxHeight;
                setMaxContentHeight(maxHeight);
            }
        });
    }, [maxHeight]);

    useLayoutEffect(() => {
        if (isOpen && isOpen !== prevIsOpenRef.current) {
            onResize();
        }
        prevIsOpenRef.current = isOpen;
    }, [isOpen, onResize]);

    useLayoutEffect(() => {
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, [onResize]);

    let contentStyle = {
        width: width || SIZES[size],
        maxWidth: '100%',
        maxHeight: '100%',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    };

    const rootProps = {
        ariaHideApp: false,
        isOpen,
        style: {
            content: contentStyle,
        },
        overlayClassName: overlayClassNames,
        onAfterOpen,
        onRequestClose,
        shouldCloseOnOverlayClick,
        shouldCloseOnEsc,
        closeTimeoutMS,
        ...override.root,
    };

    const contentStyles = useMemo(() => {
        if (!useAutoHeight) return {};
        return {
            maxHeight: maxContentHeight,
        };
    }, [useAutoHeight, maxContentHeight]);

    const showFooter = onConfirm || onCancel;

    const renderTitle = useMemo(() => {
        if (typeof title === 'string') {
            return (
                <Text type="h6" className={classes.title} {...override.title}>
                    {title}
                </Text>
            );
        }
        return title;
    }, [classes.title, override.title, title]);

    return (
        <RModal className={rootClassName} {...rootProps} ref={modalRef}>
            <div className={classes.container} style={contentStyles} {...override.container}>
                {useHeader && (
                    <div className={classes.header} {...override.header}>
                        {renderTitle}
                        {useCornerClose && (
                            <Icon
                                size="large"
                                name="close"
                                className={classes.closeIcon}
                                onClick={onRequestClose}
                                {...override.closeIcon}
                            />
                        )}
                    </div>
                )}
                {preComponent && (
                    <div className={classes.preComponent} {...override.preComponent}>
                        {preComponent}
                    </div>
                )}
                <div className={classes.content} {...override.content}>
                    {children}
                </div>
                {postComponent && (
                    <div className={classes.postComponent} {...override.postComponent}>
                        {postComponent}
                    </div>
                )}
                {showFooter && (
                    <div className={classes.footer} {...override.footer}>
                        {onCancel && (
                            <Button
                                type="terciary"
                                className={classes.cancelButton}
                                onClick={onCancel}
                                {...override.cancelButton}
                            >
                                {cancelText}
                            </Button>
                        )}
                        {onConfirm && (
                            <Button
                                className={classes.confirmButton}
                                onClick={onConfirm}
                                isDisabled={isConfirmDisabled || false}
                                {...override.confirmButton}
                            >
                                {confirmText}
                            </Button>
                        )}
                    </div>
                )}
            </div>
        </RModal>
    );
}

Modal.overrides = [
    'root',
    'title',
    'header',
    'container',
    'content',
    'preComponent',
    'postComponent',
    'footer',
    'closeIcon',
    'cancelButton',
    'confirmButton',
];

Modal.defaultProps = {
    size: 'medium',
    useAutoHeight: true,
    shouldCloseOnOverlayClick: true,
    shouldCloseOnEsc: true,
    useCornerClose: true,
    useHeader: true,
    closeTimeoutMS: 300,
};

Modal.propTypes = {
    className: PropTypes.string,
    overlayClassName: PropTypes.string,
    overrides: PropTypes.object,
    children: PropTypes.any,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    isOpen: PropTypes.bool.isRequired,
    width: PropTypes.string,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    onCancel: PropTypes.func,
    onConfirm: PropTypes.func,
    confirmText: PropTypes.string,
    cancelText: PropTypes.string,
    isConfirmDisabled: PropTypes.string,
    /** Function that will be called after the drawer has opened */
    onAfterOpen: PropTypes.func,
    /** Function that will be called when the drawer is requested to be closed (either by clicking on overlay or pressing ESC) */
    onRequestClose: PropTypes.func,
    /** Close on overlay click, you must implement onRequestClose. */
    shouldCloseOnOverlayClick: PropTypes.bool,
    /** Close on ESC, you must implement onRequestClose. */
    shouldCloseOnEsc: PropTypes.bool,
    /** Show corner close icon. */
    useCornerClose: PropTypes.bool,
    /** Show header section */
    useHeader: PropTypes.bool,
    closeTimeoutMS: PropTypes.number,
    preComponent: PropTypes.element,
    postComponent: PropTypes.element,
};

export default React.memo(Modal);
