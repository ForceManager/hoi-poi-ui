RichText editor:

```jsx
import { Fragment } from 'react';
import { Button } from 'hoi-poi-ui';

const lorem =
    '<p>Lorem ipsum <strong>dolor sit amet</strong>, consectetur <em>adipiscing elit</em>.</p>';

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
    [
        {
            id: 0,
            name: 'Lea Thompson',
            avatarSrc: 'https://live.staticflickr.com/2862/9899551176_b8c9c7dd30_b.jpg',
        },
        {
            id: 1,
            name: 'Cyndi Lauper',
            avatarSrc: 'https://live.staticflickr.com/2862/9899551176_b8c9c7dd30_b.jpg',
        },
        {
            id: 2,
            name: 'Tom Cruise',
            avatarSrc: 'https://live.staticflickr.com/2862/9899551176_b8c9c7dd30_b.jpg',
        },
        {
            id: 3,
            name: 'Jerry Hall',
            avatarSrc: 'https://live.staticflickr.com/2862/9899551176_b8c9c7dd30_b.jpg',
        },
        {
            id: 4,
            name: 'Madonna',
            avatarSrc: 'https://live.staticflickr.com/2862/9899551176_b8c9c7dd30_b.jpg',
        },
        {
            id: 5,
            name: 'Joan Collins',
            avatarSrc: 'https://live.staticflickr.com/2862/9899551176_b8c9c7dd30_b.jpg',
        },
        {
            id: 6,
            name: 'Winona Ryder',
            avatarSrc: 'https://live.staticflickr.com/2862/9899551176_b8c9c7dd30_b.jpg',
        },
        {
            id: 7,
            name: 'Christina Applegate',
            avatarSrc: 'https://live.staticflickr.com/2862/9899551176_b8c9c7dd30_b.jpg',
        },
        {
            id: 8,
            name: 'Alyssa Milano',
            avatarSrc: 'https://live.staticflickr.com/2862/9899551176_b8c9c7dd30_b.jpg',
        },
        {
            id: 9,
            name: 'Molly Ringwald',
            avatarSrc: 'https://live.staticflickr.com/2862/9899551176_b8c9c7dd30_b.jpg',
        },
    ]
        .filter((item) => item.name.toLowerCase().startsWith(query.toLowerCase()))
        .slice(0, 5);

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
        mention={{
            fetchSuggestions,
            tooltip: 'Mention',
            texts: {
                advice: 'Lorem ipsum dolor sit amet',
                noResults: 'No Results...',
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
    />
</div>;
```
