Horizontal label:

```jsx
import { useState } from 'react';

const [state, setState] = useState({});
const onChange = (field) => {
    return (e) => {
        setState({ ...state, [field]: e && e.target ? e.target.value : '' });
    };
};

const onCopy = () => window.alert('Copied to Clipboard');

<div>
    <TextArea
        label="Lorem ipsum"
        placeholder="Write here"
        onChange={onChange(1)}
        value={state[1]}
    />

    <TextArea
        label="Lorem ipsum"
        placeholder="Write here"
        value="I am disabled!"
        isReadOnly={true}
    />

    <TextArea
        label="Lorem ipsum"
        placeholder="I am required"
        onChange={onChange(2)}
        value={state[2]}
        error="I am an error"
        isRequired={true}
    />

    <TextArea
        label="Lorem ipsum"
        placeholder="Write here"
        value="I am disabled but copyable!"
        error="I am an error"
        info="I am an info message"
        isReadOnly={true}
        isCopyable={true}
        onCopy={onCopy}
    />
</div>;
```

Vertical label:

```jsx
import { useState } from 'react';

const [state, setState] = useState({});
const onChange = (field) => {
    return (e) => {
        setState({ ...state, [field]: e && e.target ? e.target.value : '' });
    };
};

<div>
    <TextArea
        labelMode="vertical"
        label="Lorem ipsum"
        placeholder="Write here"
        onChange={onChange(3)}
        value={state[3]}
    />
</div>;
```

### Component tree

---

-   root - root element
-   textarea - Native textarea
-   error - Error wrapper
-   formControl - Input wrapper excluding label
-   [Label](#/Forms?id=label)
-   preComponent - Component rendered at the input beginning
-   postComponent - Component rendered at the input ending
