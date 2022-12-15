import React, {
    forwardRef,
    useCallback,
    useEffect,
    useImperativeHandle,
    useMemo,
    useState,
    useRef,
} from 'react';
import classNames from 'classnames';
import Advice from '../../../../general/Advice';
import Avatar from '../../../../general/Avatar';
import Text from '../../../../typography/Text';
import ScrollBar from '../../../../utils/ScrollBar';
import { useClasses } from '../../../../../utils/overrides';
import { createUseStyles } from '../../../../../utils/styles';

import styles from './styles';

const useStyles = createUseStyles(styles, 'MentionList');

const MENTION_LIST_ITEM_HEIGHT = 33;
const MAX_MENTION_LIST_ITEMS_VISIBLE_WITHOUT_SCROLL = 8;

const MentionList = forwardRef(
    (
        {
            texts,
            command,
            classes: classesProp,
            items = [],
            maxVisibleItems = MAX_MENTION_LIST_ITEMS_VISIBLE_WITHOUT_SCROLL,
        },
        ref,
    ) => {
        const classes = useClasses(useStyles, classesProp);
        const [selectedIndex, setSelectedIndex] = useState(0);
        const scrollBarRef = useRef();

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

        const scrollHandler = useCallback((index) => {
            scrollBarRef.current.scrollTop(index * MENTION_LIST_ITEM_HEIGHT);
        }, []);

        const upHandler = useCallback(() => {
            const newIndex = (selectedIndex + items.length - 1) % items.length;
            setSelectedIndex(newIndex);
            scrollHandler(newIndex);
        }, [items, selectedIndex, scrollHandler]);

        const downHandler = useCallback(() => {
            const newIndex = (selectedIndex + 1) % items.length;
            setSelectedIndex(newIndex);
            scrollHandler(newIndex);
        }, [items, selectedIndex, scrollHandler]);

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

        const scrollBarProps = useMemo(
            () => ({
                autoHeight: true,
                autoHeightMax: MENTION_LIST_ITEM_HEIGHT * maxVisibleItems,
                ref: scrollBarRef,
            }),
            [maxVisibleItems],
        );

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
                    <ScrollBar {...scrollBarProps}>
                        {items.map((item, index) => (
                            <div
                                className={classNames(classes.item, {
                                    [classes.selected]: index === selectedIndex,
                                })}
                                key={index}
                                onClick={() => selectItem(index)}
                            >
                                <Avatar
                                    src={item.avatar.src}
                                    placeholder={item.avatar.placeholder}
                                    className={classes.avatar}
                                />
                                <Text
                                    color="neutral900"
                                    type="body"
                                    className={classes.name}
                                    isTruncated
                                >
                                    {item.name}
                                </Text>
                            </div>
                        ))}
                    </ScrollBar>
                ) : (
                    <Text>{texts?.noResults || 'No Results'}</Text>
                )}
            </div>
        );
    },
);

export default MentionList;
