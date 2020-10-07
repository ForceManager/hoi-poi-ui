States:

```jsx
<div>
    <SwitchInput label="Lorem Ipsum" />
    <span> </span>
    <SwitchInput label="Lorem Ipsum" value={true} />
    <span> </span>
    <SwitchInput label="Lorem Ipsum" isReadOnly />
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

### Component tree

---

-   root - root element
-   [Switch](https://github.com/markusenglund/react-switch)
