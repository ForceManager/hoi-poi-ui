import React, { memo, useMemo, Fragment, useCallback } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Text from '../../../typography/Text';
import Link from '../../../typography/Link';
import Icon from '../../../general/Icon';
import { useClasses } from '../../../../utils/overrides';
import { createUseStyles, useTheme } from '../../../../utils/styles';
import { Transition } from '../transitions';
import { TYPES } from '../constants';
import styles from './styles';
const useStyles = createUseStyles(styles, 'NewToast');

const Toast = memo(
    ({
        classes: classesProp,
        className: classNameProp,
        override,
        id,
        type,
        transition,
        onClick,
        closeOnClick,
        useDefaultCloseButton,
        onClose,
        title,
        text,
        content,
        icon,
        isActive,
        clearDeletedToast,
        onClickLink,
        linkText,
    }) => {
        const theme = useTheme();
        const classes = useClasses(useStyles, classesProp);
        const rootClassName = classnames(
            classes.root,
            {
                [classes[TYPES.success]]: !content && type === TYPES.success,
                [classes[TYPES.warning]]: !content && type === TYPES.warning,
                [classes[TYPES.error]]: !content && type === TYPES.error,
                [classes[TYPES.info]]: !content && type === TYPES.info,
            },
            classNameProp,
        );

        const handleOnClose = useCallback(
            (e) => {
                e.stopPropagation();
                onClose();
            },
            [onClose],
        );

        const handleOnClick = useCallback(() => {
            if (onClick) onClick();
            if (!closeOnClick) return;
            onClose();
        }, [closeOnClick, onClose, onClick]);

        const toastContent = useMemo(() => {
            return (
                <Fragment>
                    <div className={classes.header}>
                        <Text className={classes.title} type="subtitle" bold>
                            {title}
                        </Text>
                        {useDefaultCloseButton && (
                            <Icon name="close" size="large" onClick={handleOnClose} />
                        )}
                    </div>
                    {!text && content}
                    <div className={classes.content}>
                        <Text className={classes.text} type="caption" color="neutral700">
                            {text}
                        </Text>
                        {onClickLink && linkText && (
                            <Link className={classes.link} type="caption" onClick={onClickLink}>
                                {linkText}
                            </Link>
                        )}
                    </div>
                </Fragment>
            );
        }, [
            classes,
            content,
            text,
            title,
            handleOnClose,
            useDefaultCloseButton,
            onClickLink,
            linkText,
        ]);

        const iconType = useMemo(() => {
            const icons = {
                [TYPES.success]: { name: 'taskChecked', color: theme.colors.green400 },
                [TYPES.warning]: { name: 'warning', color: theme.colors.yellow400 },
                [TYPES.error]: { name: 'error', color: theme.colors.red400 },
                [TYPES.info]: { name: 'info', color: theme.colors.blue400 },
            };

            if (!icons[type]) return null;

            return <Icon name={icons[type].name} color={icons[type].color} />;
        }, [type, theme]);

        const toastWrapperClassName = classnames(classes.toastWrapper, {
            [classes.withIcon]: !!iconType || !!icon,
        });

        return (
            <Transition
                transition={transition}
                transitionKey={id}
                show={isActive}
                timeout={300}
                onExited={() => clearDeletedToast(id)}
            >
                <div className={rootClassName} {...override.Toast} onClick={handleOnClick}>
                    {(iconType || icon) && !content && (
                        <div className={toastWrapperClassName} {...override.ToastWrapper}>
                            <div className={classes.iconBox}>{iconType || icon}</div>
                            <div className={classes.contentBox}>{toastContent}</div>
                        </div>
                    )}
                    {!iconType && !content && !icon && (
                        <div className={toastWrapperClassName} {...override.ToastWrapper}>
                            {toastContent}
                        </div>
                    )}
                    {content}
                </div>
            </Transition>
        );
    },
);

Toast.defaultProps = {
    override: {},
    transition: 'slide',
    content: null,
};

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
    autoClose: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
    useDefaultCloseButton: PropTypes.bool,
};

export default Toast;
