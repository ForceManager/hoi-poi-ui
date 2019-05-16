import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import classnames from 'classnames';

import styles from './messageStyles';

function ToastMessage({ classes, title, text, type }) {
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
    type: PropTypes.oneOf(['info', 'success', 'error']),
};

export default React.memo(withStyles(styles, { name: 'ToastMessage' })(ToastMessage));
