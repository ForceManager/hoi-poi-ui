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
<RadioGroup label="Lorem ipsum" options={options} onChange={onChange} value={state.value} />;
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
<RadioGroup
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
<RadioGroup
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
-   [Radio](#/Forms?id=radio)
-   radioLabel - label related to one radio
-   radioControl - wrapper with radio label and radio
-   formControl - Input wrapper excluding label
-   [Label](#/Forms?id=label)
