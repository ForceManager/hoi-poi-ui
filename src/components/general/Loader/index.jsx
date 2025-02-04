import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { useClasses } from '../../../utils/overrides';
import { createUseStyles } from '../../../utils/styles';
import styles from './styles';
const useStyles = createUseStyles(styles, 'Loader');

function Loader({ classes: classesProp, className, size = 'medium', color = 'primary' }) {
    const classes = useClasses(useStyles, classesProp);
    const rootClassName = classnames(className, classes.root, [classes[color]], [classes[size]]);

    return <div className={rootClassName} />;
}

Loader.propTypes = {
    className: PropTypes.string,
    size: PropTypes.oneOf(['mini', 'tiny', 'small', 'medium', 'large', 'big', 'huge', 'massive']),
    color: PropTypes.oneOf(['primary', 'actionMinor', 'danger', 'white']),
};

export default React.memo(Loader);
