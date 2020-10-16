import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { getOverrides, useClasses } from '../../../utils/overrides';
import { createUseStyles, useTheme } from '../../../utils/styles';
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
    ...props
}) {
    const classes = useClasses(useStyles, classesProp);
    const theme = useTheme();
    //Overrides
    const override = getOverrides(overridesProp, Link.overrides);

    // Classes
    const rootClassName = classnames(
        classes.root,
        { [classes.isDisabled]: isDisabled },
        classNameProp,
    );

    const rootProps = {
        ...props,
        className: rootClassName,
        onClick: isDisabled ? null : onClick,
    };

    if (href) {
        return (
            <a
                href={href}
                target={target}
                style={{ ...theme.typography[type] }}
                {...rootProps}
                {...override.root}
            >
                {children}
            </a>
        );
    } else {
        return (
            <button
                {...rootProps}
                type="button"
                style={{ ...theme.typography[type] }}
                {...override.root}
            >
                {children}
            </button>
        );
    }
}

Link.overrides = ['root'];

Link.defaultProps = {
    overrides: {},
    type: 'body',
};

Link.propTypes = {
    className: PropTypes.string,
    overrides: PropTypes.object,
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired,
    type: PropTypes.oneOf(['body', 'caption']),
    isDisabled: PropTypes.bool,
    /** Render the component as a tag <a/> with href */
    href: PropTypes.string,
    /** native <a/> target */
    target: PropTypes.string,
};

export default React.memo(Link);
