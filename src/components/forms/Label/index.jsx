import React from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';
import { getOverrides, useClasses } from '../../../utils/overrides';
import Popover from '../../utils/Popover';
import Icon from '../../general/Icon';
import Text from '../../typography/Text';

import { createUseStyles } from '../../../utils/styles';
import styles from './styles';
const useStyles = createUseStyles(styles, 'Label');

function Label({
    children,
    classes: classesProp,
    overrides: overridesProp,
    className: classNameProp,
    isRequired,
    hint,
    isDisabled,
    ...props
}) {
    const classes = useClasses(useStyles, classesProp);
    // Overrides
    const override = getOverrides(overridesProp, Text.overrides);

    // Classes
    const rootClassName = classnames(classes.root, classNameProp);

    const rootProps = {
        className: rootClassName,
    };

    return (
        <div {...rootProps} {...override.root}>
            <Text type={isDisabled ? 'light' : 'body'} className={classes.Text} {...override.Text}>
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
        </div>
    );
}

Label.overrides = ['root', 'Popover', 'Text'];

Label.propTypes = {
    className: PropTypes.string,
    overrides: PropTypes.object,
    isRequired: PropTypes.bool,
    hint: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

export default React.memo(Label);
