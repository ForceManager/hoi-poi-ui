Default Toast:

```jsx
import { Button, Input, RadioGroup, toast, dismissToast } from 'hoi-poi-ui';
import { useState } from 'react';

const [state, setState] = useState({
    title: 'Lorem',
    text: 'Lorem ipsum',
    type: 'info',
    position: 'top-right',
    autoClose: 2000,
    newestOnTop: false,
    closeOnClick: true,
    toastId: '',
    useDefaultCloseButton: false,
});

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
        label: 'Warning',
        value: 'warning',
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

let useDefaultCloseButton = [
    {
        label: 'false',
        value: false,
    },
    {
        label: 'true',
        value: true,
    },
];

let onChange = (value) => setState({ ...state, type: value });
let onChangeTitle = (value) => {
    setState({ ...state, title: value });
};
let onChangeText = (value) => {
    setState({ ...state, text: value });
};
let onChangePosition = (value) => setState({ ...state, position: value });
let onChangeAutoClose = (value) => setState({ ...state, autoClose: value });
let onChangeNewestOnTop = (value) => setState({ ...state, newestOnTop: !state.newestOnTop });
let onChangeCloseOnClick = (value) => setState({ ...state, closeOnClick: !state.closeOnClick });
let onChangeUseDefaultCloseButton = (value) =>
    setState({ ...state, useDefaultCloseButton: !state.useDefaultCloseButton });

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
        label="useDefaultCloseButton"
        options={useDefaultCloseButton}
        onChange={onChangeUseDefaultCloseButton}
        value={state.useDefaultCloseButton}
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
                closeOnClick: state.closeOnClick,
                useDefaultCloseButton: state.useDefaultCloseButton,
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
            setState({
                ...state,
                toastId: toast({
                    content: <div className="custom-content">Component as content</div>,
                    closeButton: <div style={{ color: 'white' }}>close</div>,
                    closeButtonClassName: 'custom-closeButton-className',
                    position: state.position,
                    autoClose: state.autoClose,
                    closeOnClick: state.closeOnClick,
                    className: 'custom-one',
                    useDefaultCloseButton: state.useDefaultCloseButton,
                }),
            })
        }
    >
        Show Custom Toast
    </Button>
    <br />
    <br />
    <Button
        color="danger"
        onClick={() => {
            dismissToast(state.toastId);
        }}
    >
        Dismiss Toast Via Id
    </Button>
    <br />
    <br />
    <Button
        color="danger"
        onClick={() => {
            dismissToast();
        }}
    >
        Dismiss All Toast
    </Button>
</div>;
```

### Component tree

---

-   [root](https://github.com/fkhadra/react-toastify)
