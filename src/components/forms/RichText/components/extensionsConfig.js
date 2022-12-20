import { ReactRenderer } from '@tiptap/react';
import tippy from 'tippy.js';
import EmojiList from './EmojiList';
import MentionList from './MentionList';

const getTippy = ({ props, reactRenderer, placement }) =>
    tippy('body', {
        getReferenceClientRect: props.clientRect,
        appendTo: () => document.body,
        content: reactRenderer.element,
        showOnCreate: true,
        interactive: true,
        trigger: 'manual',
        placement,
    });

export const getEmojiConfig = ({ emoji, showingEmoji, emojisToShowInSuggestions = 30 }) => ({
    items: ({ editor, query }) => {
        return editor.storage.emoji.emojis
            .filter(({ shortcodes, tags }) => {
                return (
                    shortcodes.find((shortcode) => shortcode.startsWith(query.toLowerCase())) ||
                    tags.find((tag) => tag.startsWith(query.toLowerCase()))
                );
            })
            .slice(0, emojisToShowInSuggestions);
    },
    allowSpaces: false,
    char: ':',
    // Override extension's default functionality to remove extra trailing space after inserting an emoji
    command: ({ editor, range, props }) => {
        let override;
        const nodeAfter = editor.view.state.selection.$to.nodeAfter;
        const overrideSpace =
            (override = nodeAfter === null || nodeAfter === void 0 ? void 0 : nodeAfter.text) === null ||
            override === void 0
                ? void 0
                : override.startsWith(' ');
        if (overrideSpace) {
            range.to += 1;
        }
        editor
            .chain()
            .focus()
            .insertContentAt(range, [
                {
                    type: 'emoji',
                    attrs: props,
                },
            ])
            .run();
    },
    render: () => {
        let reactRenderer;
        let popup;

        return {
            onStart: (props) => {
                props.texts = emoji.texts || {};
                props.maxVisibleItems = emoji.maxVisibleItems;
                reactRenderer = new ReactRenderer(EmojiList, {
                    props,
                    editor: props.editor,
                });

                if (!props.clientRect) return;

                showingEmoji.current = true;

                popup = getTippy({ props, reactRenderer, placement: 'top-start' });
            },

            onUpdate(props) {
                if (!reactRenderer) return;
                reactRenderer.updateProps(props);

                popup[0].setProps({
                    getReferenceClientRect: props.clientRect,
                });
            },

            onKeyDown(props) {
                if (!reactRenderer) return;
                if (props.event.key === 'Escape') {
                    popup[0].hide();
                    reactRenderer.destroy();

                    return true;
                }

                return reactRenderer.ref?.onKeyDown(props);
            },

            onExit() {
                if (!reactRenderer) return;
                popup[0].destroy();
                reactRenderer.destroy();
            },
        };
    },
});

export const getSuggestionsConfig = ({ mention, showingMention }) => ({
    items: ({ query }) => mention.fetchSuggestions(query),
    allowedPrefixes: [' '],
    char: '@',
    render: () => {
        let reactRenderer;
        let popup;
        return {
            onStart: (props) => {
                props.texts = mention.texts || {};
                props.maxVisibleItems = mention.maxVisibleItems;

                reactRenderer = new ReactRenderer(MentionList, {
                    props,
                    editor: props.editor,
                });

                if (!props.clientRect) return;

                showingMention.current = true;

                popup = getTippy({ props, reactRenderer, placement: 'top-start' });
            },
            onUpdate: (props) => {
                if (!reactRenderer) return;
                reactRenderer.updateProps(props);

                if (!props.clientRect) {
                    return;
                }

                popup?.[0]?.setProps({
                    getReferenceClientRect: props.clientRect,
                });
            },
            onKeyDown: (props) => {
                if (!reactRenderer) return;
                if (props.event.key === 'Escape') {
                    popup[0].hide();
                    return true;
                }

                return reactRenderer.ref?.onKeyDown(props);
            },
            onExit: () => {
                if (!reactRenderer) return;
                popup?.[0]?.destroy();
                reactRenderer.destroy();
            },
        };
    },
});
