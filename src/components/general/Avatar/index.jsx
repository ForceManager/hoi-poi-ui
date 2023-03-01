import React, { memo, useMemo } from 'react';
import PropTypes from 'prop-types';
import Avatar from './Avatar';
import MultiAvatar from './MultiAvatar';

const AvatarMain = memo(({ sources, ...props }) => {
    const Component = sources ? MultiAvatar : Avatar;

    const finalProps = useMemo(
        () => (sources ? { sources, ...props } : { ...props }),
        [props, sources],
    );

    return <Component {...finalProps} />;
});

AvatarMain.defaultProps = {
    type: 'round',
    size: 'medium',
};

AvatarMain.propTypes = {
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

export default AvatarMain;
