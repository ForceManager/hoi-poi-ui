import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import classnames from 'classnames';
import { getOverrides } from '../../../utils/overrides';
import Popover from '../../utils/Popover';
import Icon from '../../general/Icon';
import Text from '../../typography/Text';
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
        <span {...rootProps} {...override.root}>
            <Text type="bold" className={classes.Text} {...override.Text}>
                {children}
                {isRequired && '*'}
            </Text>
            {hint && (
                <Popover
                    className={classes.Popover}
                    placement="top"
                    trigger={['hover']}
                    content={hint}
                    {...override.Popover}
                >
                    <span className={classes.info}>
                        <Icon className={classes.icon} name="info" />
                    </span>
                </Popover>
            )}
        </span>
    );
}

Text.overrides = ['root', 'Popover', 'Text'];

Text.defaultProps = {
    overrides: {},
};

Text.propTypes = {
    className: PropTypes.string,
    overrides: PropTypes.object,
    isRequired: PropTypes.bool,
    hint: PropTypes.string,
};

export default React.memo(withStyles(styles, { name: 'Label' })(Label));
