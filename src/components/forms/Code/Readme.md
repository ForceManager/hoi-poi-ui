Default:

```jsx
import { useState } from 'react';

const [state, setState] = useState('');

<Code isFullWidth label="Code" onChange={setState} value={state} />;
```

### Component tree

---

-   root - root element
-   input - Native input
-   info - Info text wrapper
-   error - Error wrapper
-   formControl - Input wrapper excluding label
-   [Label](#/Forms?id=label)
-   inputWrapper - Wrapper around Label and input components
-   [react-ace](https://github.com/securingsincity/react-ace)
