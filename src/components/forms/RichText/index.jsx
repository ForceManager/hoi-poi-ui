import React, {
    memo,
    createContext,
    useCallback,
    useEffect,
    useMemo,
    useState,
    useRef,
} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Placeholder from './components/placeholderExtension';
import Underline from '@tiptap/extension-underline';
import Mention from '@tiptap/extension-mention';
import HardBreak from '@tiptap/extension-hard-break';
import Emoji from './components/emojiExtension.js';
import Icon from '../../general/Icon';
import InputWrapper from '../components/InputWrapper';
import Menu from './components/Menu';
import { getEmojiConfig, getSuggestionsConfig } from './components/extensionsConfig';
import { getOverrides, useClasses } from '../../../utils/overrides';
import { createUseStyles, useTheme } from '../../../utils/styles';

import styles from './styles';

const FREQUENTLY_USED_ITEMS_TO_SHOW = 36;

const useStyles = createUseStyles(styles, 'RichText');

export const RichTextContext = createContext();

const RichText = memo(
    ({
        className: classNameProp,
        classes: classesProp,
        error,
        info,
        isFullWidth,
        isReadOnly,
        onBlur,
        onChange,
        onClick,
        onFocus,
        onSubmit,
        onEsc,
        overrides: overridesProp,
        placeholder,
        toolbar,
        toolbarStyle,
        value,
        mention,
        customActions,
        compactMode,
        autofocus,
        canSubmit,
        onChangeFocus,
        emoji,
        hideClear,
        submitTooltip,
        isBasic,
        basicType,
        loading,
        getEditorRef,
        ...otherProps
    }) => {
        const theme = useTheme();
        const classes = useClasses(useStyles, classesProp);
        const override = getOverrides(overridesProp, RichText.overrides);
        const [focused, setFocused] = useState(false);
        const [showingMenuPopover, setShowingMenuPopover] = useState(false);
        const [editorContent, setEditorContent] = useState({});
        const showingMention = useRef(false);
        const showingEmoji = useRef(false);
        const editorDivRef = useRef(null);

        const getExtensions = useMemo(() => {
            const extensions = [
                Placeholder.configure({
                    placeholder: () => placeholder || null,
                }),
                StarterKit.configure({
                    hardBreak: false,
                }),
                Underline,
                HardBreak.extend({
                    addKeyboardShortcuts() {
                        const handleShiftEnter = () => {
                            if (
                                this.editor.isActive('bulletList') ||
                                this.editor.isActive('orderedList')
                            ) {
                                this.editor.commands.first(({ commands }) => [
                                    () => commands.splitListItem('listItem'),
                                ]);
                            } else {
                                this.editor.commands.first(({ commands }) => [
                                    () => commands.newlineInCode(),
                                    () => commands.createParagraphNear(),
                                    () => commands.liftEmptyBlock(),
                                    () => commands.splitBlock(),
                                ]);
                            }
                        };

                        return {
                            Enter: () => true, // Prevent extra line-break on submiting via Enter
                            'Shift-Enter': handleShiftEnter,
                        };
                    },
                }),
            ];

            if (emoji) {
                extensions.push(
                    Emoji.configure({
                        enableEmoticons: true,
                        suggestion: getEmojiConfig({
                            emoji,
                            showingEmoji,
                        }),
                    }),
                );
            }

            if (
                mention &&
                mention.fetchSuggestions &&
                typeof mention.fetchSuggestions === 'function'
            ) {
                extensions.push(
                    Mention.configure({
                        suggestion: getSuggestionsConfig({ mention, showingMention }),
                        renderLabel: ({ node }) => {
                            return `${node.attrs.label}`;
                        },
                    }),
                );
            }

            return extensions;
        }, [emoji, mention, placeholder]);

        const editor = useEditor({
            editable: !isReadOnly,
            extensions: getExtensions,
            content: value,
            onCreate: ({ editor }) => {
                const content = {
                    text: editor.getText(),
                    html: editor.getHTML(),
                    json: editor.getJSON(),
                };

                setEditorContent(content);

                if (content.text.length && autofocus) {
                    setFocused(true);
                    editor.commands.focus('end');
                }
            },
            onUpdate: ({ editor }) => {
                const content = {
                    text: editor.getText(),
                    html: editor.getHTML(),
                    json: editor.getJSON(),
                };
                setEditorContent(content);
                onChange && onChange(content);
            },
            onFocus: ({ event }) => {
                setFocused(true);
                onFocus && onFocus(event);
                onChangeFocus && onChangeFocus(true);
            },
            onBlur: ({ event }) => {
                if (compactMode) return;
                setFocused(false);
                onBlur && onBlur(event);
                onChangeFocus && onChangeFocus(false);
            },
        });

        useEffect(() => {
            if (editor && getEditorRef) getEditorRef(editor);
        }, [editor, getEditorRef]);

        useEffect(() => {
            if (autofocus && editor && !showingMenuPopover) {
                editor.commands.focus('end');
                setFocused(true);
            }
        }, [autofocus, editor, showingMenuPopover]);

        useEffect(() => {
            const handleClickOutside = (event) => {
                if (!editorDivRef?.current.contains(event.target) && !showingMenuPopover) {
                    setFocused(false);
                    onBlur && onBlur(event);
                    onChangeFocus && onChangeFocus(false);
                }
            };
            document.addEventListener('click', handleClickOutside, true);
            return () => {
                document.removeEventListener('click', handleClickOutside, true);
            };
        }, [onBlur, onChangeFocus, showingMenuPopover]);

        const handleEmojiCache = useCallback(
            (name) => {
                if (!emoji?.cache && !emoji?.saveCache) return;
                let newCache = { ...emoji.cache() };
                newCache[name] = newCache[name] ? newCache[name] + 1 : 1;
                newCache = Object.fromEntries(
                    Object.entries(newCache)
                        .sort((a, b) => b[1] - a[1])
                        .slice(0, FREQUENTLY_USED_ITEMS_TO_SHOW),
                );
                emoji.saveCache(newCache);
            },
            [emoji],
        );

        const handleClear = useCallback(
            (e) => {
                e.stopPropagation();
                editor.commands.clearContent(true);
                editor.commands.focus();
            },
            [editor],
        );

        const handleClick = useCallback(
            (e) => {
                if (compactMode) e.stopPropagation();
                if (!focused && !isReadOnly && !showingMenuPopover) {
                    editor.commands.focus();
                    setFocused(true);
                }
                onClick && onClick(e);
            },
            [editor, focused, isReadOnly, onClick, compactMode, showingMenuPopover],
        );

        const handleSubmit = useCallback(() => {
            if (!onSubmit) return;
            onSubmit();
            editor.commands.blur();
            editor.commands.clearContent(true);
        }, [editor, onSubmit]);

        const handleKeyDown = useCallback(
            (e) => {
                if (
                    e.key === 'Escape' &&
                    !showingMention.current &&
                    !showingEmoji.current &&
                    !showingMenuPopover
                ) {
                    editor.commands.blur();
                    setFocused(false);
                    onEsc && onEsc(e);
                }

                if (e.key === 'Escape' && (showingMention.current || showingEmoji.current)) {
                    showingMention.current = false;
                    showingEmoji.current = false;
                }

                if (e.key === 'Tab' && (showingEmoji.current || showingMenuPopover)) {
                    showingEmoji.current = false;
                    return;
                }

                if (e.key === 'Enter' && !e.shiftKey) {
                    if (showingMention.current || showingEmoji.current || showingMenuPopover) {
                        showingMention.current = false;
                        showingEmoji.current = false;
                        return;
                    }
                    if (loading || (canSubmit && !canSubmit(editorContent))) return;
                    handleSubmit();
                }
            },
            [editor, onEsc, canSubmit, editorContent, handleSubmit, showingMenuPopover, loading],
        );

        const getIcons = useMemo(() => {
            switch (true) {
                case editorContent?.text && !isReadOnly && !compactMode && !isBasic && !hideClear:
                    return (
                        <Icon
                            name="closeSmall"
                            size="large"
                            className={classes.actionIcon}
                            onClick={handleClear}
                        />
                    );
                case isReadOnly:
                    return (
                        <Icon
                            name="lockOutline"
                            size="large"
                            className={classes.actionIcon}
                            color={theme.colors.neutral600}
                        />
                    );
                default:
                    return null;
            }
        }, [
            classes.actionIcon,
            editorContent?.text,
            handleClear,
            isReadOnly,
            theme.colors.neutral600,
            compactMode,
            hideClear,
            isBasic,
        ]);

        const inputWrapperProps = useMemo(
            () => ({
                className: classNames(
                    classes.root,
                    {
                        [classes.focused]: focused,
                        [classes.error]: error,
                        [classes.isFullWidth]: isFullWidth,
                        [classes.isReadOnly]: isReadOnly,
                        [classes.hasFixedToolbar]: toolbarStyle === 'fixed',
                        [classes.compactMode]: !isBasic && compactMode && !focused,
                        [classes.compactModeFocused]:
                            !isBasic && compactMode && (focused || !!editorContent?.text?.length),
                        [classes.isBasic]: isBasic,
                        [classes.basicStatic]: basicType === 'static',
                    },
                    classNameProp,
                ),
                error,
                info,
                ...otherProps,
                ...override.root,
            }),
            [
                classNameProp,
                classes,
                compactMode,
                editorContent,
                error,
                focused,
                info,
                isFullWidth,
                isReadOnly,
                otherProps,
                toolbarStyle,
                isBasic,
                basicType,
                override,
            ],
        );

        const editorWrapperProps = useMemo(
            () => ({
                className: classes.editorWrapper,
                onClick: handleClick,
                onKeyDown: handleKeyDown,
                ref: editorDivRef,
                ...override.editorWrapper,
            }),
            [classes, handleClick, override, handleKeyDown],
        );

        const editorProps = useMemo(
            () => ({
                editor,
                className: classes.editor,
                ...override.editor,
            }),
            [classes, editor, override],
        );

        const menuProps = useMemo(
            () => ({
                compactMode,
                customActions,
                editorContent,
                focused,
                handleSubmit,
                toolbar,
                toolbarStyle,
                submitTooltip,
                isBasic,
                loading,
            }),
            [
                compactMode,
                customActions,
                editorContent,
                focused,
                handleSubmit,
                toolbar,
                toolbarStyle,
                submitTooltip,
                isBasic,
                loading,
            ],
        );

        return (
            <RichTextContext.Provider
                value={{
                    editor,
                    emoji,
                    mention,
                    cache: emoji?.cache() || {},
                    saveCache: handleEmojiCache,
                    setShowingMenuPopover,
                }}
            >
                <InputWrapper {...inputWrapperProps}>
                    <div {...editorWrapperProps}>
                        <EditorContent {...editorProps} />
                        <Menu {...menuProps} />
                        {getIcons}
                    </div>
                </InputWrapper>
            </RichTextContext.Provider>
        );
    },
);

