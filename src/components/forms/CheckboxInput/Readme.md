States:

```jsx
<div>
    <CheckboxInput label="Lorem Ipsum" />
    <span> </span>
    <CheckboxInput label="Lorem Ipsum" value={true} />
    <span> </span>
    <CheckboxInput label="Lorem Ipsum" isReadOnly />
    <span> </span>
    <CheckboxInput label="Lorem Ipsum" value={true} isReadOnly />
</div>
```

Interactive:

```jsx
import { useState } from 'react';
const [state, setState] = useState({});
function toggleState(value) {
    setState({
        value,
    });
}

<div>
    <CheckboxInput label="Lorem Ipsum" onChange={toggleState} value={state.value} />
</div>;
```

Bulk:

```jsx
import { useState } from 'react';
const [state, setState] = useState({});
function toggleState(value) {
    setState({
        value,
    });
}

<div>
    <CheckboxInput
        label="Lorem Ipsum"
        onChange={toggleState}
        value={state.value}
        isBulk
        bulkEditLabel="Click to edit"
        bulkCancelLabel="Cancel"
    />
</div>;
```

### Component tree

---

-   root - root element
-   [Checkbox](#/General?id=checkbox)
