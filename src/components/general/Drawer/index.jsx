import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import classnames from 'classnames';
import Modal from 'react-modal';
import Text from '../../typography/Text';
import { getOverrides } from '../../../utils/overrides';
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
    onAfterOpen,
    onRequestClose,
    shouldCloseOnOverlayClick,
    shouldCloseOnEsc,
    contentStyles,
    ...props
}) {
    // Overrides
    const override = getOverrides(overridesProp, Drawer.overrides);

    // Classes
    const rootClassName = classnames(classes.root, classes[side], classNameProp);

    let contentStyle = { width };
    if (side && ['top', 'bottom'].includes(side)) contentStyle = { height: width };

    const rootProps = {
        ariaHideApp: false,
        isOpen,
        closeTimeoutMS: closeTimeout,
        style: {
            content: {
                ...contentStyle,
                ...contentStyles,
            },
        },
        overlayClassName: classes.overlay,
        onAfterOpen,
        onRequestClose,
        shouldCloseOnOverlayClick: false,
        shouldCloseOnEsc: false,
        ...override.root,
    };

    return (
        <Modal className={rootClassName} {...rootProps}>
            <Text className={classes.Text} {...override.Text}>
                {children}
            </Text>
        </Modal>
    );
}

Drawer.overrides = ['root', 'Text'];

Drawer.defaultProps = {
    width: '500px',
    side: 'right',
    closeTimeout: 500,
    shouldCloseOnOverlayClick: true,
    shouldCloseOnEsc: true,
};

Drawer.propTypes = {
    className: PropTypes.string,
    overrides: PropTypes.object,
    children: PropTypes.any,
    isOpen: PropTypes.bool.isRequired,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    side: PropTypes.oneOf(['right', 'left']),
    /**Milliseconds to wait before closing the drawer */
    closeTimeout: PropTypes.number,
    /** Function that will be called after the drawer has opened */
    onAfterOpen: PropTypes.func,
    /** Function that will be called when the drawer is requested to be closed (either by clicking on overlay or pressing ESC) */
    onRequestClose: PropTypes.func,
    /** Close on overlay click, you must implement onRequestClose. */
    shouldCloseOnOverlayClick: PropTypes.bool,
    /** Close on ESC, you must implement onRequestClose. */
    shouldCloseOnEsc: PropTypes.bool,
    contentStyles: PropTypes.object,
};

export default React.memo(withStyles(styles, { name: 'Drawer' })(Drawer));
