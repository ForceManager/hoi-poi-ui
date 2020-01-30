Default buttons:

```jsx
const [value, setValue] = React.useState(false);
const buttons = [
    {
        label: 'ON',
        value: true,
    },
    {
        label: 'OFF',
        value: false,
    },
];
<ButtonSwitch buttons={buttons} value={value} onChange={setValue}></ButtonSwitch>;
```

### Component tree

---

-   root - root element
-   [Button](#/Button)
