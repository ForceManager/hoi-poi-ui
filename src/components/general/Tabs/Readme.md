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

let tabs = [...Array(100)].fill(0).map((_, i) => ({
    key: `tab-${i}`,
    title: `Tab ${i}`,
    popoverContent: (
        <div style={{ width: 200, height: 100, padding: 16, boxSizing: 'border-box' }}>
            <Text>{`Popover for tab-${i}`}</Text>
        </div>
    ),
    popoverWidth: 200,
}));
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

Preview Tabs:

```jsx
import { useState } from 'react';
import Text from '../../typography/Text';

const [state, setState] = useState({
    activeKey: 'tab-1',
    tabs: [...Array(5)].fill(0).map((_, i) => ({
        key: `tab-${i}`,
        title: `Tab ${i}`,
        fixed: i === 0,
        popoverContent: (
            <div
                className="hereeeee"
                style={{ width: 200, height: 100, padding: 16, boxSizing: 'border-box' }}
            >
                <Text>{`Popover for tab-${i}`}</Text>
            </div>
        ),
        popoverWidth: 200,
    })),
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
    popoverAlignLeft
/>;
```

Preview Tabs in Modal:

```jsx
import { useState, useRef, useMemo } from 'react';
import Text from '../../typography/Text';
import Button from '../Button';
import Modal from '../Modal';

const [state, setState] = useState({
    activeKey: 'tab-1',
    tabs: [...Array(5)].fill(0).map((_, i) => ({
        key: `tab-${i}`,
        title: `Tab ${i}`,
        fixed: i === 0,
        popoverContent: (
            <div
                className="hereeeee"
                style={{ width: 200, height: 100, padding: 16, boxSizing: 'border-box' }}
            >
                <Text>{`Popover for tab-${i}`}</Text>
            </div>
        ),
        popoverWidth: 200,
    })),
});
const [isOpen, setIsOpen] = useState(false);
const [containerElement, setContainerElement] = useState(null);

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

<div>
    <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
    <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        getContentRef={(ref) => {
            setContainerElement(ref);
        }}
        height="400px"
        size="big"
    >
        <div style={{ padding: '0px 16px' }}>
            <Tabs
                onChange={onChange}
                onClose={onClose}
                activeKey={state.activeKey}
                tabs={state.tabs}
                editable
                containerElement={containerElement}
                popoverOffsetCorrection={32}
            />
        </div>

        <div
            style={{
                height: '200px',
                boxSizing: 'border-box',
                padding: '20px',
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            this is content
        </div>
    </Modal>
</div>;
```

Draggable Tabs:

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

function onSorting(newTabs) {
    setState((state) => ({
        ...state,
        tabs: newTabs,
    }));
}

<Tabs
    onChange={onChange}
    onClose={onClose}
    activeKey={state.activeKey}
    tabs={state.tabs}
    editable
    draggable
    onSorting={onSorting}
/>;
```

### Component tree

---

-   root - wrapper
-   [rc-tabs](https://github.com/react-component/tabs)
-   postComponent - post component wrapper
