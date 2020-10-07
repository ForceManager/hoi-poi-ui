States:

```jsx
<div>
    <Switch size="small" checked />
    <br />
    <Switch size="medium" />
    <br />
    <Switch size="large" checked />
    <br />
    <br />
    <Switch size="small" checked isDisabled />
    <br />
    <Switch size="medium" isDisabled />
    <br />
    <Switch size="large" checked isDisabled />
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
    <Switch size="small" onClick={toggleState} onChange={toggleState} checked={state.checked} />
</div>;
```

### Component tree

---

-   root - root element
-   [Switch](https://github.com/markusenglund/react-switch)
