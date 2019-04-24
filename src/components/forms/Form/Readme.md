```jsx
let schema = [
    {
        title: 'General',
        fields: [
            {
                label: 'Name',
                name: 'name',
                type: 'text',
                placeholder: 'Your name',
                isRequired: true,
            },
            {
                label: 'Email',
                name: 'email',
                type: 'text',
                placeholder: 'Your email',
                hint: 'No spam!',
                isRequired: true,
                attrs: {
                    type: 'email',
                },
            },
            {
                label: 'Password',
                name: 'password',
                type: 'text',
                placeholder: 'Your password',
                isRequired: true,
                attrs: {
                    type: 'password',
                },
            },
            {
                label: 'Gender',
                name: 'gender',
                type: 'select',
                placeholder: 'Select your gender',
                attrs: {
                    options: [
                        {
                            label: 'Male',
                            value: 'male',
                        },
                        {
                            label: 'Female',
                            value: 'female',
                        },
                        {
                            label: 'Other',
                            value: 'other',
                        },
                    ],
                },
            },
            {
                label: 'Interest',
                name: 'interest',
                type: 'slider',
            },
        ],
    },
    {
        title: 'Contact details',
        fields: [
            {
                label: 'Address',
                name: 'address',
                type: 'text',
                placeholder: 'Write an address',
            },
            {
                label: 'Phone',
                name: 'phone',
                type: 'text',
                placeholder: 'Write a phone',
            },
            {
                label: 'Prefered way',
                name: 'prefered-way',
                type: 'checkboxGroup',
                attrs: {
                    options: [
                        {
                            label: 'Email',
                            name: 'email',
                        },
                        {
                            label: 'Phone',
                            name: 'phone',
                        },
                    ],
                },
            },
        ],
    },
    {
        title: 'Extra',
        fields: [
            {
                name: 'biography',
                type: 'inputGroup',
                attrs: {
                    showInputsLabel: 'Show translations',
                    hideInputsLabel: 'Hide translations',
                    inputs: [
                        {
                            label: 'Biography',
                            name: 'english',
                        },
                        {
                            label: 'Spanish',
                            name: 'spanish',
                        },
                        {
                            label: 'French',
                            name: 'french',
                        },
                        {
                            label: 'Germany',
                            name: 'germany',
                        },
                    ],
                },
            },
        ],
    },
];

let onChange = (values, field) => setState({ values });
<Form onChange={onChange} values={state.values} schema={schema} />;
```
