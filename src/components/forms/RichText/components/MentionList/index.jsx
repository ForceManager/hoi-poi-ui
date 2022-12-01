import React, { forwardRef, useCallback, useEffect, useImperativeHandle, useState } from 'react';
import classNames from 'classnames';
import Advice from '../../../../general/Advice';
import Avatar from '../../../../general/Avatar';
import Text from '../../../../typography/Text';
import { useClasses } from '../../../../../utils/overrides';
import { createUseStyles } from '../../../../../utils/styles';

import styles from './styles';

const useStyles = createUseStyles(styles, 'MentionList');

const MentionList = forwardRef(({ texts, command, classes: classesProp, items = [] }, ref) => {
    const classes = useClasses(useStyles, classesProp);
    const [selectedIndex, setSelectedIndex] = useState(0);

    useEffect(() => setSelectedIndex(0), [items]);

    const selectItem = useCallback(
        (index) => {
            const item = items[index];
            if (item) {
                command({ id: item.id, label: item.name });
            }
        },
        [command, items],
    );

    const upHandler = useCallback(() => {
        setSelectedIndex((selectedIndex + items.length - 1) % items.length);
    }, [items, selectedIndex]);

    const downHandler = useCallback(() => {
        setSelectedIndex((selectedIndex + 1) % items.length);
    }, [items, selectedIndex]);

    const enterHandler = useCallback(() => {
        selectItem(selectedIndex);
    }, [selectItem, selectedIndex]);

    useImperativeHandle(ref, () => ({
        onKeyDown: ({ event }) => {
            if (event.key === 'ArrowUp') {
                upHandler();
                return true;
            }

            if (event.key === 'ArrowDown') {
                downHandler();
                return true;
            }

            if (event.key === 'Enter') {
                enterHandler();
                return true;
            }

            return false;
        },
    }));

    return (
        <div className={classes.root}>
            {texts?.advice && (
                <Advice type="info" showIcon showCollapse={false} className={classes.advice}>
                    <Text type="caption" color="aqua700">
                        {texts.advice}
                    </Text>
                </Advice>
            )}
            {items.length ? (
                items.map((item, index) => (
                    <div
                        className={classNames(classes.item, {
                            [classes.selected]: index === selectedIndex,
                        })}
                        key={index}
                        onClick={() => selectItem(index)}
                    >
                        <Avatar src={item.avatar.src} placeholder={item.avatar.placeholder} />
                        <Text color="neutral900" type="body">
                            {item.name}
                        </Text>
                    </div>
                ))
            ) : (
                <Text>{texts?.noResults || 'No Results'}</Text>
            )}
        </div>
    );
});

export default MentionList;
