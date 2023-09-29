import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Text from '../../../typography/Text';
import { useClasses } from '../../../../utils/overrides';
import { createUseStyles } from '../../../../utils/styles';
import { TYPES } from '../constants';
import styles from './styles';
const useStyles = createUseStyles(styles, 'NewToast');

const Toast = memo(
    ({
        classes: classesProp,
        className: classNameProp,
        type = 'success',
        transition = 'slide',
        onClose,
        title,
        content,
        text,
        position,
    }) => {
        const classes = useClasses(useStyles, classesProp);
        const rootClassName = classnames(
            classes.root,
            {
                [classes[TYPES.success]]: type === TYPES.success,
                [classes[TYPES.warning]]: type === TYPES.warning,
                [classes[TYPES.error]]: type === TYPES.error,
                [classes[TYPES.info]]: type === TYPES.info,
            },
            classNameProp,
        );

        return (
            <div onClick={onClose} className={rootClassName}>
                <div classNam={classes.header}>
                    <Text className={classes.title}>{title}</Text>
                </div>
                {!text && content}
                <div className={classes.content}>
                    <Text className={classes.text}>{text}</Text>
                </div>
            </div>
        );
    },
);

Toast.propTypes = {
    className: PropTypes.string,
    overrides: PropTypes.object,
    containerId: PropTypes.any,
    content: PropTypes.element,
    text: PropTypes.string,
    title: PropTypes.string,
    closeButton: PropTypes.element,
    closeButtonClassName: PropTypes.string,
    closeOnClick: PropTypes.bool,
    newestOnTop: PropTypes.bool,
    position: PropTypes.oneOf(['top-right', 'top-left', 'bottom-right', 'bottom-left']),
    autoClose: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
    useDefaultCloseButton: PropTypes.bool,
};

export default Toast;
