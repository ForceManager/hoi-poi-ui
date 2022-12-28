import React, {
    forwardRef,
    memo,
    useCallback,
    useEffect,
    useImperativeHandle,
    useMemo,
    useReducer,
    useRef,
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
const FREQUENTLY_USED_ITEMS_TO_SHOW = 36;

const CLEAR_SEARCH = 'CLEAR_SEARCH';
const SET_SEARCH = 'SET_SEARCH';
const SET_SELECTED = 'SET_SELECTED';
const SET_ACTIVE_SECTION = 'SET_ACTIVE_SECTION';
const SET_LOCAL_CACHE = 'SET_LOCAL_CACHE';

const initialState = {
    search: undefined,
    section: null,
    selectedIndex: null,
    columnIndex: 0,
    rowIndex: 0,
    hovered: false,
    cache: [],
};

const reducer = (state, action) => {
    switch (action.type) {
        case SET_ACTIVE_SECTION:
            return {
                ...state,
                section: action.payload,
            };
        case CLEAR_SEARCH:
            return {
                ...state,
                search: undefined,
                selectedIndex: null,
                columnIndex: 0,
                rowIndex: 0,
                hovered: false,
            };
        case SET_SEARCH:
            return {
                ...state,
                search: action.payload,
                selectedIndex: null,
                columnIndex: 0,
                rowIndex: 0,
                hovered: false,
            };
        case SET_SELECTED:
            return {
                ...state,
                ...action.payload,
            };
        case SET_LOCAL_CACHE:
            return {
                ...state,
                cache: action.payload,
            };
        default:
            throw new Error();
    }
};

const EmojiMenu = forwardRef(
    (
        {
            children,
            classes: classesProp,
            editor,
            onVisibleChange,
            popoverVisible,
            texts,
            cache,
            saveCache,
            defaultFrequentlyUsed,
        },
        ref,
    ) => {
        const [state, dispatch] = useReducer(reducer, initialState);
        const searchBarRef = useRef();
        const gridRef = useRef();

        const classes = useClasses(useStyles, classesProp);

        useEffect(() => {
            dispatch({ type: SET_LOCAL_CACHE, payload: cache });
        }, [cache]);

        const handleChange = useCallback((value) => {
            let newSearch = value?.target?.value || value;
            newSearch = typeof newSearch === 'string' ? newSearch.toLowerCase() : undefined;
            dispatch({ type: SET_SEARCH, payload: newSearch });
        }, []);

        const handleVisibleChange = useCallback(
            (visible) => {
                onVisibleChange && onVisibleChange(visible);
                if (visible) {
                    setTimeout(() => searchBarRef?.current?.focus(), 500);
                } else {
                    dispatch({ type: CLEAR_SEARCH });
                }
            },
            [onVisibleChange],
        );

        const groupedEmojiObj = useMemo(() => {
            const emoji = editor?.storage?.emoji?.emojis || [];
            let emojiObj = emoji
                .filter(({ shortcodes, tags }) => {
                    return state.search
                        ? shortcodes.find((shortcode) => shortcode.startsWith(state.search)) ||
                              tags.find((tag) => tag.startsWith(state.search))
                        : true;
                })
                .reduce((obj, item) => {
                    if (item.group === 'components') return obj; // Skip 'components' group
                    if (!obj[item.group]) obj[item.group] = [];
                    obj[item.group].push(item);
                    return obj;
                }, {});

            // "Prepend" "Frequently Used" emoji section if no search is active
            if (
                !state.search &&
                defaultFrequentlyUsed &&
                Object.entries(defaultFrequentlyUsed).length
            ) {
                let frequentlyUsedEmoji = { ...defaultFrequentlyUsed };

                if (state.cache && Object.entries(state.cache).length && saveCache) {
                    frequentlyUsedEmoji = { ...frequentlyUsedEmoji, ...state.cache };
                }

                frequentlyUsedEmoji = Object.fromEntries(
                    Object.entries(frequentlyUsedEmoji)
                        .sort((a, b) => b[1] - a[1])
                        .slice(0, FREQUENTLY_USED_ITEMS_TO_SHOW),
                );

                const cachedEmojiArr = Object.keys(frequentlyUsedEmoji).reduce((arr, item) => {
                    const cachedEmoji = emoji.find(({ name }) => name === item);
                    return [...arr, cachedEmoji];
                }, []);

                emojiObj = {
                    [texts?.frequently_used_emoji || 'Frequently Used']: cachedEmojiArr,
                    ...emojiObj,
                };
            }

            return emojiObj;
        }, [
            defaultFrequentlyUsed,
            editor?.storage?.emoji?.emojis,
            saveCache,
            state.cache,
            state.search,
            texts?.frequently_used_emoji,
        ]);

        const emojiGrid = useMemo(() => {
            return Object.keys(groupedEmojiObj).reduce((arr, groupName) => {
                const newEmojis = groupedEmojiObj[groupName];
                const newGroup = !state.search
                    ? [groupName, ...Array(GRID_COLS - 1).fill('dummy'), ...newEmojis]
                    : newEmojis;
                const n = GRID_COLS - (newEmojis.length % GRID_COLS);
                const dummyItems = n < GRID_COLS && !state.search ? Array(n).fill('dummy') : [];
                return [...arr, ...newGroup, ...dummyItems];
            }, []);
        }, [groupedEmojiObj, state.search]);

        const emojiGridRowsCount = useMemo(
            () => Math.floor(emojiGrid.length / GRID_COLS) + (emojiGrid.length % GRID_COLS ? 1 : 0),
            [emojiGrid.length],
        );

        const handleCache = useCallback(
            (name) => {
                if (!saveCache) return;
                let newCache = { ...state.cache };
                newCache[name] = newCache[name] ? newCache[name] + 1 : 1;
                newCache = Object.fromEntries(
                    Object.entries(newCache)
                        .sort((a, b) => b[1] - a[1])
                        .slice(0, FREQUENTLY_USED_ITEMS_TO_SHOW),
                );
                dispatch({ type: SET_LOCAL_CACHE, payload: newCache });
                saveCache(newCache);
            },
            [saveCache, state.cache],
        );

        const handleClick = useCallback(
            (name) => {
                editor.chain().focus().setEmoji(name).run();
                onVisibleChange(false);
                dispatch({ type: CLEAR_SEARCH });
                handleCache(name);
            },
            [editor, onVisibleChange, handleCache],
        );

        const handleHover = useCallback(
            ({ selectedIndex = null, columnIndex = 0, rowIndex = 0, hovered = false } = {}) =>
                dispatch({
                    type: SET_SELECTED,
                    payload: {
                        selectedIndex,
                        columnIndex,
                        rowIndex,
                        hovered,
                    },
                }),
            [],
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
                        const emojiItemProps = {
                            className: classNames(classes.emojiItem, {
                                [classes.emojiItemActive]:
                                    index === state.selectedIndex && !state.hovered,
                                [classes.emojiItemHover]:
                                    index === state.selectedIndex && state.hovered,
                            }),
                            onClick: () => handleClick(gridItem.name),
                            onMouseEnter: () =>
                                handleHover({
                                    selectedIndex: index,
                                    columnIndex,
                                    rowIndex,
                                    hovered: true,
                                }),
                            onMouseLeave: () => handleHover(),
                        };
                        cellContent = (
                            <span {...emojiItemProps}>
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
            [emojiGrid, classes, state.selectedIndex, state.hovered, handleClick, handleHover],
        );

        const selectedEmoji = useMemo(
            () => emojiGrid[state.selectedIndex] || null,
            [emojiGrid, state.selectedIndex],
        );

        const handleEnter = useCallback(
            (event) => {
                event.preventDefault();
                event.stopPropagation();
                if (selectedEmoji) handleClick(selectedEmoji.name);
            },
            [selectedEmoji, handleClick],
        );

        const handleDirectionKey = useCallback(
            (event) => {
                event.preventDefault();
                event.stopPropagation();

                const { key } = event;
                let { selectedIndex, columnIndex, rowIndex } = state;

                do {
                    switch (true) {
                        case key === 'ArrowDown' && typeof selectedIndex === 'number':
                            searchBarRef?.current?.blur();
                            if (rowIndex < emojiGridRowsCount - 1) {
                                rowIndex++;
                            } else {
                                rowIndex = 0;
                            }
                            break;
                        case key === 'ArrowDown':
                            searchBarRef?.current?.blur();
                            rowIndex = state.search ? 0 : 1;
                            break;
                        case key === 'ArrowUp':
                            if (rowIndex === 0) {
                                rowIndex = emojiGridRowsCount - 1;
                            } else {
                                rowIndex--;
                            }
                            break;
                        case key === 'ArrowRight':
                            if (columnIndex < GRID_COLS - 1) {
                                columnIndex++;
                            } else {
                                if (rowIndex < emojiGridRowsCount - 1) {
                                    rowIndex++;
                                } else {
                                    rowIndex = 0;
                                }
                                columnIndex = 0;
                            }
                            break;
                        case key === 'ArrowLeft':
                            if (columnIndex > 0) {
                                columnIndex--;
                            } else {
                                if (rowIndex === 0) {
                                    rowIndex = emojiGridRowsCount - 1;
                                } else {
                                    rowIndex--;
                                }
                                columnIndex = GRID_COLS - 1;
                            }
                            break;
                        default:
                            break;
                    }

                    selectedIndex = rowIndex * GRID_COLS + columnIndex;
                } while (
                    // Skip section titles or dummy grid items
                    typeof emojiGrid[selectedIndex] !== 'object'
                );

                gridRef.current.scrollToItem({ align: 'center', columnIndex, rowIndex });
                dispatch({
                    type: SET_SELECTED,
                    payload: { selectedIndex, columnIndex, rowIndex, hovered: false },
                });
            },
            [emojiGrid, state, emojiGridRowsCount],
        );

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
                        case 'Tab':
                            handleEnter(event);
                            return true;
                        case 'ArrowDown':
                        case 'ArrowUp':
                        case 'ArrowRight':
                        case 'ArrowLeft':
                            handleDirectionKey(event);
                            return true;
                        default:
                            return false;
                    }
                },
            }),
            [onVisibleChange, editor.commands, handleEnter, handleDirectionKey],
        );

        const gridSectionsHeights = useMemo(() => {
            let scrollTop = 0;
            return Object.keys(groupedEmojiObj).reduce((obj, key) => {
                let rows = Math.floor(groupedEmojiObj[key].length / GRID_COLS) + 1; // +1 for the row with the section's title
                const extraRow = groupedEmojiObj[key].length % GRID_COLS ? 1 : 0;
                rows = rows + extraRow;
                scrollTop = scrollTop + rows * GRID_ROW_HEIGHT;
                return { ...obj, [key]: scrollTop };
            }, {});
        }, [groupedEmojiObj]);

        const handleScroll = useCallback(
            ({ scrollTop }) => {
                const section = Object.entries(gridSectionsHeights).filter(
                    ([key, value]) => scrollTop + 10 <= value,
                )[0][0];
                dispatch({ type: SET_ACTIVE_SECTION, payload: section });
            },
            [gridSectionsHeights],
        );

        const popoverContent = useMemo(() => {
            return popoverVisible ? (
                <div className={classes.root}>
                    <SearchBar
                        className={classes.searchBar}
                        placeholder={texts?.search_placeholder || 'Search all emoji'}
                        useAsSimpleSearch
                        onChange={handleChange}
                        overrides={{
                            Select: {
                                getRef: (ref) => {
                                    searchBarRef.current = ref;
                                },
                            },
                        }}
                    />
                    <div className={classes.gridWrapper}>
                        {!state.search && (
                            <Text
                                type="captionMedium"
                                className={classNames(classes.section, classes.sectionSticky)}
                            >
                                {state.section}
                            </Text>
                        )}
                        <Grid
                            ref={gridRef}
                            columnCount={GRID_COLS}
                            columnWidth={GRID_COLUMN_WIDTH}
                            rowCount={emojiGridRowsCount}
                            rowHeight={GRID_ROW_HEIGHT}
                            width={GRID_COLUMN_WIDTH * GRID_COLS}
                            height={GRID_ROW_HEIGHT * 5.5}
                            onScroll={handleScroll}
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
            texts,
            handleChange,
            GridItem,
            selectedEmoji,
            state.search,
            state.section,
            handleScroll,
            emojiGridRowsCount,
        ]);

        return (
            <Popover
                placement="top"
                onVisibleChange={handleVisibleChange}
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
