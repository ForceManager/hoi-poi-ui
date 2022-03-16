```jsx
import { useState } from 'react';

const [state, setState] = useState({});
const onChange = (field) => {
    return (value) => {
        setState({ ...state, [field]: value });
    };
};

<div>
    <Password label="Password" placeholder="Write here" onChange={onChange(1)} value={state[1]} />
</div>;
```

### Component tree

---

Same [Input](#/Forms?id=Input) props and component tree
