Exsmple:

```jsx
let state = state || {};
const onChange = (field) => {
    return (e) => {
        setState({ [field]: e && e.target ? e.target.value : '' });
    };
};

function CustomComponent(props) {
    return <input value="Custom Component" />;
}

<div>
    <Custom label="Custom" component={CustomComponent} onChange={onChange(1)} />
</div>;
```

### Component tree

---

-   root - root element
-   input - Native input
-   error - Error wrapper
-   formControl - Input wrapper excluding label
-   [Label](#/Forms?id=label)
-   preComponent - Component rendered at the input beginning
-   postComponent - Component rendered at the input ending
