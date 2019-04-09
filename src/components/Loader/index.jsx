import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import classnames from 'classnames';
import styles from './styles';

function Loader({ classes, size, color }) {
    const rootClassName = classnames(classes.root, [classes[color]], [classes[size]]);

    return <div className={rootClassName} />;
}

Loader.defaultProps = {
    size: 'medium',
    color: 'primary',
};

Loader.propTypes = {
    size: PropTypes.oneOf(['mini', 'tiny', 'small', 'medium', 'large', 'big', 'huge', 'massive']),
    color: PropTypes.oneOf(['primary', 'danger', 'white']),
};

export default React.memo(withStyles(styles)(Loader));
