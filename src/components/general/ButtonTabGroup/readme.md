Default buttons:

```jsx
const [value, setValue] = React.useState(1);
const buttons = [
    {
        label: 'One',
        value: 1,
    },
    {
        label: 'Two',
        value: 2,
    },
    {
        label: 'Three',
        value: 3,
    },
    {
        label: 'Four',
        value: 4,
    },
];
<ButtonTabGroup buttons={buttons} value={value} onChange={setValue}></ButtonTabGroup>;
```

### Component tree

---

-   root - root element
-   button
