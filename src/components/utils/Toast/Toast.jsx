import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { ToastContainer } from 'react-toastify';
import { getOverrides, useClasses } from '../../../utils/overrides';
import { createUseStyles } from '../../../utils/styles';
import styles from './styles';
const useStyles = createUseStyles(styles, 'Toast');

function Toast({
    classes: classesProp,
    className: classNameProp,
    overrides: overridesProp,
    containerId,
    closeButton,
    closeButtonClassName,
    newestOnTop,
    position,
    autoClose,
    ...props
}) {
    const classes = useClasses(useStyles, classesProp);
    // Overrides
    const override = getOverrides(overridesProp, Toast.overrides);

    // Classes
    const rootClassName = classnames(classes.root, {}, classNameProp);

    const rootProps = {
        ...props,
        className: rootClassName,
        closeButton: closeButton || false,
        closeButtonClassName: closeButtonClassName || '',
        hideProgressBar: true,
        autoClose: autoClose,
        containerId: containerId || 'hoi-poi-ui',
        newestOnTop: newestOnTop || false,
        position: position,
    };

    return <ToastContainer {...rootProps} enableMultiContainer {...override['react-toastify']} />;
}

Toast.overrides = [];

Toast.defaultProps = {
    className: '',
    overrides: {},
    autoClose: 4000,
};

Toast.propTypes = {
    className: PropTypes.string,
    overrides: PropTypes.object,
    containerId: PropTypes.any,
    content: PropTypes.element,
    closeButton: PropTypes.element,
    closeButtonClassName: PropTypes.string,
    closeOnClick: PropTypes.bool,
    newestOnTop: PropTypes.bool,
    position: PropTypes.oneOf(['top-right', 'top-left', 'bottom-right', 'bottom-left']),
    autoClose: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
};

export default React.memo(Toast);
