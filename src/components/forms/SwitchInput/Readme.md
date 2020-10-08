States:

```jsx
<div>
    <SwitchInput label="Lorem Ipsum" />
    <span> </span>
    <SwitchInput label="Lorem Ipsum" value={true} info="Info text here" />
    <span> </span>
    <SwitchInput label="Lorem Ipsum" isReadOnly error="Error text here" />
    <span> </span>
    <SwitchInput label="Lorem Ipsum" value={true} isReadOnly />
</div>
```

Interactive:

```jsx
import { useState } from 'react';

const [state, setState] = useState({});

function toggleState(st) {
    if (state.checked) {
        setState({
            checked: false,
        });
    } else {
        setState({
            checked: true,
        });
    }
}

<div>
    <SwitchInput label="Lorem Ipsum" onChange={toggleState} value={state.checked} />
</div>;
```

Vertical

```jsx
import { useState } from 'react';

const [state, setState] = useState({});

function toggleState(st) {
    if (state.checked) {
        setState({
            checked: false,
        });
    } else {
        setState({
            checked: true,
        });
    }
}

<div>
    <SwitchInput
        label="Lorem Ipsum"
        labelMode="vertical"
        onChange={toggleState}
        value={state.checked}
        info="Info text here"
        error="Error text here"
    />
</div>;
```

### Component tree

---

-   root - root element
-   [Switch](https://github.com/markusenglund/react-switch)
