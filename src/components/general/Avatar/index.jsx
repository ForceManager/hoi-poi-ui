import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import classnames from 'classnames';
import getDataUri from './getDataUri';

import styles from './styles';

function Avatar({
    className,
    classes,
    size,
    url,
    alt,
    placeholder,
    successCallback,
    errorCallback,
    ...props
}) {
    const [src, setSrc] = useState(placeholder || url);
    const [isImageLoaded, setIsImageLoaded] = useState(false);
    const initialUrl = url;

    let img = new Image();
    img.onload = () => {
        successCallback && successCallback();
    };

    img.onerror = () => {
        errorCallback && errorCallback();
    };

    img.src = src;
    img.alt = alt;

    useEffect(() => {
        if (!isImageLoaded || initialUrl !== url) {
            getDataUri(src).then((dataUri) => {
                if (dataUri) setSrc(dataUri);
                setIsImageLoaded(true);
            });
        }
    }, [url, initialUrl, src, isImageLoaded]);

    const rootClassName = classnames(classes.root, classes[size], className);
    const rootProps = {
        ...props,
        className: rootClassName,
    };

    const image = img.outerHTML;

    return <div {...rootProps} dangerouslySetInnerHTML={{ __html: image }}></div>;
}

Avatar.defaultProps = {
    size: 'medium',
};

Avatar.propTypes = {
    url: PropTypes.string,
    placeholder: PropTypes.string,
    alt: PropTypes.string,
    successCallback: PropTypes.func,
    errorCallback: PropTypes.func,
    size: PropTypes.oneOf(['small', 'medium', 'large', 'big']),
};

export default React.memo(withStyles(styles, { name: 'Avatar' })(Avatar));
