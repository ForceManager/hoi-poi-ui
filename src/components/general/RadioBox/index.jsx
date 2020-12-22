import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Radio from '../../forms/Radio';
import Icon from '../Icon';
import Text from '../../typography/Text';

import { createUseStyles } from '../../../utils/styles';
import styles from './styles';
const useStyles = createUseStyles(styles, 'RadioBox');

const RadioBox = ({ icon, title, text, checked, className, children }) => {
    const classes = useStyles();

    const rootClassNames = classnames(classes.root, className, {
        [classes.checked]: checked,
    });

    return (
        <div className={rootClassNames}>
            <Icon className={classes.icon} name={icon} />
            <div className={classes.content}>
                <Text className={classes.title} type="h6">
                    {title}
                </Text>
                <Text className={classes.text}>{text}</Text>
                {children && <div className={classes.children}>{children}</div>}
            </div>
            <Radio className={classes.radio} checked={checked} />
        </div>
    );
};

RadioBox.propTypes = {
    permissions: PropTypes.array,
};

export default memo(RadioBox);
