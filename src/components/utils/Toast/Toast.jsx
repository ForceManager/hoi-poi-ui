import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { ToastContainer } from 'react-toastify';
import { getOverrides, useClasses } from '../../../utils/overrides';
import { createUseStyles } from '../../../utils/styles';
import Icon from '../../general/Icon';
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
    useDefaultCloseButton,
    ...props
}) {
    const classes = useClasses(useStyles, classesProp);
    // Overrides
    const override = getOverrides(overridesProp, Toast.overrides);

    // Classes
    const rootClassName = classnames(classes.root, {}, classNameProp);

    const handleCloseToast = useCallback((closeToast) => {
        return (e) => {
            e.preventDefault();
            e.stopPropagation();
            closeToast();
        };
    }, []);

    const renderDefaultCloseButton = useCallback(
        ({ closeToast }) => {
            return (
                <Icon
                    name="close"
                    size="large"
                    onClick={handleCloseToast(closeToast)}
                    {...override.close}
                />
            );
        },
        [handleCloseToast, override.close],
    );

    let defaultCloseButton = useDefaultCloseButton ? renderDefaultCloseButton : null;

    const rootProps = {
        ...props,
        className: rootClassName,
        closeButton: defaultCloseButton || closeButton || false,
        closeButtonClassName: closeButtonClassName || '',
        hideProgressBar: true,
        autoClose: autoClose,
        containerId: containerId || 'hoi-poi-ui',
        newestOnTop: newestOnTop || false,
        position: position,
        icon: false,
    };

    return <ToastContainer {...rootProps} enableMultiContainer {...override['react-toastify']} />;
}

Toast.overrides = ['close'];

Toast.defaultProps = {
    className: '',
    overrides: {},
    autoClose: 4000,
    useDefaultCloseButton: false,
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
    useDefaultCloseButton: PropTypes.bool,
};

export default React.memo(Toast);
