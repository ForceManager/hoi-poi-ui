import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import classnames from 'classnames';
import { ToastContainer } from 'react-toastify';

import { getOverrides } from '../../../utils/overrides';
import styles from './styles';

function Toast({
    classes,
    className: classNameProp,
    overrides: overridesProp,
    containerId,
    closeButton,
    newestOnTop,
    position,
    autoClose,
    ...props
}) {
    // Overrides
    const override = getOverrides(overridesProp, Toast.overrides);

    // Classes
    const rootClassName = classnames(classes.root, {}, classNameProp);

    const rootProps = {
        ...props,
        className: rootClassName,
        closeButton: closeButton || false,
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
    closeOnClick: PropTypes.bool,
    newestOnTop: PropTypes.bool,
    position: PropTypes.oneOf(['top-right', 'top-left', 'bottom-right', 'bottom-left']),
    autoClose: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
};

export default React.memo(withStyles(styles, { name: 'Toast' })(Toast));
