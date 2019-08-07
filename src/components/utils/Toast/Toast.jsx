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
    ...props
}) {
    // Overrides
    const override = getOverrides(overridesProp, Toast.overrides);

    // Classes
    const rootClassName = classnames(classes.root, {}, classNameProp);

    const rootProps = {
        ...props,
        className: rootClassName,
        closeButton: false,
        hideProgressBar: true,
        autoClose: 4000,
        containerId: containerId || 'hoi-poi-ui',
    };

    return <ToastContainer {...rootProps} enableMultiContainer {...override['react-toastify']} />;
}

Toast.overrides = [];

Toast.defaultProps = {
    className: '',
    overrides: {},
};

Toast.propTypes = {
    className: PropTypes.string,
    overrides: PropTypes.object,
    containerId: PropTypes.any,
};

export default React.memo(withStyles(styles, { name: 'Toast' })(Toast));
