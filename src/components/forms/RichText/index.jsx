import React, { memo, useCallback, useMemo, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { BubbleMenu, EditorContent, useEditor, ReactRenderer } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Placeholder from '@tiptap/extension-placeholder';
import Underline from '@tiptap/extension-underline';
import Mention from '@tiptap/extension-mention';
import tippy from 'tippy.js';
import Icon from '../../general/Icon';
import InputWrapper from '../components/InputWrapper';
import MentionList from './components/MentionList';
import ToolbarItem from './components/ToolbarItem';
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
        overrides: overridesProp,
        placeholder,
        toolbar,
        toolbarStyle,
        value,
        mention,
        customActions,
        ...otherProps
    }) => {
        const theme = useTheme();
        const classes = useClasses(useStyles, classesProp);
        const override = getOverrides(overridesProp, RichText.overrides);
        const [focused, setFocused] = useState(false);
        const [editorContent, setEditorContent] = useState({});
        const popup = useRef(null);

        const getExtensions = useMemo(() => {
            const extensions = [
                Placeholder.configure({ placeholder: () => placeholder || null }),
                StarterKit,
                Underline,
            ];

            if (
                mention &&
                mention.fetchSuggestions &&
                typeof mention.fetchSuggestions === 'function'
            ) {
                const suggestionConfig = {
                    items: ({ query }) => mention.fetchSuggestions(query),
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
                        HTMLAttributes: {
                            class: classes.mention,
                        },
                        suggestion: suggestionConfig,
                        renderLabel: ({ options, node }) => {
                            return `${options.suggestion.char}${node.attrs.label}`;
                        },
                    }),
                );
            }

            return extensions;
        }, [mention, placeholder, classes.mention]);

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
            },
            onBlur: ({ event }) => {
                setFocused(false);
                onBlur && onBlur(event);
            },
        });

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
                if (!focused && !isReadOnly) {
                    editor.commands.focus();
                    setFocused(true);
                }
                onClick && onClick(e);
            },
            [editor, focused, isReadOnly, onClick],
        );

        const getToolbar = useMemo(() => {
            const toolbarItemProps = {
                floating: {
                    className: classes.floatingToolbarItem,
                    color: theme.colors.neutralBase,
                },
                fixed: { className: classes.toolbarItem, color: theme.colors.neutral700 },
            };

            const toolbarItems = toolbar.map((item, index) => (
                <ToolbarItem
                    editor={editor}
                    key={index}
                    {...item}
                    {...toolbarItemProps[toolbarStyle]}
                />
            ));

            if (mention) {
                toolbarItems.push(<span className={classes.toolbarDivider}></span>);
                toolbarItems.push(
                    <ToolbarItem
                        editor={editor}
                        key="mention"
                        hint={mention.tooltip}
                        item="mention"
                        {...toolbarItemProps[toolbarStyle]}
                    />,
                );
            }

            switch (true) {
                case editor && toolbarStyle === 'floating':
                    return (
                        <BubbleMenu
                            tippyOptions={{ duration: 100 }}
                            editor={editor}
                            className={classes.floatingToolbar}
                        >
                            {toolbarItems}
                        </BubbleMenu>
                    );
                case editor && toolbarStyle === 'fixed':
                    return (
                        <div className={classes.toolbar}>
                            {toolbarItems}
                            {customActions && (
                                <div className={classes.toolbarCustomActions}>{customActions}</div>
                            )}
                        </div>
                    );
                default:
                    return null;
            }
        }, [editor, toolbar, toolbarStyle, classes, theme, mention, customActions]);

        const getIcons = useMemo(() => {
            switch (true) {
                case editorContent?.text && !isReadOnly:
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
                ...override.editorWrapper,
            }),
            [classes, handleClick, override],
        );

        const editorProps = useMemo(
            () => ({
                editor,
                className: classes.editor,
                ...override.editor,
            }),
            [editor, classes.editor, override],
        );

        return (
            <InputWrapper {...inputWrapperProps}>
                <div {...editorWrapperProps}>
                    <EditorContent {...editorProps} />
                    {getToolbar}
                    {getIcons}
                    {popup.current}
                </div>
            </InputWrapper>
        );
    },
);

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
        fetchSuggestions: PropTypes.func,
        tooltip: PropTypes.string,
        texts: PropTypes.shape({
            advice: PropTypes.string,
            noResults: PropTypes.string,
        }),
    }),
};

export default RichText;
