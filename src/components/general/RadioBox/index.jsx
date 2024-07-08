import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { getOverrides, useClasses } from '../../../utils/overrides';
import Radio from '../../forms/Radio';
import Icon from '../../general/Icon';
import Text from '../../typography/Text';

import { createUseStyles } from '../../../utils/styles';
import styles from './styles';
const useStyles = createUseStyles(styles, 'RadioBox');

const RadioBox = ({
    icon,
    title,
    text,
    isReadOnly,
    className: classNameProp,
    classes: classesProp,
    overrides: overridesProp,
    children,
    checked = false,
    onChange = () => {},
    ...props
}) => {
    const classes = useClasses(useStyles, classesProp);
    // Overrides
    const override = getOverrides(overridesProp, Radio.overrides);

    // Classes
    const rootClassNames = classnames(
        classes.root,
        {
            [classes.disabled]: isReadOnly,
            [classes.checked]: checked,
        },
        classNameProp,
    );

    return (
        <div className={rootClassNames} {...props} {...override.root}>
            <Icon className={classes.icon} name={icon} {...override.icon} />
            <div className={classes.content} {...override.content}>
                <Text type="h6" className={classes.title} {...override.title}>
                    {title}
                </Text>
                <Text className={classes.text} {...override.text}>
                    {text}
                </Text>
                {checked && children && <div className={classes.children}>{children}</div>}
            </div>
            <Radio
                className={classes.radio}
                checked={checked}
                onChange={onChange}
                isDisabled={isReadOnly}
                {...override.radio}
            />
        </div>
    );
};

RadioBox.overrides = ['root', 'icon', 'content', 'title', 'text', 'radio'];

RadioBox.propTypes = {
    icon: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
    checked: PropTypes.bool,
    className: PropTypes.string,
    isDisabled: PropTypes.bool,
    onChange: PropTypes.func,
    overrides: PropTypes.object,
};

export default memo(RadioBox);
