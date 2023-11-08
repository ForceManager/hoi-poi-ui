Textarea Field:

```jsx
import { useState } from 'react';

const [state, setState] = useState({});
const onChange = (field) => {
    return (value) => {
        setState({ ...state, [field]: value });
    };
};

<div>
    <Textarea
        label="Text"
        placeholder="Write here"
        onChange={onChange(1)}
        value={state[1]}
        type="text"
        isResizable={false}
    />
</div>;
```

Vertical label:

```jsx
import { useState } from 'react';

const [state, setState] = useState({});
const onChange = (field) => {
    return (value) => {
        setState({ ...state, [field]: value });
    };
};

const onCopy = () => window.alert('Copied to Clipboard');

<div>
    <Textarea
        label="Hint"
        placeholder="Write here"
        hint="Hello!"
        isRequired
        onChange={onChange(1)}
        value={state[1]}
    />
    <Textarea
        label="Info"
        placeholder="Write here"
        onChange={onChange(2)}
        value={state[2]}
        info="I am an info message"
    />
    <Textarea
        label="Error"
        placeholder="Write here"
        onChange={onChange(3)}
        value={state[3]}
        error="I am an error"
    />
    <Textarea
        label="Info and Error"
        placeholder="Write here"
        onChange={onChange(4)}
        value={state[4]}
        info="I am an info message"
        error="I am an error"
    />
    <Textarea
        label="Disabled"
        placeholder="Write here"
        readOnlyTooltip="Read Only"
        isReadOnly={true}
    />
    <Textarea
        label="Copy"
        placeholder="Write here"
        onChange={onChange(6)}
        value={state[6]}
        isCopyable={true}
        onCopy={onCopy}
    />
    <Textarea
        label="Copy and Read Only"
        placeholder="Write here"
        value="You can Copy but typing is disabled"
        isCopyable={true}
        onCopy={onCopy}
        isReadOnly={true}
    />
</div>;
```

Horizontal label:

```jsx
import { useState } from 'react';

const [state, setState] = useState({});
const onChange = (value) => setState({ value });
<div>
    <Textarea
        label="Lorem ipsum"
        labelMode="horizontal"
        placeholder="Write here"
        onChange={onChange}
        value={state.value}
    />
</div>;
```

Without label:

```jsx
import { useState } from 'react';

const [state, setState] = useState({});
const onChange = (value) => setState({ value });
<div>
    <Textarea placeholder="Write here" onChange={onChange} value={state.value} />
</div>;
```

Without clear:

```jsx
import { useState } from 'react';

const [state, setState] = useState({});
const onChange = (value) => setState({ value });
<div>
    <Textarea
        label="Lorem ipsum"
        placeholder="Write here"
        onChange={onChange}
        value={state.value}
        hideClear
    />
</div>;
```

Reading Clear Action:

```jsx
import { useState } from 'react';

const [state, setState] = useState({});
const onChange = (value, e, info) => {
    if (info && info.action) alert(info.action);
    setState({ value });
};
<div>
    <Textarea
        label="Lorem ipsum"
        placeholder="Write here"
        onChange={onChange}
        value={state.value}
    />
</div>;
```

Full width:

```jsx
import { useState } from 'react';

const [state, setState] = useState({});
const onChange = (value) => setState({ value });
<div>
    <Textarea
        label="Lorem ipsum"
        placeholder="Write here"
        onChange={onChange}
        value={state.value}
        isFullWidth
    />
</div>;
```

### Component tree

---

-   root - root element
-   textarea - Native textarea
-   info - Info text wrapper
-   error - Error wrapper
-   formControl - Input wrapper excluding label
-   [Label](#/Forms?id=label)
-   inputWrapper - Wrapper around Label and input components
-   postComponent - Component rendered at the input ending
-   textareaComponents - Wrapper around input and spost components
