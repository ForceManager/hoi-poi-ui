**Schema:**

```jsx
const schema = {
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
};

return <pre>{JSON.stringify(schema, null, 4)}</pre>;
```

```jsx
import { useState } from 'react';
import schema from './example.1.json';

const errors = {
    email: 'Invalid email',
};

const initialValues = [
    {
        label: 'B',
        value: 'b',
    },
    {
        label: 'C',
        value: 'c',
    },
];
const [state, setState] = useState({});
let onChange = (value, newValue, index, schema) => {
    setState({ value });
};

<Multiplier
    name="timeAllocationLine"
    buttonLabel="ADD"
    buttonClassName="time-allocation-add-button"
    value={state.value || initialValues}
    errors={errors}
    schema={schema}
    max={5}
    separator={false}
    onChange={onChange}
/>;
```

Disabled

```jsx
import { useState } from 'react';
import schema from './example.1.json';

const initialValues = [
    {
        label: 'B',
        value: 'b',
    },
    {
        label: 'C',
        value: 'c',
    },
];
const [state, setState] = useState({});
let onChange = (value, newValue, index, schema) => {
    setState({ value });
};

<Multiplier
    name="timeAllocationLine"
    buttonLabel="ADD"
    buttonClassName="time-allocation-add-button"
    value={state.value || initialValues}
    schema={schema}
    max={5}
    separator={false}
    onChange={onChange}
    isReadOnly={true}
/>;
```

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
import { useState } from 'react';
import schema from './example.json';

const errors = {
    email: 'Invalid email',
};
const [state, setState] = useState({});
let onChange = (value, newValue, index, schema) => {
    setState({ value });
};

<Multiplier
    name="timeAllocationLine"
    buttonLabel="+ Add"
    buttonClassName="time-allocation-add-button"
    value={state.value}
    errors={errors}
    schema={schema}
    max={5}
    separator={true}
    onChange={onChange}
/>;
```

Full-width

```jsx
import { useState } from 'react';
import schema from './example.json';

const errors = {
    email: 'Invalid email',
};
const [state, setState] = useState({});
let onChange = (value, newValue, index, schema) => {
    setState({ value });
};

<Multiplier
    name="full-width-example"
    isFullWidth={true}
    buttonLabel="Add"
    value={state.value}
    errors={errors}
    schema={schema}
    max={5}
    separator={true}
    onChange={onChange}
/>;
```

Vertical mode

```jsx
import { useState } from 'react';
import schema from './example.json';

const errors = {
    email: 'Invalid email',
};
const [state, setState] = useState({});
let onChange = (value, newValue, index, schema) => {
    setState({ value });
};

<Multiplier
    name="vertical-example"
    buttonLabel="Add"
    value={state.value}
    errors={errors}
    schema={schema}
    max={5}
    separator={true}
    onChange={onChange}
    labelMode="vertical"
/>;
```

### Component tree

---

-   root
-   multiplierControl - every item container
-   container - items and button container
-   buttonContainer
-   button
-   [Section](#/Forms/Section)
-   [Form](#/Forms/Form) - component for render a group of inputs
-   fieldControl - internal component for render individual inputs
-   [removeIcon](/#/General/Icon)
