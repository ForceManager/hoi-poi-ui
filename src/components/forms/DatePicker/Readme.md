Horizontal label:

```jsx
import { useState } from 'react';
const [state, setState] = useState({});
const onChange = (field) => {
    return (e) => {
        setState({ [field]: e });
    };
};

<div>
    <DatePicker label="Lorem ipsum" onChange={onChange(1)} value={state[1]} />
    <DatePicker
        label="Lorem ipsum"
        hint="Hello!"
        isRequired
        onChange={onChange(2)}
        value={state[2]}
    />
    <DatePicker
        label="Lorem ipsum Lorem ipsum Lorem ipsum"
        hint="Hello!"
        isRequired
        onChange={onChange(3)}
        value={state[3]}
    />
    <DatePicker label="Lorem ipsum" error="I am an error" />
    <DatePicker label="Lorem ipsum" info="I am an info message" />
    <DatePicker label="Lorem ipsum" info="I am an info message" error="I am an error" />
    <DatePicker label="Lorem ipsum" onChange={onChange(4)} value={state[4]} isReadOnly />
    <DatePicker label="Lorem ipsum" onChange={onChange(4)} value={state[4]} isCopyable />
    <DatePicker label="Lorem ipsum" onChange={onChange(4)} value={state[4]} isReadOnly isCopyable />
</div>;
```

Vertical label:

```jsx
import { useState } from 'react';
const [state, setState] = useState({});
const onChange = (e) => setState({ value: e });
<div>
    <DatePicker label="Lorem ipsum" labelMode="vertical" onChange={onChange} value={state.value} />
</div>;
```

Type datetime

```jsx
import { useState } from 'react';
const [state, setState] = useState({});
const onChange = (e) => setState({ value: e });
<div>
    <DatePicker label="Lorem ipsum" type="datetime" onChange={onChange} value={state.value} />
</div>;
```

Custom formatDate

```jsx
import { useState } from 'react';
const [state, setState] = useState({});
const onChange = (e) => setState({ value: e });
const formatDate = (value, format) => {
    return value;
};
<div>
    <DatePicker
        label="Lorem ipsum"
        formatDate={formatDate}
        onChange={onChange}
        value={state.value}
    />
</div>;
```

Data time with custom format

```jsx
import { useState } from 'react';
const [state, setState] = useState({});
const onChange = (e) => setState({ value: e });
const formatDate = (value, format) => {
    return value;
};
<div>
    <DatePicker
        label="Lorem ipsum"
        type="datetime"
        formatDate={formatDate}
        onChange={onChange}
        value={state.value}
    />
</div>;
```

### Component tree

---

-   root - root element
-   input - Native input
-   error - Error wrapper
-   formControl - Input wrapper excluding label
-   [Label](#/Forms?id=label)
