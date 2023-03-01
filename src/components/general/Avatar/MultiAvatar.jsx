import React, { memo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import getDataUri from './getDataUri';
import { getOverrides, useClasses } from '../../../utils/overrides';

import { createUseStyles } from '../../../utils/styles';
import styles from './styles';
const useStyles = createUseStyles(styles, 'MultiAvatar');

const MultiAvatar = memo(
    ({
        classes: classesProp,
        overrides: overridesProps,
        className: classNameProps,
        type,
        size,
        icon,
        sources,
        ...props
    }) => {
        const classes = useClasses(useStyles, classesProp);
        const [imageDataUris, setImageDataUris] = useState([]);

        const rootClassName = classnames(
            classes.root,
            classes.multiAvatar,
            classes[type],
            classes[size],
            classNameProps,
        );
        const override = getOverrides(overridesProps, MultiAvatar.overrides);
        const rootProps = {
            ...props,
            className: rootClassName,
        };

        useEffect(() => {
            const slicedSources = sources.slice(0, 3);
            Promise.all(slicedSources.map(({ src }) => getDataUri(src).catch(() => null)))
                .then((dataUris) => setImageDataUris(dataUris))
                .catch((error) => console.error('Image preload error:', error));
        }, [sources]);

        return (
            <div {...rootProps} {...override.root}>
                {imageDataUris.map((dataUri, index) => (
                    <div
                        key={dataUri || sources[index].placeholder}
                        className={classes.multiAvatarItem}
                    >
                        <img src={dataUri || sources[index].placeholder} alt={sources[index].alt} />
                    </div>
                ))}
            </div>
        );
    },
);

MultiAvatar.overrides = ['root'];

MultiAvatar.defaultProps = {
    type: 'round',
    size: 'medium',
};

MultiAvatar.propTypes = {
    sources: PropTypes.arrayOf(
        PropTypes.shape({
            src: PropTypes.string,
            placeholder: PropTypes.string,
            alt: PropTypes.string,
        }),
    ),
    type: PropTypes.oneOf(['round', 'square']),
    size: PropTypes.oneOf(['small', 'medium', 'large', 'big', 'huge']),
};

export default React.memo(MultiAvatar);
