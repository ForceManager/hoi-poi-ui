import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import classnames from 'classnames';
import RModal from 'react-modal';

import { getOverrides } from '../../../utils/overrides';
import Text from '../../typography/Text';
import Icon from '../../general/Icon';
import Button from '../../general/Button';

import styles from './styles';

const SIZES = {
    small: 400,
    medium: 670,
    large: 875,
};

function Modal({
    children,
    overrides: overridesProp,
    className: classNameProp,
    classes,
    title,
    isOpen,
    useCornerClose,
    useHeader,
    size,
    width,
    cancelText,
    confirmText,
    onCancel,
    onConfirm,
    onAfterOpen,
    onRequestClose,
    shouldCloseOnEsc,
    shouldCloseOnOverlayClick,
    closeTimeoutMS,
    ...props
}) {
    // Overrides
    const override = getOverrides(overridesProp, Modal.overrides);

    // Classes
    const rootClassName = classnames(classes.root, classNameProp);

    let contentStyle = {
        width: width || SIZES[size],
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
        overlayClassName: classes.overlay,
        onAfterOpen,
        onRequestClose,
        shouldCloseOnOverlayClick,
        shouldCloseOnEsc,
        closeTimeoutMS,
        ...override.root,
    };

    const showFooter = onConfirm || onCancel;

    return (
        <RModal className={rootClassName} {...rootProps}>
            {useHeader && (
                <div className={classes.header} {...override.header}>
                    <Text size="big" className={classes.title} {...override.title}>
                        {title}
                    </Text>
                    {useCornerClose && (
                        <Icon
                            size="medium"
                            name="close"
                            className={classes.closeIcon}
                            onClick={onRequestClose}
                            {...override.closeIcon}
                        />
                    )}
                </div>
            )}
            <div className={classes.content} {...override.content}>
                {children}
            </div>
            {showFooter && (
                <div className={classes.footer} {...override.footer}>
                    {onCancel && (
                        <Button
                            className={classes.cancelButton}
                            onClick={onCancel}
                            {...override.cancelButton}
                        >
                            {cancelText}
                        </Button>
                    )}
                    {onConfirm && (
                        <Button
                            color="primary"
                            className={classes.confirmButton}
                            onClick={onConfirm}
                            {...override.confirmButton}
                        >
                            {confirmText}
                        </Button>
                    )}
                </div>
            )}
        </RModal>
    );
}

Modal.overrides = [
    'root',
    'title',
    'header',
    'content',
    'footer',
    'closeIcon',
    'cancelButton',
    'confirmButton',
];

Modal.defaultProps = {
    size: 'medium',
    shouldCloseOnOverlayClick: true,
    shouldCloseOnEsc: true,
    useCornerClose: true,
    useHeader: true,
    closeTimeoutMS: 300,
};

Modal.propTypes = {
    className: PropTypes.string,
    overrides: PropTypes.object,
    children: PropTypes.any,
    title: PropTypes.string,
    isOpen: PropTypes.bool.isRequired,
    width: PropTypes.string,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    onCancel: PropTypes.func,
    onConfirm: PropTypes.func,
    confirmText: PropTypes.string,
    cancelText: PropTypes.string,
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
};

export default React.memo(withStyles(styles, { name: 'Modal' })(Modal));
