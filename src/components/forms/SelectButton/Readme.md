Default:

```jsx
import Button from '../../general/Button';

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
    <SelectButton
        placeholder="Search..."
        onChange={onChange}
        options={options}
        value={state.value}
        isMulti
    >
        <Button color="primary">Select button</Button>
    </SelectButton>
</div>;
```

Grouped options:

```jsx
import Button from '../../general/Button';

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
    <SelectButton
        placeholder="Search..."
        onChange={onChange}
        options={options}
        value={state.value}
        actions={[
            {
                label: 'Create new lorem ipsum',
                onClick: () => console.log('click'),
            },
            {
                label: 'Create a new dolor ipsum',
                onClick: () => console.log('click'),
            },
        ]}
        isMulti
    >
        <Button color="primary">Select button</Button>
    </SelectButton>
</div>;
```

### Component tree

---

-   [Select](#/Forms?id=select)
-   button - button wrapper
