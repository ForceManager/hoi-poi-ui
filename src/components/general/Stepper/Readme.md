Default:

```jsx
import { useState } from 'react';

const [state, setState] = useState({});
let steps = [
    {
        title: 'Step 1',
        isCompleted: true,
    },
    {
        title: 'Step 2',
    },
    {
        title: 'Step 3',
    },
    {
        title: 'Step 4',
    },
    {
        title: 'Step 5',
    },
];

const currentStep = state.currentStep !== undefined ? state.currentStep : 1;
function onClick(step) {
    setState({
        currentStep: step,
    });
}

<Stepper onClick={onClick} currentStep={currentStep} steps={steps} />;
```

### Component tree

---

-   root - wrapper
-   [rc-steps](https://github.com/react-component/steps)
