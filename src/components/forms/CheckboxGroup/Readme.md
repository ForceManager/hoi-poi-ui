Default

```jsx
let options = [
    {
        label: 'Lorem ipsum',
        name: 'lorem',
    },
    {
        label: 'Lorem ipsum 2',
        name: 'lorem2',
    },
    {
        label: 'Lorem ipsum 3',
        name: 'lorem3',
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
        name: 'lorem',
    },
    {
        label: 'Lorem ipsum 2',
        name: 'lorem2',
    },
    {
        label: 'Lorem ipsum 3',
        name: 'lorem3',
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
        name: 'lorem',
    },
    {
        label: 'Lorem ipsum 2',
        name: 'lorem2',
    },
    {
        label: 'Lorem ipsum 3',
        name: 'lorem3',
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

-   [Checkbox](#/Forms?id=checkbox)
-   checkboxLabel - label related to one checkbox
-   checkboxControl - wrapper with checkbox label and checkbox
-   formControl - Input wrapper excluding label
-   [Label](#/Forms?id=label)
