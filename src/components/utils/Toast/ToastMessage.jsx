import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { useClasses } from '../../../utils/overrides';
import { createUseStyles } from '../../../utils/styles';
import styles from './messageStyles';
const useStyles = createUseStyles(styles, 'ToatMessage');

function ToastMessage({ classes: classesProp, title, text, type }) {
    const classes = useClasses(useStyles, classesProp);
    const rootProps = {
        className: classes.root,
    };

    const titleProps = {
        className: classnames(classes.title, {
            [classes[type]]: true,
        }),
    };

    return (
        <div {...rootProps}>
            {title && title.length > 0 && <span {...titleProps}>{title}</span>}
            <span className={classes.message}>{text}</span>
        </div>
    );
}

ToastMessage.defaultProps = {
    title: '',
    text: '',
    type: 'info',
};

ToastMessage.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    type: PropTypes.oneOf(['info', 'success', 'error', 'warning']),
};

export default React.memo(ToastMessage);
