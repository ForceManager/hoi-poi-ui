import React, { forwardRef, useCallback, useContext, useEffect, useState } from 'react';
import classNames from 'classnames';
import Text from '../../../../typography/Text';
import { useClasses } from '../../../../../utils/overrides';
import { createUseStyles } from '../../../../../utils/styles';
import { RichTextContext } from '../../';

import styles from './styles';

const useStyles = createUseStyles(styles, 'EmojiList');

const EmojiList = forwardRef(({ texts, command, classes: classesProp, items = [], query }) => {
    const { saveCache } = useContext(RichTextContext);
    const classes = useClasses(useStyles, classesProp);
    const [selectedIndex, setSelectedIndex] = useState(0);

    useEffect(() => setSelectedIndex(0), [items]);

    const selectItem = useCallback(
        (index) => {
            const item = items[index];
            if (item) {
                command({ name: item.name });
                saveCache(item.name);
            }
        },
        [command, items, saveCache],
    );

    return query.length >= 3 ? (
        <div className={classes.root}>
            {items.length ? (
                items.map((item, index) => (
                    <div
                        className={classNames(classes.item, {
                            [classes.selected]: index === selectedIndex,
                        })}
                        key={index}
                        onClick={() => selectItem(index)}
                    >
                        <Text
                            color="neutral900"
                            type="body"
                            className={classes.emojiItem}
                            isTruncated
                        >
                            <span>
                                {item.fallbackImage ? (
                                    <img src={item.fallbackImage} alt={item.name} />
                                ) : (
                                    item.emoji
                                )}
                            </span>
                            <span>:{item.name}:</span>
                        </Text>
                    </div>
                ))
            ) : (
                <Text>{texts?.noResults || 'No Results'}</Text>
            )}
        </div>
    ) : null;
});

export default EmojiList;
