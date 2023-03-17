import React, { memo, useEffect, useMemo, useRef } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import Icon from './Icon';

const IconGradient = memo(({ color, gradientStops, ...props }) => {
    const spanRef = useRef();
    const gradientId = uuidv4();

    useEffect(() => {
        if (!spanRef.current) return;

        let defs = spanRef.current.querySelector('svg defs');

        if (!defs) {
            defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
            spanRef.current.querySelector('svg').appendChild(defs);
        }

        const gradient = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
        gradient.setAttribute('id', gradientId);

        gradientStops.forEach((stop) => {
            const newStop = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
            newStop.setAttribute('offset', stop.offset);
            newStop.setAttribute('stop-color', stop.color);
            gradient.appendChild(newStop);
        });
        
        defs.appendChild(gradient);
    }, [gradientId, gradientStops]);

    const iconProps = useMemo(
        () => ({
            ref: spanRef,
            color: `url(#${gradientId})`,
            ...props,
        }),
        [gradientId, props],
    );

    return <Icon {...iconProps} />;
});

IconGradient.defaultProps = {
    size: 'medium',
    overrides: {},
    gradientStops: [
        { offset: '0%', color: '#FF3B30' }, // Red 500
        { offset: '100%', color: '#FF8C00' }, // Orange 500
    ],
};

IconGradient.propTypes = {
    className: PropTypes.string,
    overrides: PropTypes.object,
    size: PropTypes.oneOf(['raw', 'small', 'medium', 'large', 'big', 'huge']),
    name: PropTypes.string,
    onClick: PropTypes.func,
    gradientStops: PropTypes.arrayOf(
        PropTypes.shape({
            offset: PropTypes.string,
            stopColor: PropTypes.string,
        }),
    ),
};

export default IconGradient;
