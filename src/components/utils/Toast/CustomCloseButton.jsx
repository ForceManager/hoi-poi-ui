import React, { memo } from 'react';
import PropTypes from 'prop-types';

const CustomCloseButton = memo(({ properties, closeToast }) => {
    if (!properties.closeButton) return null;
    let classes = ['HoiPoi__ToastCloseButton'];
    if (properties.closeButtonClassName) classes.push(properties.closeButtonClassName);
    return (
        <div className={classes.join(' ')} onClick={closeToast}>
            {properties.closeButton}
        </div>
    );
});

CustomCloseButton.propTypes = {
    customCloseButton: PropTypes.element,
    closeToast: PropTypes.func,
};

export default CustomCloseButton;
