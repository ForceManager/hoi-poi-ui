Default:

```jsx
import { useState } from 'react';

const [state, setState] = useState({});

const onChange = (value) => setState({ value });
<div>
    <Slider label="Lorem ipsum" onChange={onChange} value={state.value} />
</div>;
```

Percentage tip:

```jsx
import { useState } from 'react';

const [state, setState] = useState({});

const onChange = (value) => setState({ value });
<div>
    <Slider label="Lorem ipsum" onChange={onChange} value={state.value} isPercentage isFullWidth />
</div>;
```

Custom tip:

```jsx
import { useState } from 'react';

const [state, setState] = useState({});

const onChange = (value) => setState({ value });
<div>
    <Slider
        label="Lorem ipsum"
        onChange={onChange}
        value={state.value}
        tipFormatter={(v) => `${v}$`}
        isFullWidth
    />
</div>;
```

Custom max/min/step:

```jsx
import { useState } from 'react';

const [state, setState] = useState(5000);

const onChange = (value) => setState({ value });
<div>
    <Slider
        label="Lorem ipsum"
        onChange={onChange}
        value={state.value}
        max={10000}
        min={5000}
        step={100}
    />
</div>;
```

Range handler:

```jsx
import { useState } from 'react';

const [state, setState] = useState({});

const onChange = (value) => setState({ value });
<div>
    <Slider label="Lorem ipsum" onChange={onChange} value={state.value} isRange />
</div>;
```

Bottom info & error

```jsx
import { useState } from 'react';

const [state, setState] = useState({});

const onChange = (value) => setState({ value });
<div>
    <Slider
        label="Lorem ipsum"
        onChange={onChange}
        value={state.value}
        isReadOnly
        isRange
        error="Error text here"
        info="Info text here"
    />
</div>;
```

### Component tree

---

-   root - root element
-   [rc-slider](https://github.com/react-component/slider/)
-   error - Error wrapper
-   formControl - Input wrapper excluding label
-   [Label](#/Forms?id=label)
-   overlay - Dragged component (tip)
-   overlayLabel - Dragged component label (tip)
