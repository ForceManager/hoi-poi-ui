import React, { useCallback, useMemo, useState, Fragment, useRef, useEffect } from 'react';
import classNames from 'classnames';
import Tooltip from '../../../utils/Tooltip';
import Icon from '../../../general/Icon';
import EmojiMenu from './EmojiMenu';

const ToolbarItem = ({
    className: classNameProp,
    classNameActive,
    color,
    item,
    hint,
    editor,
    active,
    setShowingMenuPopover,
    emoji,
}) => {
    const [visible, setVisible] = useState(false);
    const [popoverVisible, setPopoverVisible] = useState(false);
    const className = classNames(classNameProp, { [classNameActive]: active });
    const emojiMenuRef = useRef(null);

    useEffect(() => {
        if (item === 'emoji' && popoverVisible) {
            const handleKeyDown = (event) => {
                emojiMenuRef?.current?.onKeyDown(event);
            };
            document.addEventListener('keydown', handleKeyDown, true);

            return () => {
                document.removeEventListener('keydown', handleKeyDown, true);
            };
        }
    }, [item, popoverVisible]);

    const tooltipProps = useMemo(
        () => ({
            placement: 'top',
            content: <Fragment>{hint}</Fragment>,
            mouseEnterDelay: 0.2,
        }),
        [hint],
    );

    const iconProps = useMemo(() => {
        let name, onClick;

        const commonProps = {
            color,
            className,
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
                onClick = () => editor.chain().focus().insertContent('@').run();
                break;
            case 'emoji':
                name = 'mood';
                break;
            default:
                break;
        }
        return {
            name,
            onClick,
            ...commonProps,
        };
    }, [color, item, editor, className]);

    const handlePopoverVisibility = useCallback(
        (visible) => {
            setPopoverVisible(visible);
            setShowingMenuPopover && setShowingMenuPopover(visible);
        },
        [setShowingMenuPopover],
    );

    switch (true) {
        case !editor:
            return null;
        case item === 'emoji':
            return (
                <EmojiMenu
                    editor={editor}
                    popoverVisible={popoverVisible}
                    onVisibleChange={handlePopoverVisibility}
                    ref={emojiMenuRef}
                    texts={emoji?.texts}
                    cache={emoji?.cache}
                    saveCache={emoji?.saveCache}
                    defaultFrequentlyUsed={emoji?.defaultFrequentlyUsed}
                >
                    <Tooltip visible={!popoverVisible && visible} {...tooltipProps}>
                        <span
                            className={className}
                            onMouseEnter={() => setVisible(true)}
                            onMouseLeave={() => setVisible(false)}
                        >
                            <Icon {...iconProps} />
                        </span>
                    </Tooltip>
                </EmojiMenu>
            );
        default:
            return (
                <Tooltip {...tooltipProps}>
                    <span className={className}>
                        <Icon {...iconProps} />
                    </span>
                </Tooltip>
            );
    }
};

export default ToolbarItem;
