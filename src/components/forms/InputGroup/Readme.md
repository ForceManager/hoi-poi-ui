Default

```jsx
let inputs = [
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
<InputGroup
    label="Lorem ipsum"
    placeholder="Type here"
    inputs={inputs}
    onChange={onChange}
    value={state.value}
    isRequired
/>;
```

Disabled

```jsx
let inputs = [
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
<InputGroup
    label="Lorem ipsum"
    inputs={inputs}
    onChange={onChange}
    value={state.value}
    isReadOnly
/>;
```

Default vertical label

```jsx
let inputs = [
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
<InputGroup
    label="Lorem ipsum"
    labelMode="vertical"
    inputs={inputs}
    onChange={onChange}
    value={state.value}
/>;
```

### Component tree

---

-   [Input](#/Forms?id=input): Affect all inputs
-   [Link](/#/General?id=link)
-   formControl - wrapper with principal input and toggle inputs button
-   inputsControl - wrapper with inputs
-   [Label](#/Forms?id=label)
