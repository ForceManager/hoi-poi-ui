import React, { memo, useMemo } from 'react';
import Tooltip from '../../../utils/Tooltip';
import Icon from '../../../general/Icon';

const ToolbarItem = memo(({ className, color, item, hint, editor, key }) => {
    const tooltipProps = useMemo(
        () => ({
            placement: 'top',
            content: <span>{hint}</span>,
            key,
        }),
        [hint, key],
    );

    const iconProps = useMemo(() => {
        let name, onClick;

        const commonProps = {
            color,
        };

        switch (item) {
            case 'b':
                name = 'bold';
                onClick = () => editor.chain().focus().toggleBold().run();
                break;
            case 'i':
                name = 'italic';
                onClick = () => editor.chain().focus().toggleItalic().run();
                break;
            case 'u':
                name = 'underline';
                onClick = () => editor.chain().focus().toggleUnderline().run();
                break;
            case 'del':
                name = 'strikethrough';
                onClick = () => editor.chain().focus().toggleStrike().run();
                break;
            case 'ol':
                name = 'orderedList';
                onClick = () => editor.chain().focus().toggleOrderedList().run();
                break;
            case 'ul':
                name = 'unorderedList';
                onClick = () => editor.chain().focus().toggleBulletList().run();
                break;
            case 'mention':
                name = 'mention';
                onClick = () => editor.chain().insertContent('@').run();
                break;
            default:
                break;
        }
        return { name, onClick, className, ...commonProps };
    }, [className, color, editor, item]);

    if (!editor) return null;

    return (
        <Tooltip {...tooltipProps}>
            <span className={className}>
                <Icon {...iconProps} className="ojete" />
            </span>
        </Tooltip>
    );
});

export default ToolbarItem;
