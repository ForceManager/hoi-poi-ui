RichText editor:

```jsx
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

<div>
    <RichText label="Editor" />

    <RichText label="Editor with placeholder" placeholder="Type something…" />

    <RichText label="Editor with error" error="Error message" />

    <RichText label="Editor with content and info message" info="Info message" value={lorem} />

    <RichText label="Editor Full-Width" value={lorem} isFullWidth />

    <RichText label="Read-Only Editor" value={lorem} isReadOnly />

    <RichText label="Editor with custom toolbar" value={lorem} toolbar={toolbar} />
</div>;
```
