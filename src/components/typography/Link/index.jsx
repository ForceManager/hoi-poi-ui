import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import defaultTheme from '../../../utils/styles/defaultTheme';
import { getOverrides, useClasses } from '../../../utils/overrides';
import { createUseStyles } from '../../../utils/styles';

import styles from './styles';

const useStyles = createUseStyles(styles, 'Link');

function Link({
    children,
    classes: classesProp,
    overrides: overridesProp,
    className: classNameProp,
    onClick,
    isDisabled,
    href,
    type,
    target,
    isTruncated,
    bold,
    underline,
    variation,
    ...props
}) {
    const classes = useClasses(useStyles, classesProp);

    //Overrides
    const override = getOverrides(overridesProp, Link.overrides);

    // Classes
    const rootClassName = classnames(classes.root, classNameProp, classes[type], {
        [classes.isDisabled]: isDisabled,
        [classes.truncated]: href && isTruncated,
        [classes.bold]: bold,
        [classes.underline]: underline,
        [classes.primary]: variation === 'primary',
    });

    const rootProps = useMemo(
        () => ({
            ...props,
            className: rootClassName,
            onClick: isDisabled ? null : onClick,
            ...override.root,
        }),
        [isDisabled, onClick, override.root, props, rootClassName],
    );

    if (href) {
        return (
            <a href={href} target={target} {...rootProps}>
                {children}
            </a>
        );
    } else {
        return (
            <button type="button" {...rootProps}>
                {children}
            </button>
        );
    }
}

Link.overrides = ['root'];

Link.defaultProps = {
    overrides: {},
    type: 'body',
    isTruncated: false,
    underline: false,
};

Link.propTypes = {
    className: PropTypes.string,
    overrides: PropTypes.object,
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired,
    type: PropTypes.oneOf([
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'subtitle1',
        'subtitle',
        'body1',
        'body',
        'button',
        'caption',
        'captionMedium',
        'badges',
        'overline',
    ]),
    isDisabled: PropTypes.bool,
    /** Render the component as a tag <a/> with href */
    href: PropTypes.string,
    /** native <a/> target */
    target: PropTypes.string,
    isTruncated: PropTypes.bool,
    bold: PropTypes.bool,
    underline: PropTypes.bool,
    variation: PropTypes.oneOf(['primary']),
};

export default React.memo(Link);
