Default Toast:

```jsx
import { Button, Input, RadioGroup, toast } from 'hoi-poi-ui';

const state = {
    title: 'Lorem',
    text: 'Lorem ipsum',
    type: 'info',
    ...state,
};

let radioOptions = [
    {
        label: 'Info',
        value: 'info',
    },
    {
        label: 'Success',
        value: 'success',
    },
    {
        label: 'Error',
        value: 'error',
    },
];

let onChange = (value) => setState({ type: value });
let onChangeTitle = (e) => {
    setState({ title: e && e.target ? e.target.value : '' });
};
let onChangeText = (e) => {
    setState({ text: e && e.target ? e.target.value : '' });
};

<div>
    <RadioGroup label="Toast type" options={radioOptions} onChange={onChange} value={state.type} />
    <Input
        label="Toast title"
        placeholder="Type here"
        value={state.title}
        onChange={onChangeTitle}
    />
    <Input label="Toast test" placeholder="Type here" value={state.text} onChange={onChangeText} />
    <Toast />
    <br />
    <Button
        color="primary"
        onClick={() =>
            toast({
                type: state.type,
                text: state.text,
                title: state.title,
            })
        }
    >
        Show Toast
    </Button>
</div>;
```

Custom Toast

```jsx
import { Button, Input, RadioGroup, toast } from 'hoi-poi-ui';

const state = {
    content: <div className="custom-content">Component as content</div>,
    position: 'top-right',
    autoClose: false,
    ...state,
};

let radioOptions = [
    {
        label: 'top-left',
        value: 'top-left',
    },
    {
        label: 'top-right',
        value: 'top-right',
    },
    {
        label: 'bottom-left',
        value: 'bottom-left',
    },
    {
        label: 'bottom-right',
        value: 'bottom-right',
    },
];

let autoCloseOptions = [
    {
        label: 'false',
        value: false,
    },
    {
        label: '2000',
        value: 2000,
    },
    {
        label: '4000',
        value: 4000,
    },
    {
        label: '6000',
        value: 6000,
    },
];

let onChangePosition = (value) => setState({ position: value });
let onChangeAutoClose = (value) => setState({ autoClose: value });

<div>
    <RadioGroup
        label="Toast position"
        options={radioOptions}
        onChange={onChangePosition}
        value={state.position}
    />
    <RadioGroup
        label="Toast autoclose"
        options={autoCloseOptions}
        onChange={onChangeAutoClose}
        value={state.autoClose}
    />
    <br />
    <Button
        color="primary"
        onClick={() =>
            toast({
                content: state.content,
                position: state.position,
                autoClose: state.autoClose,
            })
        }
    >
        Show Toast
    </Button>
</div>;
```

### Component tree

---

-   [root](https://github.com/fkhadra/react-toastify)
