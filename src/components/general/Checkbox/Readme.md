States default:

```jsx
<div>
    <Checkbox />
    <span> </span>
    <Checkbox checked />
    <span> </span>
    <Checkbox checked indeterminate />
    <br />
    <Checkbox isDisabled />
    <span> </span>
    <Checkbox checked isDisabled />
    <span> </span>
    <Checkbox checked indeterminate isDisabled />
</div>
```

States default with color

```jsx
<div>
    <Checkbox color="red" />
    <span> </span>
    <Checkbox color="red" checked />
    <span> </span>
    <Checkbox color="red" checked indeterminate />
    <br />
    <Checkbox color="red" isDisabled />
    <span> </span>
    <Checkbox color="red" checked isDisabled />
    <span> </span>
    <Checkbox color="red" checked indeterminate isDisabled />
    <br />
    <Checkbox color="orange" />
    <span> </span>
    <Checkbox color="orange" checked />
    <span> </span>
    <Checkbox color="orange" checked indeterminate />
    <br />
    <Checkbox color="orange" isDisabled />
    <span> </span>
    <Checkbox color="orange" checked isDisabled />
    <span> </span>
    <Checkbox color="orange" checked indeterminate isDisabled />
    <br />
    <Checkbox color="green" />
    <span> </span>
    <Checkbox color="green" checked />
    <span> </span>
    <Checkbox color="green" checked indeterminate />
    <br />
    <Checkbox color="green" isDisabled />
    <span> </span>
    <Checkbox color="green" checked isDisabled />
    <span> </span>
    <Checkbox color="green" checked indeterminate isDisabled />
</div>
```

States monotone color:

```jsx
<div>
    <Checkbox isMonotone color="red" />
    <span> </span>
    <Checkbox isMonotone color="red" checked />
    <span> </span>
    <Checkbox isMonotone color="orange" />
    <span> </span>
    <Checkbox isMonotone color="orange" checked />
    <span> </span>
    <Checkbox isMonotone color="green" />
    <span> </span>
    <Checkbox isMonotone color="green" checked />
    <span> </span>
    <Checkbox isMonotone color="blue" />
    <span> </span>
    <Checkbox isMonotone color="blue" checked />
    <span> </span>
    <Checkbox isMonotone color="purple" />
    <span> </span>
    <Checkbox isMonotone color="purple" checked />
    <span> </span>
    <Checkbox isMonotone color="aqua" />
    <span> </span>
    <Checkbox isMonotone color="aqua" checked />
    <span> </span>
    <Checkbox isMonotone color="yellow" />
    <span> </span>
    <Checkbox isMonotone color="yellow" checked />
    <span> </span>
    <Checkbox isMonotone color="turquoise" />
    <span> </span>
    <Checkbox isMonotone color="turquoise" checked />
    <br />
    <Checkbox isMonotone color="red" isDisabled />
    <span> </span>
    <Checkbox isMonotone color="red" checked isDisabled />
    <span> </span>
    <Checkbox isMonotone color="orange" isDisabled />
    <span> </span>
    <Checkbox isMonotone color="orange" checked isDisabled />
    <span> </span>
    <Checkbox isMonotone color="green" isDisabled />
    <span> </span>
    <Checkbox isMonotone color="green" checked isDisabled />
    <span> </span>
    <Checkbox isMonotone color="blue" isDisabled />
    <span> </span>
    <Checkbox isMonotone color="blue" checked isDisabled />
    <span> </span>
    <Checkbox isMonotone color="purple" isDisabled />
    <span> </span>
    <Checkbox isMonotone color="purple" checked isDisabled />
    <span> </span>
    <Checkbox isMonotone color="aqua" isDisabled />
    <span> </span>
    <Checkbox isMonotone color="aqua" checked isDisabled />
    <span> </span>
    <Checkbox isMonotone color="yellow" isDisabled />
    <span> </span>
    <Checkbox isMonotone color="yellow" checked isDisabled />
    <span> </span>
    <Checkbox isMonotone color="turquoise" isDisabled />
    <span> </span>
    <Checkbox isMonotone color="turquoise" checked isDisabled />
</div>
```

Size (icons):

```jsx
<div>
    <Checkbox size="small" />
    <span> </span>
    <Checkbox checked size="medium" />
    <span> </span>
    <Checkbox checked indeterminate size="large" />
    <span> </span>
    <Checkbox isDisabled size="big" />
    <span> </span>
    <Checkbox checked isDisabled size="huge" />
</div>
```

Interactive:

```jsx
import { useState } from 'react';

const [state, setState] = useState({});

function toggleState() {
    if (state.checked && state.indeterminate) {
        setState({
            checked: false,
            indeterminate: false,
        });
    } else if (state.checked && !state.indeterminate) {
        setState({
            checked: true,
            indeterminate: true,
        });
    } else if (!state.checked && !state.indeterminate) {
        setState({
            checked: true,
            indeterminate: false,
        });
    }
}

<div>
    <Checkbox onChange={toggleState} checked={state.checked} indeterminate={state.indeterminate} />
</div>;
```

### Component tree

---

-   root - root element
-   input - Hidden native input
-   svg - icon determined by the checkbox state
