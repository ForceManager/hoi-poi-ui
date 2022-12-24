import React, {
    forwardRef,
    memo,
    useCallback,
    useImperativeHandle,
    useMemo,
    useRef,
    useState,
    Fragment,
} from 'react';
import classNames from 'classnames';
import { FixedSizeGrid as Grid } from 'react-window';
import Popover from '../../../../utils/Popover';
import SearchBar from '../../../../general/SearchBar';
import Text from '../../../../typography/Text';
import { useClasses } from '../../../../../utils/overrides';
import { createUseStyles } from '../../../../../utils/styles';
import CustomScrollbarsVirtualList from './components/CustomScrollbarsVirtualList';

import styles from './styles';

const useStyles = createUseStyles(styles, 'EmojiMenu');

const GRID_COLUMN_WIDTH = 36;
const GRID_ROW_HEIGHT = 32;
const GRID_COLS = 9;

const EmojiMenu = forwardRef(
    (
        {
            children,
            classes: classesProp,
            editor,
            onVisibleChange,
            popoverVisible,
            texts = {
                search_placeholder: 'Search all emoji',
            },
        },
        ref,
    ) => {
        const [search, setSearch] = useState(undefined);
        const [selectedIndex, setSelectedIndex] = useState(null);
        const isFirstLoad = useRef(true);
        const searchBarRef = useRef();
        const gridRef = useRef();

        const classes = useClasses(useStyles, classesProp);

        const handleVisibleChange = useCallback((visible) => {
            if (visible) {
                if (isFirstLoad.current) {
                    isFirstLoad.current = false;
                    setTimeout(() => searchBarRef?.current?.focus(), 500);
                }
            } else {
                setSearch(undefined);
                setSelectedIndex(null);
                isFirstLoad.current = true;
            }
        }, []);

        const onChange = useCallback((value) => {
            const newSearch = value?.target?.value || value;
            setSearch(
                newSearch && typeof newSearch === 'string' ? newSearch.toLowerCase() : undefined,
            );
            setSelectedIndex(null);
        }, []);

        const groupedEmojiObj = useMemo(() => {
            const emoji = editor?.storage?.emoji?.emojis || [];
            return emoji
                .filter(({ shortcodes, tags }) => {
                    return search
                        ? shortcodes.find((shortcode) => shortcode.startsWith(search)) ||
                              tags.find((tag) => tag.startsWith(search))
                        : true;
                })
                .reduce((obj, item) => {
                    if (item.group === 'components') return obj; // Skip 'components' group
                    if (!obj[item.group]) obj[item.group] = [];
                    obj[item.group].push(item);
                    return obj;
                }, {});
        }, [editor, search]);

        const emojiGrid = useMemo(() => {
            return Object.keys(groupedEmojiObj).reduce((arr, groupName) => {
                const newEmojis = groupedEmojiObj[groupName];
                const newGroup = !search
                    ? [groupName, ...Array(GRID_COLS - 1).fill('dummy'), ...newEmojis]
                    : newEmojis;
                const n = GRID_COLS - (newEmojis.length % GRID_COLS);
                const dummyItems = n < GRID_COLS && !search ? Array(n).fill('dummy') : [];
                return [...arr, ...newGroup, ...dummyItems];
            }, []);
        }, [groupedEmojiObj, search]);

        const handleClick = useCallback(
            (name) => {
                editor.chain().focus().setEmoji(name).run();
                onVisibleChange(false);
            },
            [editor, onVisibleChange],
        );

        const GridItem = useCallback(
            ({ columnIndex, rowIndex, style }) => {
                let cellContent;
                const index = GRID_COLS * rowIndex + columnIndex;
                const gridItem = emojiGrid[index];
                switch (true) {
                    // Dummy cell to fill empty spaces of the grid
                    case typeof gridItem === 'string' && gridItem === 'dummy':
                        cellContent = <span></span>;
                        break;
                    case typeof gridItem === 'string':
                        cellContent = (
                            <Text type="captionMedium" className={classes.section}>
                                {gridItem}
                            </Text>
                        );
                        break;
                    default:
                        cellContent = (
                            <span
                                className={classNames(classes.emojiItem, {
                                    [classes.emojiItemActive]: index === selectedIndex,
                                })}
                                onClick={() => handleClick(gridItem.name)}
                            >
                                {gridItem?.fallbackImage ? (
                                    <img src={gridItem.fallbackImage} alt={gridItem.name} />
                                ) : (
                                    gridItem?.emoji
                                )}
                            </span>
                        );
                        break;
                }
                return <div style={style}>{cellContent}</div>;
            },
            [classes, emojiGrid, handleClick, selectedIndex],
        );

        const selectedEmoji = useMemo(
            () => emojiGrid[selectedIndex] || null,
            [emojiGrid, selectedIndex],
        );

        const enterHandler = useCallback(() => {
            if (selectedEmoji) handleClick(selectedEmoji.name);
        }, [selectedEmoji, handleClick]);

        const directionKeyHandler = useCallback((event) => {
            event.preventDefault();
            event.stopPropagation();

            const { key } = event;
            let newIndex;

            switch (true) {
                case key === 'ArrowDown' && typeof selectedIndex === 'number':
                    newIndex = selectedIndex + GRID_COLS;
                    break;
                case key === 'ArrowDown':
                    searchBarRef?.current?.blur();
                    newIndex = search ? 0 : 9;
                    break;
                case key === 'ArrowUp':
                    newIndex = selectedIndex - GRID_COLS;
                    break;
                case key === 'ArrowRight':
                    newIndex = selectedIndex + 1;
                    break;
                case key === 'ArrowLeft':
                    newIndex = selectedIndex - 1;
                    break;
                default:
                    break;
            }

            gridRef.current.scrollToItem(newIndex);
            setSelectedIndex(newIndex);
        }, [search, selectedIndex]);

        useImperativeHandle(
            ref,
            () => ({
                onKeyDown: (event) => {
                    switch (event.key) {
                        case 'Escape':
                            onVisibleChange(false);
                            editor.commands.focus();
                            return true;
                        case 'Enter':
                            enterHandler(event);
                            return true;
                        case 'ArrowDown':
                        case 'ArrowUp':
                        case 'ArrowRight':
                        case 'ArrowLeft':
                            directionKeyHandler(event);
                            return true;
                        default:
                            return false;
                    }
                },
            }),
            [onVisibleChange, editor.commands, enterHandler, directionKeyHandler],
        );

        const popoverContent = useMemo(() => {
            return popoverVisible ? (
                <div className={classes.root}>
                    <SearchBar
                        className={classes.searchBar}
                        placeholder={texts.search_placeholder}
                        useAsSimpleSearch
                        onChange={onChange}
                        overrides={{
                            Select: {
                                getRef: (ref) => {
                                    searchBarRef.current = ref;
                                },
                            },
                        }}
                    />
                    <div className={classes.gridWrapper}>
                        {!search && (
                            <Text
                                type="captionMedium"
                                className={classNames(classes.section, classes.sectionSticky)}
                            >
                                Smileys & Emotion
                            </Text>
                        )}
                        <Grid
                            ref={gridRef}
                            columnCount={GRID_COLS}
                            columnWidth={GRID_COLUMN_WIDTH}
                            rowCount={emojiGrid.length / GRID_COLS}
                            rowHeight={GRID_ROW_HEIGHT}
                            width={GRID_COLUMN_WIDTH * GRID_COLS}
                            height={GRID_ROW_HEIGHT * 5.5}
                            outerElementType={CustomScrollbarsVirtualList}
                        >
                            {GridItem}
                        </Grid>
                    </div>
                    <div className={classes.hint}>
                        {selectedEmoji && (
                            <Fragment>
                                <span className={classes.hintIcon}>
                                    {selectedEmoji?.fallbackImage ? (
                                        <img
                                            src={selectedEmoji.fallbackImage}
                                            alt={selectedEmoji.name}
                                        />
                                    ) : (
                                        selectedEmoji?.emoji
                                    )}
                                </span>
                                <Text type="caption">:{selectedEmoji.name}:</Text>
                            </Fragment>
                        )}
                    </div>
                </div>
            ) : null;
        }, [
            popoverVisible,
            classes,
            texts.search_placeholder,
            onChange,
            emojiGrid.length,
            GridItem,
            selectedEmoji,
            search,
        ]);

        return (
            <Popover
                placement="top"
                onVisibleChange={(visible) => onVisibleChange(visible)}
                afterVisibleChange={handleVisibleChange}
                content={popoverContent}
                className={classes.popover}
                visible={popoverVisible}
            >
                {children}
            </Popover>
        );
    },
);

export default memo(EmojiMenu);
