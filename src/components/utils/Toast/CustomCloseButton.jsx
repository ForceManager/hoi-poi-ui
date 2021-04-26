import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Icon from '../../general/Icon';

const CustomCloseButton = memo(({ properties, closeToast }) => {
    if (!properties.closeButton && !properties.useDefaultCloseButton) return null;
    let classes = ['HoiPoi__ToastCloseButton'];
    if (properties.closeButtonClassName) classes.push(properties.closeButtonClassName);
    return (
        <div className={classes.join(' ')} onClick={closeToast}>
            {properties.useDefaultCloseButton && (
                <Icon name="close" size="large" onClick={closeToast} />
            )}
            {!properties.useDefaultCloseButton && properties.closeButton}
        </div>
    );
});

CustomCloseButton.propTypes = {
    customCloseButton: PropTypes.element,
    closeToast: PropTypes.func,
};

export default CustomCloseButton;
