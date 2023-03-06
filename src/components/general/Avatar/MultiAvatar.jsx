import React, { memo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import getDataUri from './getDataUri';
import { getOverrides, useClasses } from '../../../utils/overrides';
import BadgeNotification from '../BadgeNotification';

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
        showCount,
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
            let willUnmount = false;
            const slicedSources = showCount ? sources.slice(0, 1) : sources.slice(0, 3);
            Promise.all(slicedSources.map(({ src }) => getDataUri(src).catch(() => null)))
                .then((dataUris) => {
                    if (!willUnmount) setImageDataUris(dataUris);
                })
                .catch((error) => console.error('Image preload error:', error));
            return () => {
                willUnmount = true;
            };
        }, [sources, showCount]);

        return (
            <div {...rootProps} {...override.root}>
                <div className={classes.multiAvatarInner}>
                    {imageDataUris.map((dataUri, index) => (
                        <div
                            key={dataUri || sources[index].placeholder}
                            className={classes.multiAvatarItem}
                        >
                            <img
                                src={dataUri || sources[index].placeholder}
                                alt={sources[index].alt}
                            />
                        </div>
                    ))}
                </div>
                {showCount && (
                    <BadgeNotification
                        size="tiny"
                        className={classes.count}
                        overrides={{ Text: { color: 'neutral900' } }}
                    >
                        {sources.length}
                    </BadgeNotification>
                )}
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
