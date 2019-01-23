import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import styles from './styles';

function Button({ classes, onClick, children }) {
    return (
        <button className={classes.button} onClick={onClick}>
            <span className={classes.label}>{children}</span>
        </button>
    );
}

Button.propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired,
};

export default React.memo(withStyles(styles)(Button));
