import React, { forwardRef, useCallback, useEffect, useState } from 'react';
import classNames from 'classnames';
import Advice from '../../../../general/Advice';
import Avatar from '../../../../general/Avatar';
import Text from '../../../../typography/Text';
import { useClasses } from '../../../../../utils/overrides';
import { createUseStyles } from '../../../../../utils/styles';

import styles from './styles';

const useStyles = createUseStyles(styles, 'MentionList');

const MentionList = forwardRef(
    ({ texts, command, classes: classesProp, items = [], hideNoResultsPopover }, ref) => {
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

        return (
            <div
                className={classNames(classes.root, {
                    [classes.isEmpty]: items.length === 0 && hideNoResultsPopover,
                })}
            >
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
                            key={`suggestion-${item.id}`}
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
                    ))
                ) : (
                    <Text>{texts?.noResults || 'No Results'}</Text>
                )}
            </div>
        );
    },
);

export default MentionList;
