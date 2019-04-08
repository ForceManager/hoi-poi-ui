import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import classnames from 'classnames';
import Modal from 'react-modal';
import { getOverrides } from '../../utils/overrides';
import styles from './styles';

function Drawer({
    children,
    overrides: overridesProp,
    className: classNameProp,
    classes,
    isOpen,
    width,
    side,
    closeTimeout,
    onRequestClose,
    onAfterOpen,
    ...props
}) {
    // Overrides
    const override = getOverrides(overridesProp, Drawer.overrides);

    // Classes
    const rootClassName = classnames(classes.root, classes[side], classNameProp);

    const rootProps = {
        ariaHideApp: false,
        isOpen,
        closeTimeoutMS: closeTimeout,
        style: {
            content: { width },
        },
        overlayClassName: classes.overlay,
        onAfterOpen: onAfterOpen,
        onRequestClose: onRequestClose,
        shouldCloseOnOverlayClick: false,
        ...override.modal,
    };

    return (
        <Modal className={rootClassName} {...rootProps}>
            <div className={classes.content} {...override.content}>
                {children}
            </div>
        </Modal>
    );
}

Drawer.overrides = ['modal', 'content'];

Drawer.defaultProps = {
    width: '500px',
    side: 'right',
    closeTimeout: 500,
};

Drawer.propTypes = {
    children: PropTypes.any,
    isOpen: PropTypes.bool.isRequired,
    width: PropTypes.string,
    side: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
    className: PropTypes.string,
    /**Milliseconds to wait before closing the drawer */
    closeTimeout: PropTypes.number,
    /** Function that will be called when the modal is requested to be closed (clicking on overlay os pressing ESC) */
    onRequestClose: PropTypes.func,
    /** Function that will be called after the drawer has opened */
    onAfterOpen: PropTypes.func,
};

export default React.memo(withStyles(styles, { name: 'Drawer' })(Drawer));
