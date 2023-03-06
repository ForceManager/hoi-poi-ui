import React, { useState, useEffect, useMemo, useRef } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import getDataUri from './getDataUri';
import { getOverrides, useClasses } from '../../../utils/overrides';
import Icon from '../Icon';
import Text from '../../typography/Text';
import { getFirstTwoInitials, removeAccents } from '../../../utils/string';

import { createUseStyles } from '../../../utils/styles';
import styles from './styles';
const useStyles = createUseStyles(styles, 'SingleAvatar');

function SingleAvatar({
    classes: classesProp,
    overrides: overridesProps,
    className: classNameProps,
    type,
    size,
    src,
    icon,
    alt,
    placeholder,
    ...props
}) {
    const classes = useClasses(useStyles, classesProp);
    const [defaultSrc, setDefaultSrc] = useState(placeholder || src);
    const [isImageLoaded, setIsImageLoaded] = useState(false);
    const [hadError, setHadError] = useState(false);
    const initialSrc = useRef(src).current;

    const rootClassName = classnames(classes.root, classes[type], classes[size], classNameProps);
    const override = getOverrides(overridesProps, SingleAvatar.overrides);
    const rootProps = {
        ...props,
        className: rootClassName,
    };

    useEffect(() => {
        let willUnmount = false;
        
        if (!isImageLoaded || initialSrc !== src) {
            if (src && !hadError) {
                getDataUri(src)
                    .then((dataUri) => {
                        if (!willUnmount) {
                            if (dataUri) setDefaultSrc(dataUri);
                            setIsImageLoaded(true);
                        }
                    })
                    .catch(() => {
                        if (placeholder && !willUnmount) {
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
        return () => {
            willUnmount = true;
        };
    }, [src, placeholder, initialSrc, defaultSrc, isImageLoaded, hadError]);

    const content = useMemo(() => {
        if (src || placeholder) {
            return <img src={defaultSrc} alt={alt} />;
        }
        if (icon) {
            return <Icon className={classes.icon} name={icon} />;
        }
        if (alt) {
            const initials = getFirstTwoInitials(removeAccents(alt));
            return <Text className={classes.initials}>{initials}</Text>;
        }
        return null;
    }, [alt, classes.icon, classes.initials, defaultSrc, icon, placeholder, src]);

    return (
        <div {...rootProps} {...override.root}>
            {content}
        </div>
    );
}

SingleAvatar.overrides = ['root'];

SingleAvatar.defaultProps = {
    type: 'round',
    size: 'medium',
};

SingleAvatar.propTypes = {
    src: PropTypes.string,
    placeholder: PropTypes.string,
    alt: PropTypes.string,
    icon: PropTypes.string,
    type: PropTypes.oneOf(['round', 'square']),
    size: PropTypes.oneOf(['small', 'medium', 'large', 'big', 'huge']),
};

export default React.memo(SingleAvatar);
