import React, { useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Slider from 'react-slick';
import { createUseStyles } from '../../../utils/styles';
import { useClasses } from '../../../utils/overrides';
import PreviousArrow from './PreviousArrow';
import NextArrow from './NextArrow';
import styles from './styles';
const useStyles = createUseStyles(styles, 'Carousel');

function Carousel({
    className,
    sliderClassName,
    dotsClassName,
    speed,
    lazyload,
    dots,
    arrows,
    content,
}) {
    const classes = useClasses(useStyles);
    const rootClass = classnames(classes.root, className, {
        'carousel__with-dots': dots && content?.length > 1,
    });
    const sliderClass = classnames(classes.slider, sliderClassName, {
        'carousel__with-arrows': arrows,
    });
    const contentClass = classnames(classes.content);
    const dotsClass = classnames(classes.dotsContainer, dotsClassName);

    const sliderRef = useRef();

    return (
        <div className={rootClass}>
            <Slider
                ref={sliderRef}
                className={sliderClass}
                arrows={arrows}
                dots={dots}
                speed={speed}
                lazyload={lazyload}
                infinite={true}
                slidesToShow={1}
                slidesToScroll={1}
                draggable={false}
                centerMode={false}
                accessibility={false}
                dotsClass={dotsClass}
                prevArrow={<PreviousArrow />}
                nextArrow={<NextArrow />}
            >
                {content.map((singleContent, index) => (
                    <div key={index} className={contentClass}>
                        {singleContent}
                    </div>
                ))}
            </Slider>
        </div>
    );
}

Carousel.defaultProps = {
    speed: 500,
    lazyload: 'ondemand',
    dots: false,
    arrows: true,
};

Carousel.propTypes = {
    className: PropTypes.string,
    sliderClassName: PropTypes.string,
    dotsClassName: PropTypes.string,
    speed: PropTypes.number,
    lazyload: PropTypes.oneOf(['ondemand', 'progressive']),
    dots: PropTypes.bool,
    arrows: PropTypes.bool,
    content: PropTypes.arrayOf(PropTypes.node),
};

export default React.memo(Carousel);
