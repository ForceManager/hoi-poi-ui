Default:

```jsx
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
let tabs = [...Array(100)].fill(0).map((_, i) => ({ key: `tab-${i}`, title: `Tab ${i}` }));
const activeKey = state.activeKey || 'tab-1';

function onChange(key) {
    setState({
        activeKey: key,
    });
}

<Tabs onChange={onChange} activeKey={activeKey} tabs={tabs} />;
```

### Component tree

---

-   root - wrapper
-   [rc-tabs](https://github.com/react-component/tabs)
