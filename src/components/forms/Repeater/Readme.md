**Schema:**

```jsx
const schema = [
    {
        fields: [
            {
                label: 'Activity',
                name: 'activity',
                type: 'select',
                attrs: {
                    options: [
                        {
                            label: 'A',
                            value: 'a',
                        },
                        {
                            label: 'B',
                            value: 'b',
                        },
                        {
                            label: 'C',
                            value: 'c',
                        },
                    ],
                },
            },
            {
                label: 'Name',
                name: 'name',
                type: 'text',
                isRequired: true,
            },
            {
                label: 'Email',
                name: 'email',
                type: 'text',
                isRequired: true,
            },
        ],
    },
];

return <pre>{JSON.stringify(schema, null, 4)}</pre>;
```

```jsx
import schema from './example.1.json';

const errors = {
    phone: 'Invalid phone',
};

let onChange = (value, index) => {
    let newValues = [...state.values];
    newValues[index] = value;
    setState({ values: newValues });
};

let onRemove = (index) => {
    let newValues = [...state.values];
    newValues.splice(index, 1);
    setState({ values: newValues });
};

<Repeater
    name="timeAllocationLine"
    buttonLabel="+ Add"
    buttonClassName="time-allocation-add-button"
    values={state.values}
    errors={errors}
    schema={schema}
    max={5}
    separator={false}
    remove={false}
    onChange={onChange}
    onRemove={onRemove}
/>;
```

### Component tree

---

-   form - native form element
-   [Section](#/Forms?id=Section)
