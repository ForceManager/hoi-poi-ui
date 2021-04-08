Title Field:

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
    <Input
        label="Title"
        placeholder="Write here"
        onChange={onChange('1')}
        value={state['1']}
        type="title"
    />
    <Input
        label="Title Error"
        placeholder="Write here"
        onChange={onChange('2')}
        value={state['2']}
        type="title"
        info="I am an info message"
        error="I am an error"
    />
    <Input
        label="Title ReadOnly"
        placeholder="Write here"
        onChange={onChange('3')}
        value={state['3']}
        type="title"
        isCopyable={true}
        onCopy={onCopy}
        isReadOnly={true}
    />
</div>;
```

Text Field:

```jsx
import { useState } from 'react';

const [state, setState] = useState({});
const onChange = (field) => {
    return (value) => {
        setState({ ...state, [field]: value });
    };
};

<div>
    <Input
        label="Text"
        placeholder="Write here"
        onChange={onChange(1)}
        value={state[1]}
        type="text"
    />
</div>;
```

Integer Field:

```jsx
import { useState } from 'react';

const [state, setState] = useState({});
const onChange = (field) => {
    return (value) => {
        setState({ ...state, [field]: value });
    };
};

const onBlur = (field) => {
    return (value) => {
        setState({ ...state, [field]: value });
    };
};
<div>
    <Input
        label="Integer"
        placeholder="0"
        onChange={onChange(1)}
        onBlur={onBlur(1)}
        value={state[1]}
        type="integer"
    />
</div>;
```

Decimal Field:

```jsx
import { useState } from 'react';

const [state, setState] = useState({});
const onChange = (field) => {
    return (value) => {
        setState({ ...state, [field]: value });
    };
};

const onBlur = (field) => {
    return (value) => {
        setState({ ...state, [field]: value });
    };
};
<div>
    <Input
        label="Decimal"
        placeholder="0.00"
        onChange={onChange(1)}
        onBlur={onBlur(1)}
        value={state[1]}
        type="decimal"
    />
    <Input
        label="Custom decimals"
        numberDecimals="3"
        placeholder="0.000"
        onChange={onChange(2)}
        onBlur={onBlur(2)}
        value={state[2]}
        type="decimal"
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
    <Input
        label="Hint"
        placeholder="Write here"
        hint="Hello!"
        isRequired
        onChange={onChange(1)}
        value={state[1]}
    />
    <Input
        label="Info"
        placeholder="Write here"
        onChange={onChange(2)}
        value={state[2]}
        info="I am an info message"
    />
    <Input
        label="Error"
        placeholder="Write here"
        onChange={onChange(3)}
        value={state[3]}
        error="I am an error"
    />
    <Input
        label="Info and Error"
        placeholder="Write here"
        onChange={onChange(4)}
        value={state[4]}
        info="I am an info message"
        error="I am an error"
    />
    <Input label="Disabled" placeholder="Write here" value="I am disabled" isReadOnly={true} />
    <Input
        label="Copy"
        placeholder="Write here"
        onChange={onChange(6)}
        value={state[6]}
        isCopyable={true}
        onCopy={onCopy}
    />
    <Input
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
    <Input
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
    <Input placeholder="Write here" onChange={onChange} value={state.value} />
</div>;
```

Without clear:

```jsx
import { useState } from 'react';

const [state, setState] = useState({});
const onChange = (value) => setState({ value });
<div>
    <Input
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
    <Input label="Lorem ipsum" placeholder="Write here" onChange={onChange} value={state.value} />
</div>;
```

Pre/Post components

```jsx
import { useState } from 'react';

import { Icon } from 'hoi-poi-ui';
const [state, setState] = useState({});
const onChange = (value) => setState({ value });
<div>
    <Input
        label="Lorem ipsum"
        placeholder="Write here"
        onChange={onChange}
        value={state.value}
        preComponent={<span>$</span>}
        postComponent={<Icon name="chevron" />}
    />
</div>;
```

Full width:

```jsx
import { useState } from 'react';

const [state, setState] = useState({});
const onChange = (value) => setState({ value });
<div>
    <Input
        label="Lorem ipsum"
        placeholder="Write here"
        onChange={onChange}
        value={state.value}
        isFullWidth
    />
</div>;
```

Custom component:

```jsx
import { useState } from 'react';
import CustomComponent from './CustomComponent';
const [state, setState] = useState({});
const onChange = (field) => {
    return (value) => {
        setState({ ...state, [field]: value });
    };
};

<div>
    <Input
        label="Lorem ipsum"
        placeholder="Write something in this custom input"
        component={CustomComponent}
        onChange={onChange(1)}
        value={state[1]}
    />
</div>;
```

### Component tree

---

-   root - root element
-   input - Native input
-   info - Info text wrapper
-   error - Error wrapper
-   formControl - Input wrapper excluding label
-   [Label](#/Forms?id=label)
-   inputWrapper - Wrapper around Label and input components
-   preComponent - Component rendered at the input beginning
-   postComponent - Component rendered at the input ending
-   inputComponents - Wrapper around input and pre/post components
