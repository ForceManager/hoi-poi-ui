Default:

```jsx
const items = [
    {
        id: 'level1',
        text: 'Level 1',
    },
    {
        id: 'level2',
        text: 'Level 2',
    },
    {
        id: 'level3',
        text: 'Level 3',
    },
    {
        id: 'level4',
        text: 'Level 4',
    },
];
<Breadcrumbs items={items} />;
```

Clickable:

```jsx
const items = [
    {
        id: 'level1',
        text: 'Level 1',
    },
    {
        id: 'level2',
        text: 'Level 2',
    },
    {
        id: 'level3',
        text: 'Level 3',
    },
    {
        id: 'level4',
        text: 'Level 4',
    },
];
<Breadcrumbs onClick={(item) => alert(JSON.stringify(item, null, 4))} items={items} />;
```

### Component tree

---

-   root
-   item
-   divider
-   [Text](#/Typography?id=text)
