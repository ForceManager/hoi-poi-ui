import React, { memo, useRef, useCallback, useState } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import ImageGallery from 'react-image-gallery';

import { getOverrides, useClasses } from '../../../utils/overrides';
import { createUseStyles } from '../../../utils/styles';

import Icon from '../../general/Icon';

import styles from './styles';

const useStyles = createUseStyles(styles, 'Carousel');

const Carousel = ({
    classes: classesProp,
    overrides: overridesProp,
    className: classNameProp,
    placeholder,
    images = [],
    minVersion = false,
}) => {
    const classes = useClasses(useStyles, classesProp);
    const override = getOverrides(overridesProp, Carousel.overrides);
    const rootClass = classnames(classNameProp, classes.root, {
        [classes.minimalist]: minVersion,
    });
    const galleryRef = useRef();
    const [isFull, setFull] = useState(false);

    const onScreenChange = useCallback((isFullscreen) => {
        setFull(isFullscreen);
    }, []);

    const onClick = useCallback(() => {
        if (isFull || !minVersion) return;
        galleryRef.current?.toggleFullScreen();
    }, [isFull, minVersion]);

    const leftNav = useCallback((onClick, disabled) => {
        return (
            <button
                type="button"
                className="image-gallery-icon image-gallery-left-nav"
                disabled={disabled}
                onClick={onClick}
                aria-label="Previous Slide"
            >
                <Icon name="chevronLeft" size="large" color="white" />
            </button>
        );
    }, []);

    const rightNav = useCallback((onClick, disabled) => {
        return (
            <button
                type="button"
                className="image-gallery-icon image-gallery-right-nav"
                disabled={disabled}
                onClick={onClick}
                aria-label="Next Slide"
            >
                <Icon name="chevronRight" size="large" color="white" />
            </button>
        );
    }, []);

    const fullscreenButton = useCallback(
        (onClick, isFullscreen) => {
            if (minVersion && !isFullscreen) return null;
            return (
                <button
                    type="button"
                    className="image-gallery-icon image-gallery-fullscreen-button"
                    onClick={onClick}
                    aria-label="Open Fullscreen"
                >
                    <Icon name={isFullscreen ? 'close' : 'fullscreen'} size="large" color="white" />
                </button>
            );
        },
        [minVersion],
    );

    if (!images) return null;

    return (
        <div className={rootClass} {...override.root} onClick={onClick}>
            <ImageGallery
                ref={galleryRef}
                items={images}
                onErrorImageURL={placeholder}
                showThumbnails={isFull}
                useBrowserFullscreen={false}
                showPlayButton={false}
                showBullets={false}
                showNav={!minVersion || isFull}
                showFullscreenButton
                renderLeftNav={leftNav}
                renderRightNav={rightNav}
                renderFullscreenButton={fullscreenButton}
                onScreenChange={onScreenChange}
                {...override.ImageGallery}
            />
        </div>
    );
};

Carousel.overrides = ['root', 'ImageGallery'];

Carousel.propTypes = {
    className: PropTypes.string,
    overrides: PropTypes.object,
    // Image URL placeholder
    placeholder: PropTypes.string,
    images: PropTypes.arrayOf(
        PropTypes.shape({
            original: PropTypes.string,
        }),
    ),
};

export default memo(Carousel);
