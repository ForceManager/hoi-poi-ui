import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { createUseStyles } from '../../../utils/styles';
import { useClasses } from '../../../utils/overrides';
import Icon from '../Icon';
import styles from './styles';
const useStyles = createUseStyles(styles, 'CarouselNextArrow');

function NextArrow({ className, style, onClick }) {
    const classes = useClasses(useStyles);
    const rootClass = classnames(className, classes.arrow, classes.arrowRight);
    return (
        <div className={rootClass} style={style}>
            <Icon name="chevron" onClick={onClick} />
        </div>
    );
}

NextArrow.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    onClick: PropTypes.func,
};

export default React.memo(NextArrow);
