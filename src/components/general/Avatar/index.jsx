import React, { memo, useMemo } from 'react';
import PropTypes from 'prop-types';
import SingleAvatar from './SingleAvatar';
import MultiAvatar from './MultiAvatar';

const Avatar = memo(({ sources, ...props }) => {
    const Component = sources ? MultiAvatar : SingleAvatar;

    const finalProps = useMemo(
        () => (sources ? { sources, ...props } : { ...props }),
        [props, sources],
    );

    return <Component {...finalProps} />;
});

Avatar.defaultProps = {
    type: 'round',
    size: 'medium',
};

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
    size: PropTypes.oneOf(['small', 'medium', 'large', 'big', 'huge']),
};

export default Avatar;
