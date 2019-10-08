States:

```jsx
<div>
    <Switch />
    <span> </span>
    <Switch checked />
    <br />
    <Switch isDisabled />
    <span> </span>
    <Switch checked isDisabled />
</div>
```

Interactive:

```jsx
function toggleState() {
    if (state.checked) {
        setState({
            checked: false,
        });
    } else {
        setState({
            checked: true,
        });
    }
}

<div>
    <Switch onChange={toggleState} checked={state.checked} />
</div>;
```

### Component tree

---

-   root - root element
-   [Switch](https://github.com/markusenglund/react-switch)
