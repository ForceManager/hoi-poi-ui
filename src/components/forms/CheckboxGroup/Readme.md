Default

```jsx
let options = [
    {
        label: 'Lorem ipsum',
        value: 'lorem',
    },
    {
        label: 'Lorem ipsum 2',
        value: 'lorem2',
    },
    {
        label: 'Lorem ipsum 3',
        value: 'lorem3',
    },
];

let onChange = (value) => setState({ value });
<CheckboxGroup label="Lorem ipsum" options={options} onChange={onChange} value={state.value} />;
```

Disabled

```jsx
let options = [
    {
        label: 'Lorem ipsum',
        value: 'lorem',
    },
    {
        label: 'Lorem ipsum 2',
        value: 'lorem2',
    },
    {
        label: 'Lorem ipsum 3',
        value: 'lorem3',
    },
];

let onChange = (value) => setState({ value });
<CheckboxGroup
    label="Lorem ipsum"
    options={options}
    onChange={onChange}
    value={state.value}
    isReadOnly
/>;
```

Default vertical label

```jsx
let options = [
    {
        label: 'Lorem ipsum',
        value: 'lorem',
    },
    {
        label: 'Lorem ipsum 2',
        value: 'lorem2',
    },
    {
        label: 'Lorem ipsum 3',
        value: 'lorem3',
    },
];

let onChange = (value) => setState({ value });
<CheckboxGroup
    label="Lorem ipsum"
    labelMode="vertical"
    options={options}
    onChange={onChange}
    value={state.value}
/>;
```

### Component tree

---

-   root - root element
-   [Checkbox](#/Forms?id=checkbox)
-   checkboxLabel - label related to one checkbox
-   checkboxControl - wrapper with checkbox label and checkbox
-   formControl - Input wrapper excluding label
-   error - Error wrapper
-   [Label](#/Forms?id=label)
