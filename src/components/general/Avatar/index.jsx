import React, { memo, useMemo } from 'react';
import PropTypes from 'prop-types';
import SingleAvatar from './SingleAvatar';
import MultiAvatar from './MultiAvatar';

const Avatar = memo(({ sources, type = 'round', size = 'medium', ...props }) => {
    const Component = sources ? MultiAvatar : SingleAvatar;

    const finalProps = useMemo(
        () => (sources ? { sources, type, size, ...props } : { type, size, ...props }),
        [props, size, sources, type],
    );

    return <Component {...finalProps} />;
});

Avatar.propTypes = {
    sources: PropTypes.arrayOf(
        PropTypes.shape({
            src: PropTypes.string,
            placeholder: PropTypes.string,
            alt: PropTypes.string,
        }),
    ),
    src: PropTypes.string,
    placeholder: PropTypes.string,
    alt: PropTypes.string,
    icon: PropTypes.string,
    type: PropTypes.oneOf(['round', 'square']),
    size: PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'big', 'huge']),
};

export default Avatar;
