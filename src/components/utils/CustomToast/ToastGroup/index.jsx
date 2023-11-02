import React, { memo, useCallback } from 'react';
import classnames from 'classnames';
import { useClasses } from '../../../../utils/overrides';
import { createUseStyles } from '../../../../utils/styles';
import { POSITION } from '../constants';
import Toast from '../Toast';

import styles from './styles';

const useStyles = createUseStyles(styles, 'ToastGroup');

const ToastGroup = memo(
    ({
        position,
        toasts,
        removeToast,
        clearDeletedToast,
        preComponent,
        postComponent,
        override,
    }) => {
        const classes = useClasses(useStyles);
        const rootClassName = classnames(classes.root, {
            [classes.topLeft]: POSITION[position] === 'top-left',
            [classes.topCenter]: POSITION[position] === 'top-center',
            [classes.topRight]: POSITION[position] === 'top-right',
            [classes.bottomLeft]: POSITION[position] === 'bottom-left',
            [classes.bottomCenter]: POSITION[position] === 'bottom-center',
            [classes.bottomRight]: POSITION[position] === 'bottom-right',
        });

        const getTransition = useCallback(
            (transition) => {
                if (!transition) return null;
                let finalTransition = null;
                if (transition === 'fade') finalTransition = 'fadeTransition';
                if (transition === 'slide') {
                    if (
                        POSITION[position] === POSITION['topLeft'] ||
                        POSITION[position] === POSITION['bottomLeft']
                    ) {
                        finalTransition = 'slideLeft';
                    } else if (
                        POSITION[position] === POSITION['topRight'] ||
                        POSITION[position] === POSITION['bottomRight']
                    ) {
                        finalTransition = 'slideRight';
                    }
                }
                return finalTransition;
            },
            [position],
        );

        if (!toasts?.length && !preComponent && !postComponent) return null;

        return (
            <div className={rootClassName} {...override.ToastGroup}>
                {preComponent && preComponent}
                {toasts.map((t) => (
                    <Toast
                        key={t.id}
                        id={t.id}
                        type={t.type}
                        transition={getTransition(t.transition)}
                        title={t.title || ''}
                        text={t.text || ''}
                        content={t.content || null}
                        icon={t.icon || null}
                        isActive={t.isActive}
                        onClose={() => {
                            t.onClose && t.onClose();
                            removeToast(t.id);
                        }}
                        onClick={t.onClick}
                        closeButton={t.closeButton}
                        useDefaultCloseButton={t.useDefaultCloseButton}
                        closeOnClick={t.closeOnClick}
                        onClickLink={t.onClickLink}
                        linkText={t.linkText}
                        clearDeletedToast={clearDeletedToast}
                        override={override.Toast}
                    />
                ))}
                {postComponent && postComponent}
            </div>
        );
    },
);

ToastGroup.defaultProps = {
    override: {},
};

export default ToastGroup;
