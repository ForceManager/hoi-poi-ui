import React, { memo, useMemo } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { createUseStyles } from '../../../../utils/styles';
import { CSSTransition } from 'react-transition-group';

import styles from './styles';
const useStyles = createUseStyles(styles, 'Transition');

const Transition = ({ children, show, transitionKey, transition, timeout }) => {
    const classes = useStyles();

    const transitionClass = useMemo(() => {
        switch (transition) {
            case 'slideLeft':
                return 'slideLeftTransition';
            case 'slideRight':
                return 'slideRightTransition';
            case 'fade':
            default:
                return 'fadeTransition';
        }
    }, [transition]);

    const transitionProps = useMemo(() => {
        const classNames = classnames({}, transitionClass);

        return {
            key: transitionKey,
            in: !!show,
            classNames,
            unmountOnExit: true,
            timeout: timeout || {
                enter: 200,
                exit: 0,
            },
            appear: true,
        };
    }, [transitionClass, transitionKey, show, timeout]);

    return (
        <CSSTransition {...transitionProps}>
            <div className={classes[transitionClass]}>{children}</div>
        </CSSTransition>
    );
};

Transition.propTypes = {
    show: PropTypes.any,
    transitionKey: PropTypes.string,
};

export default memo(Transition);
