import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import getDataUri from './getDataUri';
import { getOverrides, useClasses } from '../../../utils/overrides';

import { createUseStyles } from '../../../utils/styles';
import styles from './styles';
const useStyles = createUseStyles(styles, 'Avatar');

function Avatar({
    classes: classesProp,
    overrides: overridesProps,
    className: classNameProps,
    size,
    src,
    alt,
    placeholder,
    ...props
}) {
    const classes = useClasses(useStyles, classesProp);
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
                            setDefaultSrc(placeholder);
                            setHadError(true);
                            setIsImageLoaded(true);
                        }
                    });
            } else if (placeholder) {
                setDefaultSrc(placeholder);
                setIsImageLoaded(true);
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
    size: PropTypes.oneOf(['small', 'medium', 'large', 'big', 'huge']),
};

export default React.memo(Avatar);
