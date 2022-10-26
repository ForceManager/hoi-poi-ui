import React, { memo, useCallback, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { BubbleMenu, EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Placeholder from '@tiptap/extension-placeholder';
import Underline from '@tiptap/extension-underline';
import Icon from '../../general/Icon';
import InputWrapper from '../components/InputWrapper';
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
        ...otherProps
    }) => {
        const theme = useTheme();
        const classes = useClasses(useStyles, classesProp);
        const override = getOverrides(overridesProp, RichText.overrides);
        const [focused, setFocused] = useState(false);
        const [editorContent, setEditorContent] = useState({});

        const editor = useEditor({
            editable: !isReadOnly,
            extensions: [
                Placeholder.configure({ placeholder: () => placeholder || null }),
                StarterKit,
                Underline,
            ],
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
            const toolbarItemClassNames = {
                floating: classes.bubbleMenuItem,
            };
            const toolbarItems = toolbar.map((item, index) => (
                <ToolbarItem
                    className={toolbarItemClassNames[toolbarStyle]}
                    editor={editor}
                    key={index}
                    {...item}
                />
            ));
            switch (true) {
                case editor && toolbarStyle === 'floating':
                    return (
                        <BubbleMenu
                            tippyOptions={{ duration: 100 }}
                            editor={editor}
                            className={classes.bubbleMenu}
                        >
                            {toolbarItems}
                        </BubbleMenu>
                    );
                default:
                    return null;
            }
        }, [editor, toolbar, toolbarStyle, classes]);

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
                override,
            ],
        );

        const editorProps = useMemo(
            () => ({
                editor,
                className: classes.editor,
            }),
            [editor, classes.editor],
        );

        return (
            <InputWrapper {...inputWrapperProps}>
                <div className={classes.editorWrapper} onClick={handleClick}>
                    <EditorContent {...editorProps} />
                    {getToolbar}
                    {getIcons}
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
};

export default RichText;
