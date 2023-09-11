import React, { useMemo, useRef, useLayoutEffect, useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import RModal from 'react-modal';

import { getOverrides, useClasses } from '../../../utils/overrides';
import Text from '../../typography/Text';
import Link from '../../typography/Link';
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
    huge: 1280,
    full: '90%',
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
    useAutoWidth,
    useContentStaticHeight,
    size,
    height,
    width,
    cancelText,
    middleButtonText,
    confirmText,
    deleteText,
    onCancel,
    onMiddleButton,
    onConfirm,
    onDelete,
    isMiddleButtonDisabled,
    isMiddleButtonLoading,
    isConfirmDisabled,
    isConfirmLoading,
    onAfterOpen,
    onRequestClose,
    shouldCloseOnEsc,
    shouldCloseOnOverlayClick,
    closeTimeoutMS,
    getContentRef,
    preComponent,
    postComponent,
    ...props
}) {
    const modalRef = useRef();
    const maxHeight = useMemo(() => {
        const base = width || SIZES[size];
        const baseReduced = base * 0.2;
        const newHeight = base + baseReduced;
        return newHeight;
    }, [width, size]);
    const [autoHeight, setAutoHeight] = useState(maxHeight);
    const [autoWidth, setAutoWidth] = useState(width || SIZES[size]);
    const autoHeightRef = useRef(maxHeight);
    const prevIsOpenRef = useRef(isOpen);
    const isFirstLoadRef = useRef(true);
    const classes = useClasses(useStyles, classesProp);
    // Overrides
    const override = getOverrides(overridesProp, Modal.overrides);

    // Classes
    const rootClassName = classnames(classes.root, classNameProp);
    const overlayClassNames = classnames(classes.overlay, overlayClassName);

    const onResize = useCallback(() => {
        setTimeout(() => {
            const node = modalRef?.current?.node;
            const overlay = node?.querySelector('.ReactModal__Overlay');

            if (!overlay) return;

            if (useAutoWidth) {
                const defaultWidth = width || SIZES[size];
                const marginWidth = overlay.clientWidth * 0.2;
                const maxModalWidthWithMargins = overlay.clientWidth - marginWidth;

                if (defaultWidth > maxModalWidthWithMargins) {
                    setAutoWidth(maxModalWidthWithMargins);
                } else {
                    setAutoWidth(defaultWidth);
                }
            }

            if (useAutoHeight) {
                if (overlay.clientHeight < maxHeight + 20) {
                    const marginHeight = overlay.clientHeight * 0.2;
                    const maxModalHeightWithMargins = overlay.clientHeight - marginHeight;
                    if (autoHeightRef.current === maxModalHeightWithMargins) return;
                    autoHeightRef.current = maxModalHeightWithMargins;
                    setAutoHeight(maxModalHeightWithMargins);
                } else {
                    if (autoHeightRef.current === maxHeight) return;
                    autoHeightRef.current = maxHeight;
                    setAutoHeight(maxHeight);
                }
            }
        });
    }, [maxHeight, useAutoHeight, useAutoWidth, size, width]);

    useLayoutEffect(() => {
        if (!useAutoWidth && !useAutoHeight) return;
        if (isOpen && (isFirstLoadRef.current || isOpen !== prevIsOpenRef.current)) {
            onResize();
        }
        prevIsOpenRef.current = isOpen;
        isFirstLoadRef.current = false;
    }, [isOpen, onResize, useAutoWidth, useAutoHeight]);

    useLayoutEffect(() => {
        if (!useAutoWidth && !useAutoHeight) return;
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, [onResize, useAutoWidth, useAutoHeight]);

    let rootContentStyle = useMemo(() => {
        let finalHeight = size === 'full' ? '90%' : 'auto';
        if (height) finalHeight = height;

        return {
            width: useAutoWidth ? autoWidth : width || SIZES[size],
            height: finalHeight,
            maxWidth: '100%',
            maxHeight: '100%',
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        };
    }, [useAutoWidth, autoWidth, width, size, height]);

    const rootProps = {
        ariaHideApp: false,
        isOpen,
        style: {
            content: rootContentStyle,
        },
        overlayClassName: overlayClassNames,
        onAfterOpen,
        onRequestClose,
        shouldCloseOnOverlayClick,
        shouldCloseOnEsc,
        closeTimeoutMS,
        contentRef: getContentRef,
        ...override.root,
    };

    const contentStyles = useMemo(() => {
        if (size === 'full' || height) return { height: '100%' };
        if (!useContentStaticHeight && !useAutoHeight) return {};
        if (useContentStaticHeight) return { height: autoHeight };
        else return { maxHeight: autoHeight };
    }, [height, size, useContentStaticHeight, useAutoHeight, autoHeight]);

    const showFooter = onConfirm || onCancel || onDelete;

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
                        <div className={classes.footerLeft} {...override.footerLeft}>
                            {onDelete && (
                                <Link
                                    className={classes.deleteButton}
                                    onClick={onDelete}
                                    {...override.deleteButton}
                                >
                                    {deleteText}
                                </Link>
                            )}
                        </div>
                        <div className={classes.footerRight} {...override.footerRight}>
                            {onCancel && (
                                <Button
                                    type="terciary"
                                    className={classes.cancelButton}
                                    onClick={onCancel}
                                    isDisabled={isConfirmLoading}
                                    {...override.cancelButton}
                                >
                                    {cancelText}
                                </Button>
                            )}
                            {onMiddleButton && (
                                <Button
                                    type="secondary"
                                    className={classes.middleButton}
                                    onClick={onMiddleButton}
                                    isDisabled={isMiddleButtonDisabled || false}
                                    isLoading={isMiddleButtonLoading}
                                    {...override.middleButton}
                                >
                                    {middleButtonText}
                                </Button>
                            )}
                            {onConfirm && (
                                <Button
                                    className={classes.confirmButton}
                                    onClick={onConfirm}
                                    isDisabled={isConfirmDisabled || false}
                                    isLoading={isConfirmLoading}
                                    {...override.confirmButton}
                                >
                                    {confirmText}
                                </Button>
                            )}
                        </div>
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
    'footerLeft',
    'footerRight',
    'closeIcon',
    'cancelButton',
    'middleButton',
    'confirmButton',
    'deleteButton',
];

Modal.defaultProps = {
    size: 'medium',
    useAutoHeight: true,
    useAutoWidth: true,
    useContentStaticHeight: false,
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
    isOpen: PropTypes.bool,
    width: PropTypes.string,
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    size: PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'big', 'huge', 'full']),
    useAutoHeight: PropTypes.bool,
    useAutoWidth: PropTypes.bool,
    useContentStaticHeight: PropTypes.bool,
    onCancel: PropTypes.func,
    onConfirm: PropTypes.func,
    onMiddleButton: PropTypes.func,
    onDelete: PropTypes.func,
    confirmText: PropTypes.string,
    middleButtonText: PropTypes.string,
    cancelText: PropTypes.string,
    deleteText: PropTypes.string,
    isMiddleButtonDisabled: PropTypes.bool,
    isMiddleButtonLoading: PropTypes.bool,
    isConfirmDisabled: PropTypes.bool,
    /** Function that will be called after the drawer has opened */
    isConfirmLoading: PropTypes.bool,
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
