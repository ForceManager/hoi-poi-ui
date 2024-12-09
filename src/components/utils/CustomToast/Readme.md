Default ToastContainer:

```jsx
import {
    Button,
    Input,
    RadioGroup,
    ToastContainer,
    showToast,
    clearToast,
    Text,
    CheckboxGroup,
    Icon,
    useTheme,
} from 'hoi-poi-ui';
import { useState, useRef } from 'react';
import { v4 as uuid } from 'uuid';

const [state, setState] = useState({
    title: 'Lorem',
    text: 'Lorem ipsum',
    type: 'info',
    position: 'topRight',
    transition: 'slide',
    autoClose: false,
    newestOnTop: true,
    closeOnClick: false,
    toastId: '',
    useDefaultCloseButton: true,
    preComponent: {},
    postComponent: {},
});

const [notifications, setNotifications] = useState([]);
const notificationsCloseButtonRef = useRef({});

const theme = useTheme();

let typeOptions = [
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

let transitionOptions = [
    { label: 'slide', value: 'slide' },
    { label: 'fade', value: 'fade' },
];

let positionOptions = [
    {
        label: 'topLeft',
        value: 'topLeft',
    },
    {
        label: 'topCenter',
        value: 'topCenter',
    },
    {
        label: 'topRight',
        value: 'topRight',
    },
    {
        label: 'bottomLeft',
        value: 'bottomLeft',
    },
    {
        label: 'bottomCenter',
        value: 'bottomCenter',
    },
    {
        label: 'bottomRight',
        value: 'bottomRight',
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

let preComponentOptions = [
    {
        label: 'preComponent topRight',
        value: 'topRight',
    },
    {
        label: 'preComponent bottomRight',
        value: 'bottomRight',
    },
    {
        label: 'preComponent topLeft',
        value: 'topLeft',
    },
    {
        label: 'preComponent bottomLeft',
        value: 'bottomLeft',
    },
];
let postComponentOptions = [
    {
        label: 'postComponent topRight',
        value: 'topRight',
    },
    {
        label: 'postComponent bottomRight',
        value: 'bottomRight',
    },
    {
        label: 'postComponent topLeft',
        value: 'topLeft',
    },
    {
        label: 'postComponent bottomLeft',
        value: 'bottomLeft',
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
let onChangeTransition = (value) => setState({ ...state, transition: value });
let onChangeAutoClose = (value) => setState({ ...state, autoClose: value });
let onChangeNewestOnTop = (value) => setState({ ...state, newestOnTop: !state.newestOnTop });
let onChangeCloseOnClick = (value) => setState({ ...state, closeOnClick: !state.closeOnClick });
let onChangeUseDefaultCloseButton = (value) =>
    setState({ ...state, useDefaultCloseButton: !state.useDefaultCloseButton });
let onChangePreComponent = (value) => setState({ ...state, preComponent: value });
let onChangePostComponent = (value) => setState({ ...state, postComponent: value });

<div>
    <RadioGroup label="Toast type" options={typeOptions} onChange={onChange} value={state.type} />
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
        label="transition"
        options={transitionOptions}
        onChange={onChangeTransition}
        value={state.transition}
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
    <CheckboxGroup
        label="PreComponent"
        color="orange"
        options={preComponentOptions}
        onChange={onChangePreComponent}
        value={state.preComponent}
    />
    <CheckboxGroup
        label="PostComponent"
        color="orange"
        options={postComponentOptions}
        onChange={onChangePostComponent}
        value={state.postComponent}
    />
    <ToastContainer
        position={state.position}
        autoClose={state.autoClose}
        newestOnTop={state.newestOnTop}
        transition={state.transition}
        preComponent={{
            topLeft: state.preComponent.topLeft ? <Text>PreComponent TopLeft</Text> : null,
            topRight: state.preComponent.topRight ? <Text>PreComponent TopRight</Text> : null,
            bottomLeft: state.preComponent.bottomLeft ? <Text>PreComponent BottomLeft</Text> : null,
            bottomRight: state.preComponent.bottomRight ? (
                <Text>PreComponent BottomRight</Text>
            ) : null,
        }}
        postComponent={{
            topLeft: state.postComponent.topLeft ? <Text>PostComponent TopLeft</Text> : null,
            topRight: state.postComponent.topRight ? <Text>PostComponent TopRight</Text> : null,
            bottomLeft: state.postComponent.bottomLeft ? (
                <Text>PostComponent BottomLeft</Text>
            ) : null,
            bottomRight: state.postComponent.bottomRight ? (
                <Text>PostComponent BottomRight</Text>
            ) : null,
        }}
    />
    <ToastContainer containerId="second-container" autoClose={false} />
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
                type: state.type,
                text: state.text,
                title: state.title,
                closeOnClick: state.closeOnClick,
                useDefaultCloseButton: state.useDefaultCloseButton,
                onClickLink: () => alert('Link clicked'),
                linkText: 'Click link',
            });
            setNotifications([...notifications, toastId]);
        }}
    >
        Show Toast With Link
    </Button>
    <br />
    <br />
    <Button
        type="terciary"
        onClick={() => {
            const toastId = showToast({
                text: state.text,
                title: state.title,
                icon: <Icon name="email" color={theme.colors.temp.purple400} />,
                closeOnClick: state.closeOnClick,
                useDefaultCloseButton: state.useDefaultCloseButton,
            });
            setNotifications([...notifications, toastId]);
        }}
    >
        Show Toast With Icon
    </Button>
    <br />
    <br />
    <Button
        type="terciary"
        onClick={() => {
            const toastId = showToast({
                content: <Text>Custom Toast</Text>,
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
                title: 'Title',
                icon: <Icon name="email" color={theme.colors.orange400} />,
                content: <Text>Custom Toast</Text>,
                closeOnClick: state.closeOnClick,
                useDefaultCloseButton: state.useDefaultCloseButton,
            });
            setNotifications([...notifications, toastId]);
        }}
    >
        Show Custom Toast With Icon And Title
    </Button>
    <br />
    <br />
    <Button
        type="terciary"
        onClick={() => {
            const id = uuid();
            const toastId = showToast({
                title: 'Title',
                icon: <Icon name="email" color={theme.colors.orange400} />,
                content: <Text>Custom Toast</Text>,
                closeOnClick: state.closeOnClick,
                closeButton: (
                    <Button
                        onClick={() => {
                            console.log({ n: notificationsCloseButtonRef.current, id });
                            clearToast(notificationsCloseButtonRef.current[id]);
                        }}
                    >
                        Close
                    </Button>
                ),
                useDefaultCloseButton: state.useDefaultCloseButton,
            });
            notificationsCloseButtonRef.current = {
                ...notificationsCloseButtonRef.current,
                [id]: toastId,
            };
            setNotifications([...notifications, toastId]);
        }}
    >
        Show Toast With CloseButton
    </Button>
    <br />
    <br />
    <Button
        type="terciary"
        onClick={() => {
            showToast({
                text: state.text,
                title: 'Toast second-container containerId',
                closeOnClick: true,
                useDefaultCloseButton: true,
                containerId: 'second-container',
            });
        }}
    >
        Show Toast in ContainerId
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
