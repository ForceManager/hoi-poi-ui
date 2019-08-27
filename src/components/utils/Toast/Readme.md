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
            // toast({
            //     type: state.type,
            //     text: state.text,
            //     title: state.title,
            // })
            toast({ content: <div>mandunguilla</div>, position: 'bottom-right' })
        }
    >
        Show Toast
    </Button>
</div>;
```

### Component tree

---

-   [root](https://github.com/fkhadra/react-toastify)
