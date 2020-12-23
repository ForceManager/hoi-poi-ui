import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { createUseStyles, Radio, Icon, Text } from 'hoi-poi-ui-next';

import styles from './styles';
const useStyles = createUseStyles(styles, 'RadioBox');

const RadioBox = ({ icon, title, text, checked, className, onClick }) => {
    const classes = useStyles();

    const rootClassNames = classnames(classes.root, className, {
        [classes.checked]: checked,
    });

    return (
        <div className={rootClassNames}>
            <Icon className={classes.icon} name={icon} />
            <div className={classes.textContainer}>
                <Text className={classes.title}>{title}</Text>
                <Text className={classes.text}>{text}</Text>
            </div>
            <Radio className={classes.radio} checked={checked} />
        </div>
    );
};

RadioBox.propTypes = {
    permissions: PropTypes.array,
};

export default memo(RadioBox);
