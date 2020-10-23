States:

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

States BiTone

```jsx
<div>
    <Checkbox color="red" isBiTone />
    <span> </span>
    <Checkbox color="red" isBiTone checked />
    <span> </span>
    <Checkbox color="red" isBiTone checked indeterminate />
    <br />
    <Checkbox color="red" isBiTone isDisabled />
    <span> </span>
    <Checkbox color="red" isBiTone checked isDisabled />
    <span> </span>
    <Checkbox color="red" isBiTone checked indeterminate isDisabled />
    <br />
    <Checkbox color="orange" isBiTone />
    <span> </span>
    <Checkbox color="orange" isBiTone checked />
    <span> </span>
    <Checkbox color="orange" isBiTone checked indeterminate />
    <br />
    <Checkbox color="orange" isBiTone isDisabled />
    <span> </span>
    <Checkbox color="orange" isBiTone checked isDisabled />
    <span> </span>
    <Checkbox color="orange" isBiTone checked indeterminate isDisabled />
    <br />
    <Checkbox color="green" isBiTone />
    <span> </span>
    <Checkbox color="green" isBiTone checked />
    <span> </span>
    <Checkbox color="green" isBiTone checked indeterminate />
    <br />
    <Checkbox color="green" isBiTone isDisabled />
    <span> </span>
    <Checkbox color="green" isBiTone checked isDisabled />
    <span> </span>
    <Checkbox color="green" isBiTone checked indeterminate isDisabled />
</div>
```

States Custom

```jsx
const colors = {
    unchecked: 'violet',
    uncheckedDisabled: 'indigo',
    checked: 'blue',
    checkedDisabled: 'green',
    indeterminate: 'yellow',
    indeterminateDisabled: 'orange',
};

<div>
    <Checkbox colors={colors}/>
    <span> </span>
    <Checkbox colors={colors} checked />
    <span> </span>
    <Checkbox colors={colors} checked indeterminate />
    <br />
    <Checkbox colors={colors} isDisabled />
    <span> </span>
    <Checkbox colors={colors} checked isDisabled />
    <span> </span>
    <Checkbox colors={colors} checked indeterminate isDisabled />
</div>
```

Custom color:

```jsx
<div>
    <Checkbox color="red" />
    <span> </span>
    <Checkbox color="red" checked />
    <span> </span>
    <Checkbox color="orange" />
    <span> </span>
    <Checkbox color="orange" checked />
    <span> </span>
    <Checkbox color="green" />
    <span> </span>
    <Checkbox color="green" checked />
    <span> </span>
    <Checkbox color="blue" />
    <span> </span>
    <Checkbox color="blue" checked />
    <span> </span>
    <Checkbox color="purple" />
    <span> </span>
    <Checkbox color="purple" checked />
    <span> </span>
    <Checkbox color="aqua" />
    <span> </span>
    <Checkbox color="aqua" checked />
    <span> </span>
    <Checkbox color="yellow" />
    <span> </span>
    <Checkbox color="yellow" checked />
    <span> </span>
    <Checkbox color="turquoise" />
    <span> </span>
    <Checkbox color="turquoise" checked />
    <br />
    <Checkbox color="red" isDisabled />
    <span> </span>
    <Checkbox color="red" checked isDisabled />
    <span> </span>
    <Checkbox color="orange" isDisabled />
    <span> </span>
    <Checkbox color="orange" checked isDisabled />
    <span> </span>
    <Checkbox color="green" isDisabled />
    <span> </span>
    <Checkbox color="green" checked isDisabled />
    <span> </span>
    <Checkbox color="blue" isDisabled />
    <span> </span>
    <Checkbox color="blue" checked isDisabled />
    <span> </span>
    <Checkbox color="purple" isDisabled />
    <span> </span>
    <Checkbox color="purple" checked isDisabled />
    <span> </span>
    <Checkbox color="aqua" isDisabled />
    <span> </span>
    <Checkbox color="aqua" checked isDisabled />
    <span> </span>
    <Checkbox color="yellow" isDisabled />
    <span> </span>
    <Checkbox color="yellow" checked isDisabled />
    <span> </span>
    <Checkbox color="turquoise" isDisabled />
    <span> </span>
    <Checkbox color="turquoise" checked isDisabled />
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
