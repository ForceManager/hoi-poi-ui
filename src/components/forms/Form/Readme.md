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
const types = ['text', 'inputGroup', 'checkboxGroup', 'radioGroup', 'select', 'slider'];

return <pre>{JSON.stringify(types, null, 4)}</pre>;
```

```jsx
import schema from './example.json';

const errors = {
    phone: 'Invalid phone',
};

function MyField(props) {
    return <input />;
}

function MyOtherField(props) {
    return <div>Custom Component 2</div>;
}

const customFields = {
    myField: MyField,
    myOtherField: MyOtherField,
};

let onChange = (values, field) => setState({ values });
let onFocus = (values, field) => {
    console.log('onFocus', values, field);
};

<Form
    onChange={onChange}
    onFocus={onFocus}
    values={state.values}
    errors={errors}
    schema={schema}
    customFields={customFields}
/>;
```

**Check the example schema <a href="https://raw.githubusercontent.com/ForceManager/hoi-poi-ui/master/src/components/forms/Form/example.json" target="_blank">here</a>.**

### Component tree

---

-   root - root element
-   form - native form element
-   [Section](#/Forms?id=Section)
