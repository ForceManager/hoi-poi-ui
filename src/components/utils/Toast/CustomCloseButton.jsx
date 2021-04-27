import React, { memo, useCallback } from 'react';
import PropTypes from 'prop-types';
import Icon from '../../general/Icon';

const CustomCloseButton = memo(({ properties, closeToast }) => {
    const handleCloseToast = useCallback(
        (e) => {
            e.preventDefault();
            e.stopPropagation();
            closeToast();
        },
        [closeToast],
    );

    if (!properties.closeButton && !properties.useDefaultCloseButton) return null;
    let classes = ['HoiPoi__ToastCloseButton'];
    if (properties.closeButtonClassName) classes.push(properties.closeButtonClassName);

    return (
        <>
            {properties.useDefaultCloseButton && (
                <Icon name="close" size="large" onClick={handleCloseToast} />
            )}
            {!properties.useDefaultCloseButton && (
                <div className={classes.join(' ')} onClick={handleCloseToast}>
                    {properties.closeButton}
                </div>
            )}
        </>
    );
});

CustomCloseButton.propTypes = {
    customCloseButton: PropTypes.element,
    closeToast: PropTypes.func,
};

export default CustomCloseButton;
