States:

```jsx
<div>
    <Switch />
    <span> </span>
    <Switch checked />
    <br />
    <Switch isDisabled />
    <span> </span>
    <Switch checked isDisabled />
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
    <Switch onChange={toggleState} checked={state.checked} />
</div>;
```

### Component tree

---

-   root - root element
-   [Switch](https://github.com/markusenglund/react-switch)
