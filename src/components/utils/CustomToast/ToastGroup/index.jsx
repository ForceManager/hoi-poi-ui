import React, { memo, useCallback } from 'react';
import classnames from 'classnames';
import { useClasses } from '../../../../utils/overrides';
import { createUseStyles } from '../../../../utils/styles';
import { POSITION } from '../constants';
import Toast from '../Toast';

import styles from './styles';

const useStyles = createUseStyles(styles, 'ToastGroup');

const ToastGroup = memo(
    ({ position, toasts, removeToast, clearDeletedToast, preComponent, postComponent }) => {
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
            <div className={rootClassName}>
                {preComponent && preComponent}
                {toasts.map((t) => (
                    <Toast
                        key={t.id}
                        id={t.id}
                        type={t.type}
                        title={t.title || ''}
                        text={t.text || ''}
                        content={t.content || null}
                        isActive={t.isActive}
                        onClose={() => removeToast(t.id)}
                        transition={getTransition(t.transition)}
                        useDefaultCloseButton={t.useDefaultCloseButton}
                        clearDeletedToast={clearDeletedToast}
                    />
                ))}
                {postComponent && postComponent}
            </div>
        );
    },
);

export default ToastGroup;
