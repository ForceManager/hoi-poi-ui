import { Emoji, shortcodeToEmoji } from '@tiptap-pro/extension-emoji';
import { PasteRule } from '@tiptap/core';

const pasteRegex = /(?:^|\s)(:[a-zA-Z0-9_+-]+:)(?=\s|$)/g;

export default Emoji.extend({
    addPasteRules() {
        return [
            new PasteRule({
                find: pasteRegex,
                handler: ({ range, match, commands }) => {
                    const name = match[1].replace(/:/g,'');
                    if (!shortcodeToEmoji(name, this.options.emojis)) {
                        return;
                    }
                    const rangeFromOffset = match[0].length - match[1].length;
                    range.from = range.from + rangeFromOffset;
                    commands.insertContentAt(range, {
                        type: this.name,
                        attrs: {
                            name,
                        },
                    }, {
                        updateSelection: false,
                    });
                },
            }),
        ];
    },
});
