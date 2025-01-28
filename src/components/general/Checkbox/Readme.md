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
    <Checkbox color="semanticNegative" />
    <span> </span>
    <Checkbox color="semanticNegative" checked />
    <span> </span>
    <Checkbox color="semanticNegative" checked indeterminate />
    <br />
    <Checkbox color="semanticNegative" isDisabled />
    <span> </span>
    <Checkbox color="semanticNegative" checked isDisabled />
    <span> </span>
    <Checkbox color="semanticNegative" checked indeterminate isDisabled />
    <br />
    <Checkbox color="actionMajor" />
    <span> </span>
    <Checkbox color="actionMajor" checked />
    <span> </span>
    <Checkbox color="actionMajor" checked indeterminate />
    <br />
    <Checkbox color="actionMajor" isDisabled />
    <span> </span>
    <Checkbox color="actionMajor" checked isDisabled />
    <span> </span>
    <Checkbox color="actionMajor" checked indeterminate isDisabled />
    <br />
    <br />
    <Checkbox color="actionMinor" />
    <span> </span>
    <Checkbox color="actionMinor" checked />
    <span> </span>
    <Checkbox color="actionMinor" checked indeterminate />
    <br />
    <Checkbox color="actionMinor" isDisabled />
    <span> </span>
    <Checkbox color="actionMinor" checked isDisabled />
    <span> </span>
    <Checkbox color="actionMinor" checked indeterminate isDisabled />
    <br />
    <Checkbox color="semanticPositive" />
    <span> </span>
    <Checkbox color="semanticPositive" checked />
    <span> </span>
    <Checkbox color="semanticPositive" checked indeterminate />
    <br />
    <Checkbox color="semanticPositive" isDisabled />
    <span> </span>
    <Checkbox color="semanticPositive" checked isDisabled />
    <span> </span>
    <Checkbox color="semanticPositive" checked indeterminate isDisabled />
</div>
```

States monotone color:

```jsx
<div>
    <Checkbox isMonotone color="semanticNegative" />
    <span> </span>
    <Checkbox isMonotone color="semanticNegative" checked />
    <span> </span>
    <Checkbox isMonotone color="actionMajor" />
    <span> </span>
    <Checkbox isMonotone color="actionMajor" checked />
    <span> </span>
    <Checkbox isMonotone color="actionMinor" />
    <span> </span>
    <Checkbox isMonotone color="actionMinor" checked />
    <span> </span>
    <Checkbox isMonotone color="semanticPositive" />
    <span> </span>
    <Checkbox isMonotone color="semanticPositive" checked />
    <span> </span>
    <Checkbox isMonotone color="semanticInfo" />
    <span> </span>
    <Checkbox isMonotone color="semanticInfo" checked />
    <span> </span>
    <Checkbox isMonotone color="semanticFocus" />
    <span> </span>
    <Checkbox isMonotone color="semanticFocus" checked />
    <span> </span>
    <Checkbox isMonotone color="purple" />
    <span> </span>
    <Checkbox isMonotone color="purple" checked />
    <br />
    <Checkbox isMonotone color="semanticNegative" isDisabled />
    <span> </span>
    <Checkbox isMonotone color="semanticNegative" checked isDisabled />
    <span> </span>
    <Checkbox isMonotone color="actionMajor" isDisabled />
    <span> </span>
    <Checkbox isMonotone color="actionMajor" checked isDisabled />
    <span> </span>
    <Checkbox isMonotone color="actionMinor" isDisabled />
    <span> </span>
    <Checkbox isMonotone color="actionMinor" checked isDisabled />
    <span> </span>
    <Checkbox isMonotone color="semanticPositive" isDisabled />
    <span> </span>
    <Checkbox isMonotone color="semanticPositive" checked isDisabled />
    <span> </span>
    <Checkbox isMonotone color="semanticInfo" isDisabled />
    <span> </span>
    <Checkbox isMonotone color="semanticInfo" checked isDisabled />
    <span> </span>
    <Checkbox isMonotone color="semanticFocus" isDisabled />
    <span> </span>
    <Checkbox isMonotone color="semanticFocus" checked isDisabled />
    <span> </span>
    <Checkbox isMonotone color="purple" isDisabled />
    <span> </span>
    <Checkbox isMonotone color="purple" checked isDisabled />
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
