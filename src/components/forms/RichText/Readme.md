RichText editor:

```jsx
import { Fragment } from 'react';
import { Button, Text } from 'hoi-poi-ui';

const lorem =
    '<p>Lorem ipsum <strong>dolor sit amet</strong>, consectetur <em>adipiscing elit</em>.</p><p>👾</p>';

const toolbar = [
    {
        hint: 'Negrita',
        item: 'b',
    },
    {
        hint: 'Cursiva',
        item: 'i',
    },
    {
        hint: 'Subrayado',
        item: 'u',
    },
];

const fetchSuggestions = (query) =>
    new Promise(
        (resolve, reject) =>
            setTimeout(() => {
                const options = [
                    {
                        id: 0,
                        name: 'Lea Thompson',
                        avatar: {
                            src: 'https://live.staticflickr.com/2862/9899551176_b8c9c7dd30_b.jpg',
                            placeholder:
                                'https://live.staticflickr.com/2862/9899551176_b8c9c7dd30_b.jpg',
                        },
                    },
                    {
                        id: 1,
                        name: 'Cyndi Lauper',
                        avatar: {
                            src: 'https://live.staticflickr.com/2862/9899551176_b8c9c7dd30_b.jpg',
                            placeholder:
                                'https://live.staticflickr.com/2862/9899551176_b8c9c7dd30_b.jpg',
                        },
                    },
                    {
                        id: 2,
                        name: 'Tom Cruise',
                        avatar: {
                            src: 'https://live.staticflickr.com/2862/9899551176_b8c9c7dd30_b.jpg',
                            placeholder:
                                'https://live.staticflickr.com/2862/9899551176_b8c9c7dd30_b.jpg',
                        },
                    },
                    {
                        id: 3,
                        name: 'Jerry Hall',
                        avatar: {
                            src: 'https://live.staticflickr.com/2862/9899551176_b8c9c7dd30_b.jpg',
                            placeholder:
                                'https://live.staticflickr.com/2862/9899551176_b8c9c7dd30_b.jpg',
                        },
                    },
                    {
                        id: 4,
                        name: 'Madonna',
                        avatar: {
                            src: 'https://live.staticflickr.com/2862/9899551176_b8c9c7dd30_b.jpg',
                            placeholder:
                                'https://live.staticflickr.com/2862/9899551176_b8c9c7dd30_b.jpg',
                        },
                    },
                    {
                        id: 5,
                        name: 'Joan Collins',
                        avatar: {
                            src: 'https://live.staticflickr.com/2862/9899551176_b8c9c7dd30_b.jpg',
                            placeholder:
                                'https://live.staticflickr.com/2862/9899551176_b8c9c7dd30_b.jpg',
                        },
                    },
                    {
                        id: 6,
                        name: 'Winona Ryder',
                        avatar: {
                            src: 'https://live.staticflickr.com/2862/9899551176_b8c9c7dd30_b.jpg',
                            placeholder:
                                'https://live.staticflickr.com/2862/9899551176_b8c9c7dd30_b.jpg',
                        },
                    },
                    {
                        id: 7,
                        name: 'Christina Applegate',
                        avatar: {
                            src: 'https://live.staticflickr.com/2862/9899551176_b8c9c7dd30_b.jpg',
                            placeholder:
                                'https://live.staticflickr.com/2862/9899551176_b8c9c7dd30_b.jpg',
                        },
                    },
                    {
                        id: 8,
                        name: 'Alyssa Milano',
                        avatar: {
                            src: 'https://live.staticflickr.com/2862/9899551176_b8c9c7dd30_b.jpg',
                            placeholder:
                                'https://live.staticflickr.com/2862/9899551176_b8c9c7dd30_b.jpg',
                        },
                    },
                    {
                        id: 9,
                        name: 'Molly Ringwald',
                        avatar: {
                            src: 'https://live.staticflickr.com/2862/9899551176_b8c9c7dd30_b.jpg',
                            placeholder:
                                'https://live.staticflickr.com/2862/9899551176_b8c9c7dd30_b.jpg',
                        },
                    },
                ]
                    .filter((item) => item.name.toLowerCase().includes(query.toLowerCase()))
                    .slice(0, 5);
                resolve(options);
            }, 500),
        [],
    );

<div>
    <RichText label="Editor" />

    <RichText label="Editor with placeholder" placeholder="Type something…" />

    <RichText label="Editor with error" error="Error message" />

    <RichText label="Editor with content and info message" info="Info message" value={lorem} />

    <RichText label="Editor Full-Width" value={lorem} isFullWidth />

    <RichText label="Read-Only Editor" value={lorem} isReadOnly />

    <RichText label="Editor with custom toolbar" value={lorem} toolbar={toolbar} />

    <RichText
        label="Editor with fixed toolbar, mentions & custom actions"
        toolbarStyle="fixed"
        isFullWidth
        mention={{
            fetchSuggestions,
            tooltip: 'Mention',
            texts: {
                advice: 'Lorem ipsum dolor sit amet',
                noResults: 'No Results...',
            },
            maxVisibleItems: 3,
        }}
        emoji={{
            tooltip: 'Emoji',
            maxVisibleItems: 7,
            texts: {
                search_placeholder: 'Search all emoji',
                frequently_used_emoji: 'Frequently Used',
            },
            cache: () => JSON.parse(localStorage.getItem('frequently_used_emoji')) || {},
            saveCache: (payload) =>
                localStorage.setItem('frequently_used_emoji', JSON.stringify(payload)),
            defaultFrequentlyUsed: {
                slightly_smiling_face: 0,
                smile: 0,
                scream: 0,
                heart_eyes: 0,
                '+1': 0,
                raised_hands: 0,
                ok_hand: 0,
                rocket: 0,
                tada: 0,
            },
        }}
        customActions={
            <Fragment>
                <Button size="small" type="secondary">
                    Cancel
                </Button>
                <Button size="small" type="primary">
                    Save
                </Button>
            </Fragment>
        }
        onSubmit={() => console.log('SUBMIT!')}
        onEsc={() => console.log('ESCAPE!')}
        value={lorem}
    />

    <Text>Editor in 'compact' mode with mentions</Text>

    <div
        style={{
            backgroundColor: 'rgba(211, 227, 254, 0.35)',
            padding: '4px 8px',
            borderRadius: 8,
            marginTop: 8,
        }}
    >
        <RichText
            compactMode
            isFullWidth
            placeholder="Write @ to mention a colleague"
            mention={{
                fetchSuggestions,
                tooltip: 'Mention',
                texts: {
                    advice: 'Lorem ipsum dolor sit amet',
                    noResults: 'No Results...',
                },
                maxVisibleItems: 7,
            }}
            emoji={{
                tooltip: 'Emoji',
                maxVisibleItems: 7,
                texts: {
                    search_placeholder: 'Search all emoji',
                    frequently_used_emoji: 'Frequently Used',
                },
                cache: () => JSON.parse(localStorage.getItem('frequently_used_emoji')) || {},
                saveCache: (payload) =>
                    localStorage.setItem('frequently_used_emoji', JSON.stringify(payload)),
                defaultFrequentlyUsed: {
                    slightly_smiling_face: 0,
                    smile: 0,
                    scream: 0,
                    heart_eyes: 0,
                    '+1': 0,
                    raised_hands: 0,
                    ok_hand: 0,
                    rocket: 0,
                    tada: 0,
                },
            }}
            overrides={{
                editorWrapper: {
                    style: {
                        backgroundColor: '#fff',
                    },
                },
            }}
            onSubmit={() => console.log('SUBMIT!')}
            onEsc={() => console.log('ESCAPE!')}
        />
    </div>
</div>;
```
