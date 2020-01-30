Default:

```jsx
const options = [
    {
        label: 'Lorem ipsum 1',
        value: 'lorem-ipsum-1',
    },
    {
        label: 'Lorem ipsum 2',
        value: 'lorem-ipsum-2',
    },
    {
        label: 'Lorem ipsum 3',
        value: 'lorem-ipsum-3',
    },
    {
        label: 'Lorem ipsum 4',
        value: 'lorem-ipsum-4',
    },
];

const onChange = (value) => setState({ value });

<div>
    <Select
        label="Lorem ipsum"
        placeholder="Select one"
        onChange={onChange}
        options={options}
        value={state.value}
    />
</div>;
```

Multi:

```jsx
const options = [
    {
        label: 'Lorem ipsum 1',
        value: 'lorem-ipsum-1',
    },
    {
        label: 'Lorem ipsum 2',
        value: 'lorem-ipsum-2',
    },
    {
        label: 'Lorem ipsum 3',
        value: 'lorem-ipsum-3',
    },
    {
        label: 'Lorem ipsum 4',
        value: 'lorem-ipsum-4',
    },
];

const onChange = (value) => setState({ value });

<div>
    <Select
        label="Lorem ipsum"
        placeholder="Select one"
        onChange={onChange}
        options={options}
        value={state.value}
        isMulti
    />
</div>;
```

Disabled:

```jsx
const options = [
    {
        label: 'Lorem ipsum 1',
        value: 'lorem-ipsum-1',
    },
    {
        label: 'Lorem ipsum 2',
        value: 'lorem-ipsum-2',
    },
];

const onChange = (value) => setState({ value });

<div>
    <Select
        label="Lorem ipsum"
        placeholder="Select one"
        onChange={onChange}
        options={options}
        value={state.value || options[1]}
        isReadOnly={true}
    />
</div>;
```

Disabled options:

```jsx
const options = [
    {
        label: 'Lorem ipsum 1',
        value: 'lorem-ipsum-1',
        isDisabled: true,
    },
    {
        label: 'Lorem ipsum 2',
        value: 'lorem-ipsum-2',
    },
    {
        label: 'Lorem ipsum 3',
        value: 'lorem-ipsum-3',
        isDisabled: true,
    },
    {
        label: 'Lorem ipsum 4',
        value: 'lorem-ipsum-4',
    },
];

const onChange = (value) => setState({ value });

<div>
    <Select
        label="Lorem ipsum"
        placeholder="Select one"
        onChange={onChange}
        options={options}
        value={state.value}
    />
</div>;
```

Grouped options:

```jsx
const options = [
    {
        label: 'Lorem ipsum',
        options: [
            {
                label: 'Lorem ipsum 1',
                value: 'lorem-ipsum-1',
            },
            {
                label: 'Lorem ipsum 2',
                value: 'lorem-ipsum-2',
            },
            {
                label: 'Lorem ipsum 3',
                value: 'lorem-ipsum-3',
            },
            {
                label: 'Lorem ipsum 4',
                value: 'lorem-ipsum-4',
            },
        ],
    },
    {
        label: 'Dolor amet',
        options: [
            {
                label: 'Dolor amet 1',
                value: 'dolor-amet-1',
            },
            {
                label: 'Dolor amet 2',
                value: 'dolor-amet-2',
            },
            {
                label: 'Dolor amet 3',
                value: 'dolor-amet-3',
            },
            {
                label: 'Dolor amet 4',
                value: 'dolor-amet-4',
            },
        ],
    },
];

const onChange = (value) => setState({ value });

<div>
    <Select
        label="Lorem ipsum"
        placeholder="Select one"
        onChange={onChange}
        options={options}
        value={state.value}
    />
</div>;
```

Vertical mode:

```jsx
const options = [
    {
        label: 'Lorem ipsum 1',
        value: 'lorem-ipsum-1',
    },
    {
        label: 'Lorem ipsum 2',
        value: 'lorem-ipsum-2',
    },
    {
        label: 'Lorem ipsum 3',
        value: 'lorem-ipsum-3',
    },
    {
        label: 'Lorem ipsum 4',
        value: 'lorem-ipsum-4',
    },
];

const onChange = (value) => setState({ value });

<div>
    <Select
        label="Lorem ipsum"
        placeholder="Select one"
        onChange={onChange}
        options={options}
        value={state.value}
        labelMode="vertical"
    />
</div>;
```

