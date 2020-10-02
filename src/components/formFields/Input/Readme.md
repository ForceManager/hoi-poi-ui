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
    <Input 
        label="Title"
        placeholder="Write here"
        onChange={onChange('title1')}
        value={state['title1']}
        type="title"
    />
    <Input
        label="Title Error"
        placeholder="Write here"
        onChange={onChange('title2')}
        value={state['title2']}
        type="title"
        info="I am an info message"
        error="I am an error"
    />
    <Input
        label="Title ReadOnly"
        placeholder="Write here"
        onChange={onChange('title3')}
        value={state['title3']}
        type="title"
        isCopyable={true}
        onCopy={onCopy}
        isReadOnly={true}
    />
    <Input label="Text" placeholder="Write here" onChange={onChange(1)} value={state[1]} type="text"/>
    <Input label="Integer" placeholder="0" onChange={onChange(2)} value={state[2]} type="integer"/>
    <Input label="Decimal" placeholder="0.00" onChange={onChange(3)} value={state[3]} type="decimal"/>
    <Input
        label="Lorem ipsum"
        placeholder="Write here"
        hint="Hello!"
        isRequired
        onChange={onChange(4)}
        value={state[4]}
        size="small"
    />
    <Input
        label="Lorem ipsum Lorem ipsum Lorem ipsum"
        placeholder="Write here"
        hint="Hello!"
        isRequired
        onChange={onChange(5)}
        value={state[5]}
        size="big"
    />
    <Input label="Lorem ipsum" placeholder="Write here" error="I am an error" />
    <Input label="Lorem ipsum" placeholder="Write here" info="I am an info message" />
    <Input
        label="Lorem ipsum"
        placeholder="Write here"
        info="I am an info message"
        error="I am an error"
    />
    <Input label="Lorem ipsum" placeholder="Write here" value="I am disabled" isReadOnly={true} />
    <Input
        label="Lorem ipsum"
        placeholder="Write here"
        onChange={onChange(6)}
        value={state[6]}
        isCopyable={true}
        onCopy={onCopy}
    />
    <Input
        label="Lorem ipsum"
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
const onChange = (e) => setState({ value: e && e.target ? e.target.value : '' });
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

Pre/Post components

```jsx
import { useState } from 'react';

import { Icon } from 'hoi-poi-ui';
const [state, setState] = useState({});
const onChange = (e) => setState({ value: e && e.target ? e.target.value : '' });
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

Custom component:

```jsx
import { useState } from 'react';
import CustomComponent from './CustomComponent';
const [state, setState] = useState({});
const onChange = (field) => {
    return (e) => {
        setState({ ...state, [field]: e && e.target ? e.target.value : '' });
    };
};

<div>
    <Input label="Lorem ipsum" placeholder="Write something in this custom input" component={CustomComponent} onChange={onChange(1)} value={state[1]}/>
</div>;
```

### Component tree

---

-   root - root element
-   input - Native input
-   error - Error wrapper
-   formControl - Input wrapper excluding label
-   [Label](#/Forms?id=label)
-   preComponent - Component rendered at the input beginning
-   postComponent - Component rendered at the input ending
