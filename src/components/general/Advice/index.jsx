import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import classnames from 'classnames';

import Icon from '../../general/Icon';
import { getOverrides } from '../../../utils/overrides';
import styles from './styles';

function Advice({
    children,
    classes,
    className: classNameProp,
    overrides: overridesProp,
    showIcon,
    theme,
    type,
    ...props
}) {
    // Overrides
    const override = getOverrides(overridesProp, Advice.overrides);

    // Classes
    const rootClassName = classnames(
        classes.root,
        {
            [classes[type]]: type,
        },
        classNameProp,
    );

    const rootProps = {
        ...props,
        className: rootClassName,
    };

    const iconProps = useMemo(() => {
        const properties = { size: 'medium' };
        switch (type) {
            case 'error':
                return {
                    ...properties,
                    name: 'warning',
                    color: theme.colors.red,
                };
            case 'success':
                return {
                    ...properties,
                    name: 'thickEnabled',
                    color: theme.colors.green,
                };
            case 'warning':
                return {
                    ...properties,
                    name: 'warningRounded',
                    color: theme.colors.yellow,
                };
            case 'info':
            default:
                return {
                    ...properties,
                    name: 'info',
                    color: theme.colors.secundary,
                };
        }
    }, [theme.colors.green, theme.colors.red, theme.colors.secundary, theme.colors.yellow, type]);

    return (
        <div {...rootProps}>
            {showIcon && (
                <div className={classes.icon} {...override.icon}>
                    <Icon {...iconProps} />
                </div>
            )}
            <span className={classes.text} {...override.text}>
                {children}
            </span>
        </div>
    );
}

Advice.overrides = ['icon', 'text'];

Advice.defaultProps = {
    className: '',
    overrides: {},
    showIcon: false,
    type: 'info',
};

Advice.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    overrides: PropTypes.object,
    showIcon: PropTypes.bool,
    type: PropTypes.oneOf(['error', 'info', 'success', 'warning']),
};

export default React.memo(withStyles(styles, { injectTheme: true, name: 'Advice' })(Advice));