Async load options:

```jsx
const onChange = (value) => setState({ value });
const options = [
    {
        label: 'Lorem ipsum 1',
        value: 'lorem-ipsum-1',
    },
    {
        label: 'Lorem ipsum 2',
        value: 'lorem-ipsum-2',
    },
    {
        label: 'Lorem ipsum 3',
        value: 'lorem-ipsum-3',
    },
    {
        label: 'Lorem ipsum 4',
        value: 'lorem-ipsum-4',
    },
];
const loadOptions = () =>
    new Promise(
        (resolve, reject) =>
            setTimeout(() => {
                resolve(options);
            }, 2000),
        [],
    );

<div>
    <Select
        label="Lorem ipsum"
        placeholder="Search"
        loadOptions={loadOptions}
        onChange={onChange}
        value={state.value}
    />
</div>;
```

Async load options with fuzzy style:

```jsx
const onChange = (value) => setState({ value });
const options = [
    {
        label: 'Lorem ipsum 1',
        value: 'lorem-ipsum-1',
    },
    {
        label: 'Lorem ipsum 2',
        value: 'lorem-ipsum-2',
    },
    {
        label: 'Lorem ipsum 3',
        value: 'lorem-ipsum-3',
    },
    {
        label: 'Lorem ipsum 4',
        value: 'lorem-ipsum-4',
    },
];
const loadOptions = () =>
    new Promise(
        (resolve, reject) =>
            setTimeout(() => {
                resolve(options);
            }, 2000),
        [],
    );

<div>
    <Select
        label="Lorem ipsum"
        placeholder="Search"
        loadOptions={loadOptions}
        onChange={onChange}
        value={state.value}
        isFuzzy
    />
</div>;
```

Async load multiple options with fuzzy style:

```jsx
const onChange = (value) => setState({ value });
let options = [];
let total = 100;
for (let i = 0; i < total; i++) {
    options.push({
        label: `Lorem ipsum ${i}`,
        value: `lorem-ipsum-${i}`,
    });
}

const loadOptions = () =>
    new Promise(
        (resolve, reject) =>
            setTimeout(() => {
                resolve(options);
            }, 2000),
        [],
    );

<div>
    <Select
        label="Lorem ipsum"
        placeholder="Search"
        loadOptions={loadOptions}
        onChange={onChange}
        value={state.value}
        isFuzzy
        isMulti
    />
</div>;
```

isValueObject enabled

```jsx
const onChange = (field) => (value) => setState({ [field]: value });
const options = [
    {
        label: 'Lorem ipsum 1',
        value: 'lorem-ipsum-1',
    },
    {
        label: 'Lorem ipsum 2',
        value: 'lorem-ipsum-2',
    },
    {
        label: 'Lorem ipsum 3',
        value: 'lorem-ipsum-3',
    },
    {
        label: 'Lorem ipsum 4',
        value: 'lorem-ipsum-4',
    },
];

const loadOptions = () =>
    new Promise(
        (resolve, reject) =>
            setTimeout(() => {
                resolve(options);
            }, 2000),
        [],
    );

<div>
    <Select
        label="Lorem ipsum"
        placeholder="Search"
        options={options}
        onChange={onChange('value1')}
        value={state.value1}
        isValueObject={false}
    />
    <Select
        label="Lorem ipsum"
        placeholder="Search"
        options={options}
        onChange={onChange('value2')}
        value={state.value2}
        isValueObject={false}
        isMulti
    />
    <Select
        label="Lorem ipsum"
        placeholder="Search"
        onChange={onChange('value3')}
        value={state.value3}
        isValueObject={false}
        loadOptions={loadOptions}
    />
</div>;
```

### Component tree

---

-   root - root element
-   [react-select](https://react-select.com)
-   error - Error wrapper
-   formControl - Input wrapper excluding label
-   [Label](#/Forms?id=label)
