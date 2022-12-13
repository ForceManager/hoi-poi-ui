import React, { memo, useCallback, useEffect, useMemo, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { EditorContent, useEditor, ReactRenderer } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Placeholder from './components/placeholderExtensions';
import Underline from '@tiptap/extension-underline';
import Mention from '@tiptap/extension-mention';
import HardBreak from '@tiptap/extension-hard-break';
import tippy from 'tippy.js';
import Icon from '../../general/Icon';
import InputWrapper from '../components/InputWrapper';
import MentionList from './components/MentionList';
import Menu from './components/Menu';
import { getOverrides, useClasses } from '../../../utils/overrides';
import { createUseStyles, useTheme } from '../../../utils/styles';

import styles from './styles';

const useStyles = createUseStyles(styles, 'RichText');

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
        ...otherProps
    }) => {
        const theme = useTheme();
        const classes = useClasses(useStyles, classesProp);
        const override = getOverrides(overridesProp, RichText.overrides);
        const [focused, setFocused] = useState(false);
        const [editorContent, setEditorContent] = useState({});
        const showingMention = useRef(false);
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

            if (
                mention &&
                mention.fetchSuggestions &&
                typeof mention.fetchSuggestions === 'function'
            ) {
                const suggestionConfig = {
                    items: ({ query }) => mention.fetchSuggestions(query),
                    allowedPrefixes: [' '],
                    char: '@',
                    render: () => {
                        let reactRenderer;
                        let popup;
                        return {
                            onStart: (props) => {
                                props.texts = mention.texts || {};

                                reactRenderer = new ReactRenderer(MentionList, {
                                    props,
                                    editor: props.editor,
                                });

                                if (!props.clientRect) return;

                                showingMention.current = true;

                                popup = tippy('body', {
                                    getReferenceClientRect: props.clientRect,
                                    appendTo: () => document.body,
                                    content: reactRenderer.element,
                                    showOnCreate: true,
                                    interactive: true,
                                    trigger: 'manual',
                                    placement: 'top-start',
                                });
                            },
                            onUpdate: (props) => {
                                reactRenderer.updateProps(props);

                                if (!props.clientRect) {
                                    return;
                                }

                                popup[0].setProps({
                                    getReferenceClientRect: props.clientRect,
                                });
                            },
                            onKeyDown: (props) => {
                                if (props.event.key === 'Escape') {
                                    popup[0].hide();
                                    return true;
                                }

                                return reactRenderer.ref?.onKeyDown(props);
                            },
                            onExit: () => {
                                popup[0].destroy();
                                reactRenderer.destroy();
                            },
                        };
                    },
                };
                extensions.push(
                    Mention.configure({
                        pluginKey: 'polloloco',
                        suggestion: suggestionConfig,
                        renderLabel: ({ node }) => {
                            return `${node.attrs.label}`;
                        },
                    }),
                );
            }

            return extensions;
        }, [mention, placeholder]);

        const editor = useEditor({
            editable: !isReadOnly,
            extensions: getExtensions,
            content: value,
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
            if (autofocus && editor) {
                editor.commands.focus();
                setFocused(true);
            }
        }, [autofocus, editor]);

        useEffect(() => {
            const handleClickOutside = (event) => {
                if (!editorDivRef?.current.contains(event.target)) {
                    setFocused(false);
                    onBlur && onBlur(event);
                    onChangeFocus && onChangeFocus(false);
                }
            };
            document.addEventListener('click', handleClickOutside, true);
            return () => {
                document.removeEventListener('click', handleClickOutside, true);
            };
        }, [onBlur, onChangeFocus]);

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
                if (!focused && !isReadOnly) {
                    editor.commands.focus();
                    setFocused(true);
                }
                onClick && onClick(e);
            },
            [editor, focused, isReadOnly, onClick, compactMode],
        );

        const handleSubmit = useCallback(() => {
            if (!onSubmit) return;
            onSubmit();
            editor.commands.blur();
            editor.commands.clearContent(true);
        }, [editor, onSubmit]);

        const handleKeyDown = useCallback(
            (e) => {
                if (e.keyCode === 27 && !showingMention.current) {
                    editor.commands.blur();
                    setFocused(false);
                    onEsc && onEsc(e);
                }

                if (e.keyCode === 27 && showingMention.current) {
                    showingMention.current = false;
                }

                if (e.keyCode === 13 && !e.shiftKey) {
                    if (showingMention.current) {
                        showingMention.current = false;
                        return;
                    }
                    if (canSubmit && !canSubmit(editorContent)) return;
                    handleSubmit();
                }
            },
            [editor, onEsc, canSubmit, editorContent, handleSubmit],
        );

        const getIcons = useMemo(() => {
            switch (true) {
                case editorContent?.text && !isReadOnly && !compactMode:
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
                        [classes.compactMode]: compactMode && !focused,
                        [classes.compactModeFocused]:
                            compactMode && (focused || !!editorContent?.text?.length),
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
                editor,
                editorContent,
                focused,
                handleSubmit,
                mention,
                toolbar,
                toolbarStyle,
                showingMention: showingMention.current,
            }),
            [
                compactMode,
                customActions,
                editor,
                editorContent,
                focused,
                handleSubmit,
                mention,
                toolbar,
                toolbarStyle,
            ],
        );

        return (
            <InputWrapper {...inputWrapperProps}>
                <div {...editorWrapperProps}>
                    <EditorContent {...editorProps} />
                    <Menu {...menuProps} />
                    {getIcons}
                </div>
            </InputWrapper>
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
    }),
    /** Enable compact mode: 'Single line height' editor with action buttons on the right that expands on focus */
    compactMode: PropTypes.bool,
    /** Enable autofocus */
    autofocus: PropTypes.bool,
    canSubmit: PropTypes.func,
    onChangeFocus: PropTypes.func,
};

export default RichText;
