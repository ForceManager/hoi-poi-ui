Default Toast:

```jsx
import { Button, Input, RadioGroup, toast } from 'hoi-poi-ui';

const state = {
    title: 'Lorem',
    text: 'Lorem ipsum',
    type: 'info',
    position: 'top-right',
    autoClose: 2000,
    newestOnTop: false,
    closeOnClick: true,
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

let positionOptions = [
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

let newestOnTopOptions = [
    {
        label: 'false',
        value: false,
    },
    {
        label: 'true',
        value: true,
    },
];

let closeOnClickOptions = [
    {
        label: 'false',
        value: false,
    },
    {
        label: 'true',
        value: true,
    },
];

let onChange = (value) => setState({ type: value });
let onChangeTitle = (e) => {
    setState({ title: e && e.target ? e.target.value : '' });
};
let onChangeText = (e) => {
    setState({ text: e && e.target ? e.target.value : '' });
};
let onChangePosition = (value) => setState({ position: value });
let onChangeAutoClose = (value) => setState({ autoClose: value });
let onChangeNewestOnTop = (value) => setState({ newestOnTop: !state.newestOnTop });
let onChangeCloseOnClick = (value) => setState({ closeOnClick: !state.closeOnClick });

<div>
    <RadioGroup label="Toast type" options={radioOptions} onChange={onChange} value={state.type} />
    <Input
        label="Toast title"
        placeholder="Type here"
        value={state.title}
        onChange={onChangeTitle}
    />
    <Input label="Toast test" placeholder="Type here" value={state.text} onChange={onChangeText} />
    <RadioGroup
        label="position"
        options={positionOptions}
        onChange={onChangePosition}
        value={state.position}
    />
    <RadioGroup
        label="autoClose"
        options={autoCloseOptions}
        onChange={onChangeAutoClose}
        value={state.autoClose}
    />
    <RadioGroup
        label="closeOnClick"
        options={closeOnClickOptions}
        onChange={onChangeCloseOnClick}
        value={state.closeOnClick}
    />
    <RadioGroup
        label="newestOnTop"
        options={newestOnTopOptions}
        onChange={onChangeNewestOnTop}
        value={state.newestOnTop}
    />
    <Toast position={state.position} autoClose={state.autoClose} newestOnTop={state.newestOnTop} />
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
    <br />
    <br />
    <Button
        color="primary"
        onClick={() =>
            toast({
                content: <div className="custom-content">Component as content</div>,
                closeButton: <div style={{ color: 'white' }}>close</div>,
                closeButtonClassName: 'custom-closeButton-className',
                position: state.position,
                autoClose: state.autoClose,
                closeOnClick: state.closeOnClick,
                className: 'custom-one',
            })
        }
    >
        Show Custom Toast
    </Button>
</div>;
```

### Component tree

---

-   [root](https://github.com/fkhadra/react-toastify)
