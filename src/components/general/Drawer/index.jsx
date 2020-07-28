import React, { useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Modal from 'react-modal';
import Text from '../../typography/Text';
import { getOverrides, useClasses } from '../../../utils/overrides';

import { createUseStyles } from '../../../utils/styles';
import styles from './styles';
const useStyles = createUseStyles(styles, 'Drawer');

function getTransitionEndEventName() {
    const transitions = {
        transition: 'transitionend',
        OTransition: 'oTransitionEnd',
        MozTransition: 'transitionend',
        WebkitTransition: 'webkitTransitionEnd',
    };
    let bodyStyle = document.body.style;
    for (let transition in transitions) {
        if (bodyStyle[transition] !== undefined) {
            return transitions[transition];
        }
    }
}
const transitionEndEventName = getTransitionEndEventName();

function Drawer({
    children,
    classes: classesProp,
    overrides: overridesProp,
    className: classNameProp,
    isOpen,
    width,
    side,
    closeTimeout,
    onAfterOpen,
    onRequestClose,
    shouldCloseOnOverlayClick,
    shouldCloseOnEsc,
    contentStyles,
    style,
    onTransitionEnds,
    ...props
}) {
    const classes = useClasses(useStyles, classesProp);
    // Overrides
    const override = getOverrides(overridesProp, Drawer.overrides);
    const drawerRef = useRef(document);

    // Classes
    const rootClassName = classnames(classes.root, classes[side], classNameProp);

    let contentStyle = { width };
    if (side && ['top', 'bottom'].includes(side)) contentStyle = { height: width };

    const onAfterOpenCb = useCallback(() => {
        if (!onTransitionEnds && !onAfterOpen) return;
        if (onAfterOpen) return onAfterOpen();

        const drawerTransitionEl = drawerRef.current.querySelector(`.${classes.root}`);
        drawerTransitionEl.addEventListener(transitionEndEventName, onTransitionEnds);
        return () =>
            drawerTransitionEl.removeEventListener(transitionEndEventName, onTransitionEnds);
    }, [classes.root, onAfterOpen, onTransitionEnds]);

    const rootProps = {
        ariaHideApp: false,
        isOpen,
        closeTimeoutMS: closeTimeout,
        style: {
            content: {
                ...contentStyle,
                ...contentStyles,
            },
            ...style,
        },
        overlayClassName: classes.overlay,
        onRequestClose,
        shouldCloseOnOverlayClick: false,
        shouldCloseOnEsc: false,
        ...override.root,
    };

    return (
        <Modal onAfterOpen={onAfterOpenCb} className={rootClassName} {...rootProps}>
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
    /** Function that will be called after the drawer has opened and transition has ended*/
    onTransitionEnds: PropTypes.func,
    /** Close on overlay click, you must implement onRequestClose. */
    shouldCloseOnOverlayClick: PropTypes.bool,
    /** Close on ESC, you must implement onRequestClose. */
    shouldCloseOnEsc: PropTypes.bool,
    contentStyles: PropTypes.object,
};

export default React.memo(Drawer);
