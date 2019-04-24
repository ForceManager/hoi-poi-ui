States:

```jsx
<div>
    <Radio />
    <span> </span>
    <Radio checked />
    <br />
    <Radio isDisabled />
    <span> </span>
    <Radio checked isDisabled />
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
    <Radio onChange={toggleState} checked={state.checked} />
</div>;
```

### Component tree

---

-   input - Hidden native input
-   svg - icon determined by the radio state