RichText.overrides = ['root', 'editorWrapper', 'editor'];

RichText.defaultProps = {
    ...InputWrapper.defaultProps,
    isFullWidth: false,
    isReadOnly: false,
    onBlur: () => {},
    onChange: () => {},
    onClick: () => {},
    onFocus: () => {},
    toolbar: [
        {
            hint: 'Bold',
            item: 'b',
        },
        {
            hint: 'Italic',
            item: 'i',
        },
        {
            hint: 'Underline',
            item: 'u',
        },
        {
            hint: 'Strike',
            item: 'del',
        },
        {
            hint: 'Unordered List',
            item: 'ul',
        },
        {
            hint: 'Ordered List',
            item: 'ol',
        },
    ],
    toolbarStyle: 'floating',
    value: '',
    compactMode: false,
    autofocus: false,
    hideClear: false,
    submitTooltip: 'Send ⏎',
    basicType: 'dynamic',
    loading: false,
};

RichText.propTypes = {
    className: PropTypes.string,
    /** Error will be displayed below the component with style changes */
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    /** Info will be displayed below the component */
    info: PropTypes.string,
    isFullWidth: PropTypes.bool,
    isReadOnly: PropTypes.bool,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onClick: PropTypes.func,
    onFocus: PropTypes.func,
    onSubmit: PropTypes.func,
    onEsc: PropTypes.func,
    placeholder: PropTypes.string,
    toolbar: PropTypes.arrayOf(
        PropTypes.shape({
            hint: PropTypes.string,
            item: PropTypes.oneOf(['b', 'i', 'u', 'ol', 'ul', 'del']),
        }),
    ),
    toolbarStyle: PropTypes.oneOf(['floating', 'fixed']),
    /** An HTML string */
    value: PropTypes.string,
    mention: PropTypes.shape({
        /** Fetch suggestions for the mentions feature */
        fetchSuggestions: PropTypes.func,
        /** Tooltip text for the mentions button in the toolbar */
        tooltip: PropTypes.string,
        texts: PropTypes.shape({
            /** Text advice to show at the top of the mentions popover */
            advice: PropTypes.string,
            /** Text to show if the mentions search can't find a match */
            noResults: PropTypes.string,
        }),
        /** Max visible items in the suggestions list */
        maxVisibleItems: PropTypes.number,
    }),
    /** Enable compact mode: 'Single line height' editor with action buttons on the right that expands on focus */
    compactMode: PropTypes.bool,
    /** Enable autofocus */
    autofocus: PropTypes.bool,
    canSubmit: PropTypes.func,
    onChangeFocus: PropTypes.func,
    emoji: PropTypes.shape({
        /** Tooltip text for the mentions button in the toolbar */
        tooltip: PropTypes.string,
        /** Max visible items in the suggestions list */
        maxVisibleItems: PropTypes.number,
    }),
    /** Hide clear action button in the editor's input area */
    hideClear: PropTypes.bool,
    submitTooltip: PropTypes.string,
    /** No toolbar is shown, no emoji tool, just the text box and Submit button on the right */
    isBasic: PropTypes.bool,
    basicType: PropTypes.PropTypes.oneOf(['static', 'dynamic']),
    //** In basic richtext a loader can be shown instead of submit button */
    loading: PropTypes.bool,
    //** Allows direct access to the editor and set content */
    getEditorRef: PropTypes.func,
};

export default RichText;
