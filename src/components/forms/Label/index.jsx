import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import classnames from 'classnames';
import { getOverrides } from 'utils/overrides';
import Popover from 'components/utils/Popover';
import Icon from 'components/general/Icon';
import styles from './styles';

function Label({
    children,
    overrides: overridesProp,
    className: classNameProp,
    classes,
    isRequired,
    hint,
    ...props
}) {
    // Overrides
    const override = getOverrides(overridesProp, Text.overrides);

    // Classes
    const rootClassName = classnames(classes.root, classNameProp);

    const rootProps = {
        className: rootClassName,
    };

    return (
        <span {...rootProps}>
            <span className={classes.text} {...override.text}>
                {children}
                {isRequired && '*'}
            </span>
            {hint && (
                <Popover
                    className={classes.Popover}
                    placement="top"
                    trigger={['hover']}
                    content={hint}
                    {...override.popover}
                >
                    <span className={classes.info}>
                        <Icon className={classes.icon} name="info" />
                    </span>
                </Popover>
            )}
        </span>
    );
}

Text.overrides = ['Popover', 'text'];

Text.defaultProps = {};

Text.propTypes = {
    className: PropTypes.string,
    overrides: PropTypes.object,
    isRequired: PropTypes.bool,
    hint: PropTypes.string,
};

export default React.memo(withStyles(styles, { name: 'Label' })(Label));
