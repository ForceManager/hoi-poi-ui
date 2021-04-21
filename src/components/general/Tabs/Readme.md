Default:

```jsx
import { useState } from 'react';

const [state, setState] = useState({});
let tabs = [...Array(5)].fill(0).map((_, i) => ({ key: `tab-${i}`, title: `Tab ${i}` }));
const activeKey = state.activeKey || 'tab-1';

function onChange(key) {
    setState({
        activeKey: key,
    });
}

<Tabs onChange={onChange} activeKey={activeKey} tabs={tabs} />;
```

Scrolling:

```jsx
import { useState } from 'react';

const [state, setState] = useState({});
let tabs = [...Array(100)].fill(0).map((_, i) => ({ key: `tab-${i}`, title: `Tab ${i}` }));
const activeKey = state.activeKey || 'tab-1';

function onChange(key) {
    setState({
        activeKey: key,
    });
}

<Tabs onChange={onChange} activeKey={activeKey} tabs={tabs} />;
```

With postComponent:

```jsx
import { Text } from 'hoi-poi-ui';
import { useState } from 'react';

const [state, setState] = useState({});

let tabs = [...Array(100)].fill(0).map((_, i) => ({ key: `tab-${i}`, title: `Tab ${i}` }));
const activeKey = state.activeKey || 'tab-1';

function onChange(key) {
    setState({
        activeKey: key,
    });
}

<Tabs onChange={onChange} activeKey={activeKey} tabs={tabs} postComponent={<Text>Lorem</Text>} />;
```

### Component tree

---

-   root - wrapper
-   [rc-tabs](https://github.com/react-component/tabs)
-   postComponent - post component wrapper
