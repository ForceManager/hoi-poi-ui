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

Vertical:

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

<Tabs onChange={onChange} activeKey={activeKey} tabs={tabs} vertical />;
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

Closeable Tabs:

```jsx
import { useState } from 'react';

const [state, setState] = useState({
    activeKey: 'tab-1',
    tabs: [...Array(5)]
        .fill(0)
        .map((_, i) => ({ key: `tab-${i}`, title: `Tab ${i}`, fixed: i === 0 })),
});

function onChange(key) {
    setState((state) => ({
        ...state,
        activeKey: key,
    }));
}

function onClose({ key, activeKey, tabs }) {
    console.log(`Closed ${key} tab`);
    setState((state) => ({ activeKey, tabs }));
}

<Tabs
    onChange={onChange}
    onClose={onClose}
    activeKey={state.activeKey}
    tabs={state.tabs}
    editable
/>;
```

### Component tree

---

-   root - wrapper
-   [rc-tabs](https://github.com/react-component/tabs)
-   postComponent - post component wrapper
