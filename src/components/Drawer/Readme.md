Default:

```jsx
import Button from 'hoi-poi-ui/Button';
let isOpen = state.isOpen || false;
let side = state.side || 'right';

<div>
    <Button color="primary" onClick={() => setState({ side: 'left', isOpen: !isOpen })}>
        Left
    </Button>
    <span> </span>
    <Button color="primary" onClick={() => setState({ side: 'right', isOpen: !isOpen })}>
        Right
    </Button>
    <span> </span>
    <Drawer side={state.side} isOpen={isOpen}>
        <span onClick={() => setState({ isOpen: false })}>Close</span>
    </Drawer>
</div>;
```

Custom width:

```jsx
import Button from 'hoi-poi-ui/Button';
let isOpen = state.isOpen || false;
let side = state.side || 'right';

<div>
    <Button color="primary" onClick={() => setState({ side: 'left', isOpen: !isOpen })}>
        Left
    </Button>
    <span> </span>
    <Button color="primary" onClick={() => setState({ side: 'right', isOpen: !isOpen })}>
        Right
    </Button>
    <span> </span>
    <Drawer side={state.side} isOpen={isOpen} width="80%">
        <span onClick={() => setState({ isOpen: false })}>Close</span>
    </Drawer>
</div>;
```

### Component tree

---

-   [modal](https://github.com/reactjs/react-modal)
-   content - inner content and `children` wrapper.
