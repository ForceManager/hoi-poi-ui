Default ToastContainer:

```jsx
import { Button, Input, RadioGroup, ToastContainer, showToast, clearToast } from 'hoi-poi-ui';
import { useState } from 'react';

const [state, setState] = useState({
    title: 'Lorem',
    text: 'Lorem ipsum',
    type: 'info',
    position: 'top-right',
    autoClose: false,
    newestOnTop: true,
    closeOnClick: true,
    toastId: '',
    useDefaultCloseButton: false,
});

const [notifications, setNotifications] = useState([]);

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

    <ToastContainer
        position={state.position}
        autoClose={state.autoClose}
        newestOnTop={state.newestOnTop}
    />
    <br />
    <Button
        type="terciary"
        onClick={() => {
            const toastId = showToast({
                type: state.type,
                text: state.text,
                title: state.title,
                closeOnClick: state.closeOnClick,
                useDefaultCloseButton: state.useDefaultCloseButton,
            });
            setNotifications([...notifications, toastId]);
        }}
    >
        Show Toast
    </Button>
    <br />
    <br />
    <Button
        type="terciary"
        onClick={() => {
            const toastId = showToast({
                content: <div>Custom Toast</div>,
                closeOnClick: state.closeOnClick,
                useDefaultCloseButton: state.useDefaultCloseButton,
            });
            setNotifications([...notifications, toastId]);
        }}
    >
        Show Custom Toast
    </Button>
    <br />
    <br />
    <Button
        type="terciary"
        onClick={() => {
            const toastId = showToast({
                type: 'warning',
                text: state.text,
                title: state.title,
                order: 1,
                closeOnClick: state.closeOnClick,
                useDefaultCloseButton: state.useDefaultCloseButton,
            });
            setNotifications([...notifications, toastId]);
        }}
    >
        Show Custom Toast At The Bottom
    </Button>
    <br />
    <br />
    <Button
        type="terciary"
        onClick={() => {
            if (notifications[0]) {
                clearToast(notifications[0]);
                const newNotifications = notifications.slice(1);
                setNotifications([...newNotifications]);
            }
        }}
    >
        Dismiss Toast Via Id
    </Button>
    <br />
    <br />
    <Button
        type="terciary"
        onClick={() => {
            clearToast();
            setNotifications([]);
        }}
    >
        Dismiss All Toast
    </Button>
</div>;
```

### Component tree

---

<!-- -   [root](https://github.com/react-component/CustomToast) -->
