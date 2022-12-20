import React, { useCallback } from 'react';
import { BubbleMenu } from '@tiptap/react';
import classNames from 'classnames';
import { useClasses } from '../../../../../utils/overrides';
import { createUseStyles, useTheme } from '../../../../../utils/styles';
import Icon from '../../../../general/Icon';
import ToolbarItem from '../ToolbarItem';

import styles from './styles';

const useStyles = createUseStyles(styles, 'Menu');

const editorFormatsMapping = {
    b: 'bold',
    i: 'italic',
    u: 'underline',
    del: 'strike',
    ol: 'orderedList',
    ul: 'bulletList',
};

const Menu = ({
    classes: classesProp,
    compactMode,
    customActions,
    editor,
    editorContent,
    focused,
    handleSubmit,
    mention,
    toolbar,
    toolbarStyle,
    emoji,
}) => {
    const theme = useTheme();
    const classes = useClasses(useStyles, classesProp);

    const toolbarItems = useCallback(() => {
        const toolbarItemProps = {
            fixed: {
                className: classes.toolbarItem,
                classNameActive: classes.toolbarItemActive,
                color: theme.colors.neutral700,
            },
            floating: {
                className: classNames(classes.toolbarItem, classes.floatingToolbarItem),
                classNameActive: classes.floatingToolbarItemActive,
                color: theme.colors.neutralBase,
            },
        };

        const toolbarItemStyle = compactMode
            ? toolbarItemProps.fixed
            : toolbarItemProps[toolbarStyle];

        const toolbarItems = toolbar.map((item) => {
            return (
                <ToolbarItem
                    editor={editor}
                    key={item.item}
                    active={editor?.isActive(editorFormatsMapping[item.item])}
                    {...item}
                    {...toolbarItemStyle}
                />
            );
        });

        if ((mention || emoji) && (toolbarStyle === 'fixed' || compactMode)) {
            toolbarItems.push(<span key="divider" className={classes.toolbarDivider}></span>);
            if (mention) {
                toolbarItems.push(
                    <ToolbarItem
                        editor={editor}
                        key="mention"
                        hint={mention.tooltip}
                        item="mention"
                        {...toolbarItemStyle}
                    />,
                );
            }

            if (emoji) {
                toolbarItems.push(
                    <ToolbarItem
                        editor={editor}
                        key="emoji"
                        hint={emoji.tooltip}
                        item="emoji"
                        {...toolbarItemStyle}
                    />,
                );
            }
        }

        return toolbarItems;
    }, [classes, compactMode, editor, mention, theme, toolbar, toolbarStyle, emoji]);

    const toolbarClassNames = classNames(classes.toolbar, {
        [classes.compactMode]: compactMode && !focused,
        [classes.compactModeFocused]: compactMode && (focused || !!editorContent?.text?.length),
    });

    if (!editor) return null;

    switch (true) {
        case compactMode:
            return (
                <div className={toolbarClassNames}>
                    <div className={classes.toolbarItems} onClick={(e) => e.stopPropagation()}>
                        {toolbarItems()}
                    </div>
                    <Icon
                        name="send"
                        size="large"
                        color={
                            !!editorContent?.text?.length
                                ? theme.colors.orange500
                                : theme.colors.neutral700
                        }
                        onClick={handleSubmit}
                        key="submit"
                    />
                </div>
            );
        case editor && toolbarStyle === 'floating':
            return (
                <BubbleMenu
                    tippyOptions={{ duration: 100 }}
                    editor={editor}
                    className={classes.floatingToolbar}
                >
                    {toolbarItems()}
                </BubbleMenu>
            );
        case editor && toolbarStyle === 'fixed':
            return (
                <div className={toolbarClassNames}>
                    {toolbarItems()}
                    {customActions && (
                        <div key="customActions" className={classes.toolbarCustomActions}>
                            {customActions}
                        </div>
                    )}
                </div>
            );
        default:
            return null;
    }
};

export default Menu;
