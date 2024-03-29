**Schema:**

```jsx
const schema = [
    {
        title: 'General', // Section title
        fields: [
            {
                label: 'Email',
                labelMode: 'horizontal', // Override general labelMode
                isFullWidth: false, // Override general isFullWidth
                name: 'email',
                type: 'text', // text|inputGroup|checkboxGroup|radioGroup|select|slider
                placeholder: 'Your email',
                hint: 'No spam!',
                isReadOnly: true,
                isRequired: true,
                attrs: {}, // Rest of props passed directly to field
            },
        ],
    },
];

return <pre>{JSON.stringify(schema, null, 4)}</pre>;
```

**Types:**

```jsx
const types = [
    'text',
    'inputGroup',
    'checkbox',
    'checkboxGroup',
    'radioGroup',
    'select',
    'slider',
    'multiplier',
    'switch',
];

return <pre>{JSON.stringify(types, null, 4)}</pre>;
```

```jsx
import { useState } from 'react';
import schema from './example.json';

const errors = {
    phone: 'Invalid phone',
    multiplier: [{}, { email: 'This field is mandatory' }],
};

function MyField(props) {
    return <input {...props} />;
}

function MyOtherField(props) {
    return <div>Custom Component 2</div>;
}

const customFields = {
    customInput: MyField,
    customText: MyOtherField,
};

const initialValues = {
    multiplier: [
        {
            activity: {
                label: 'B',
                value: 'b',
            },
            name: 'Carlos',
            email: 'carlos@test.com',
        },
        {
            activity: {
                label: 'A',
                value: 'a',
            },
            name: 'Juan',
        },
    ],
};

const [state, setState] = useState({});
let onChange = (values, field) => setState({ values });

<Form
    onChange={onChange}
    values={state.values || initialValues}
    errors={errors}
    schema={schema}
    customFields={customFields}
/>;
```

**Vertical schema:**

```jsx
import schema from './example.vertical.json';
import { useState } from 'react';

const errors = {
    phone: 'Invalid phone',
    multiplier: [{}, { email: 'This field is mandatory' }],
};

const [state, setState] = useState({});
let onChange = (values, field) => setState({ values });

<Form onChange={onChange} values={state.values} errors={errors} schema={schema} />;
```

**Bulk:**

```jsx
import schema from './example.bulk.json';
import { useState } from 'react';

const errors = {
    phone: 'Invalid phone',
    multiplier: [{}, { email: 'This field is mandatory' }],
};

const [state, setState] = useState({});
let onChange = (values, field) => setState({ values });
let onBulkEdit = (field) => {
    const values = {
        ...state.values,
        [field.name]: field.type === 'checkbox' ? false : null,
    };
    setState({ values });
};
let onBulkCancel = (field) => {
    const values = { ...state.values };
    delete values[field.name];
    setState({ values });
};

<Form
    onChange={onChange}
    values={state.values}
    errors={errors}
    schema={schema}
    isBulk
    bulkEditLabel="Click to edit"
    bulkCancelLabel="Cancel"
    onBulkEdit={onBulkEdit}
    onBulkCancel={onBulkCancel}
/>;
```

**Check the example schema <a href="https://raw.githubusercontent.com/ForceManager/hoi-poi-ui/master/src/components/forms/Form/example.json" target="_blank">here</a>.**

### Component tree

---

-   root - root element
-   form - native form element
-   [Section](#/Forms?id=Section)
