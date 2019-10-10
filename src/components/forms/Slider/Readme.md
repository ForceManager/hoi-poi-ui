Default:

```jsx
const onChange = (value) => setState({ value });
<div>
    <Slider label="Lorem ipsum" onChange={onChange} value={state.value} />
    <Slider label="Lorem ipsum" onChange={onChange} value={state.value} isReadOnly />
</div>;
```

Custom max/min/step:

```jsx
let value = state.value || 5000;
const onChange = (value) => setState({ value });
<div>
    <Slider
        label="Lorem ipsum"
        onChange={onChange}
        value={value}
        max={10000}
        min={5000}
        step={100}
    />
</div>;
```

Custom tip:

```jsx
const onChange = (value) => setState({ value });
<div>
    <Slider
        label="Lorem ipsum"
        onChange={onChange}
        value={state.value}
        tipFormatter={(v) => `${v}%`}
    />
</div>;
```

Vertical label:

```jsx
const onChange = (value) => setState({ value });
<div>
    <Slider label="Lorem ipsum" labelMode="vertical" onChange={onChange} value={state.value} />
</div>;
```

Range handler:

```jsx
const onChange = (value) => setState({ value });
<div>
    <Slider label="Lorem ipsum" onChange={onChange} value={state.value} isRange />
</div>;
```

### Component tree

---

-   root - root element
-   [rc-slider](https://github.com/react-component/slider/)
-   error - Error wrapper
-   formControl - Input wrapper excluding label
-   [Label](#/Forms?id=label)
-   overlay - Dragged component (tip)
-   overlayLabel - Dragged component label (tip)
