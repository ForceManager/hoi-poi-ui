import React, { memo, useMemo } from 'react';
import Tooltip from '../../../utils/Tooltip';
import Icon from '../../../general/Icon';
import { useTheme } from '../../../../utils/styles';

const ToolbarItem = memo(({ className, item, hint, editor, key }) => {
    const theme = useTheme();

    const tooltipProps = useMemo(
        () => ({
            placement: 'top',
            content: <span>{hint}</span>,
            key,
        }),
        [hint, key],
    );

    const iconProps = useMemo(() => {
        const propsObj = {
            color: theme.colors.neutralBase,
        };
        switch (item) {
            case 'b':
                propsObj.name = 'bold';
                propsObj.onClick = () => editor.chain().focus().toggleBold().run();
                propsObj.className = editor.isActive('bold') ? 'is-active' : '';
                break;
            case 'i':
                propsObj.name = 'italic';
                propsObj.onClick = () => editor.chain().focus().toggleItalic().run();
                propsObj.className = editor.isActive('italic') ? 'is-active' : '';
                break;
            case 'u':
                propsObj.name = 'underline';
                propsObj.onClick = () => editor.chain().focus().toggleUnderline().run();
                propsObj.className = editor.isActive('underline') ? 'is-active' : '';
                break;
            case 'del':
                propsObj.name = 'strikethrough';
                propsObj.onClick = () => editor.chain().focus().toggleStrike().run();
                propsObj.className = editor.isActive('strike') ? 'is-active' : '';
                break;
            case 'ol':
                propsObj.name = 'orderedList';
                propsObj.onClick = () => editor.chain().focus().toggleOrderedList().run();
                propsObj.className = editor.isActive('orderedList') ? 'is-active' : '';
                break;
            case 'ul':
                propsObj.name = 'unorderedList';
                propsObj.onClick = () => editor.chain().focus().toggleBulletList().run();
                propsObj.className = editor.isActive('bulletList') ? 'is-active' : '';
                break;
            default:
                break;
        }
        return propsObj;
    }, [editor, item, theme]);

    if (!editor) return null;

    return (
        <Tooltip {...tooltipProps}>
            <span className={className}>
                <Icon {...iconProps} />
            </span>
        </Tooltip>
    );
});

export default ToolbarItem;
