import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import classnames from 'classnames';
import getDataUri from './getDataUri';
import { getOverrides } from '../../../utils/overrides';

import styles from './styles';

function Avatar({
    overrides: overridesProps,
    className: classNameProps,
    classes,
    size,
    src,
    alt,
    placeholder,
    ...props
}) {
    const [defaultSrc, setDefaultSrc] = useState(placeholder || src);
    const [isImageLoaded, setIsImageLoaded] = useState(false);
    const [hadError, setHadError] = useState(false);
    const initialSrc = useRef(src).current;

    const rootClassName = classnames(classes.root, classes[size], classNameProps);
    const override = getOverrides(overridesProps, Avatar.overrides);
    const rootProps = {
        ...props,
        className: rootClassName,
    };

    useEffect(() => {
        if (!isImageLoaded || initialSrc !== src) {
            if (src && !hadError) {
                getDataUri(src)
                    .then((dataUri) => {
                        if (dataUri) setDefaultSrc(dataUri);
                        setIsImageLoaded(true);
                    })
                    .catch(() => {
                        if (placeholder) {
                            getDataUri(placeholder).then((dataUri) => {
                                if (dataUri) setDefaultSrc(dataUri);
                                setHadError(true);
                                setIsImageLoaded(true);
                            });
                        }
                    });
            } else if (placeholder) {
                getDataUri(placeholder).then((dataUri) => {
                    if (dataUri) setDefaultSrc(dataUri);
                    setIsImageLoaded(true);
                });
            }
        }
    }, [src, placeholder, initialSrc, defaultSrc, isImageLoaded, hadError]);

    return (
        <div {...rootProps} {...override.root}>
            <img src={defaultSrc} alt={alt} />
        </div>
    );
}

Avatar.overrides = ['root'];

Avatar.defaultProps = {
    size: 'medium',
};

Avatar.propTypes = {
    src: PropTypes.string,
    placeholder: PropTypes.string,
    alt: PropTypes.string,
    size: PropTypes.oneOf(['small', 'medium', 'large', 'big']),
};

export default React.memo(withStyles(styles, { name: 'Avatar' })(Avatar));
