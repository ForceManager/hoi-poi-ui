import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import classnames from 'classnames';
import styles from './styles';

function Loader({ classes, size = 'medium', color = 'primary' }) {
    const rootClassName = classnames(classes.root, [classes[color]], [classes[size]]);

    return <div className={rootClassName} />;
}

Loader.propTypes = {
    size: PropTypes.oneOf(['mini', 'tiny', 'small', 'medium', 'large', 'big', 'huge', 'massive']),
    color: PropTypes.oneOf(['primary', 'danger', 'white']),
};
Loader.displayName = 'Loader';

export default React.memo(withStyles(styles)(Loader));
