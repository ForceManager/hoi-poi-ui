States:

```jsx
<div>
    <Checkbox />
    <span> </span>
    <Checkbox checked />
    <span> </span>
    <Checkbox checked indeterminate />
    <br />
    <Checkbox isDisabled />
    <span> </span>
    <Checkbox checked isDisabled />
    <span> </span>
    <Checkbox checked indeterminate isDisabled />
</div>
```

Interactive:

```jsx
function toggleState() {
    if (state.checked && state.indeterminate) {
        setState({
            checked: false,
            indeterminate: false,
        });
    } else if (state.checked && !state.indeterminate) {
        setState({
            checked: true,
            indeterminate: true,
        });
    } else if (!state.checked && !state.indeterminate) {
        setState({
            checked: true,
            indeterminate: false,
        });
    }
}

<div>
    <Checkbox onChange={toggleState} checked={state.checked} indeterminate={state.indeterminate} />
</div>;
```

### Component tree

---

-   root - root element
-   input - Hidden native input
-   svg - icon determined by the checkbox state
